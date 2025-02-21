// import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage: string;
  tags: string[];
  readingTime: string;
};

// Añade este nuevo tipo
export type Post = PostMetadata & {
  content: string;
};

export function getSortedPostsMetadata(): PostMetadata[] {
  // Verifica si el directorio existe
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // Obtiene los nombres de archivos del directorio
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => {
      // Solo archivos MDX
      return fileName.endsWith('.mdx');
    })
    .map(fileName => {
      // Remueve ".mdx" para obtener el slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Lee el contenido del archivo
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Usa gray-matter para parsear el contenido front matter
      const { data } = matter(fileContents);

      // Valida y establece los valores predeterminados para los metadatos
      const metadata: PostMetadata = {
        slug,
        title: data.title || 'Sin título',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author || 'Anónimo',
        coverImage: data.coverImage || '/images/default-cover.jpg',
        tags: data.tags || [],
        readingTime: data.readingTime || '5 min',
      };

      return metadata;
    });

  // Ordena los posts por fecha, del más reciente al más antiguo
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.mdx$/, ''),
        },
      };
    });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Usa gray-matter para parsear la sección de metadatos
    const { data, content } = matter(fileContents);
    
    // Combina los datos con el slug
    const metadata: PostMetadata = {
      slug,
      title: data.title || 'Sin título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'Anónimo',
      coverImage: data.coverImage || '/images/default-cover.jpg',
      tags: data.tags || [],
      readingTime: data.readingTime || '5 min',
    };
    
    return {
      ...metadata,
      content,
    };
  } catch (error) {
    console.error(`Error al leer el post ${slug}:`, error);
    return {
      slug,
      title: 'Error al cargar el post',
      date: new Date().toISOString(),
      excerpt: 'No se pudo cargar el contenido del post',
      author: 'Sistema',
      coverImage: '/images/error-cover.jpg',
      tags: ['error'],
      readingTime: '1 min',
      content: '# Error\nNo se pudo cargar el contenido del post.'
    };
  }
}