import { getAllPostSlugs, getPostData, Post } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import ShareButtons from '@/components/blog/ShareButtons';

type PostPageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PostPageParams): Promise<Metadata> {
  try {
    const post: Post = await getPostData(params.slug);
    
    return {
      title: `${post.title} | ${siteConfig.site.name}`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        authors: [siteConfig.author.name],
        siteName: siteConfig.site.name,
        locale: siteConfig.site.locale,
        images: [
          {
            url: post.coverImage,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        creator: siteConfig.socialLinks.twitter.split('/').pop() || '',
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: `Artículo no encontrado | ${siteConfig.site.name}`,
      description: 'El artículo que estás buscando no existe o fue eliminado',
    };
  }
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function PostPage({ params }: PostPageParams) {
  try {
    const post: Post = await getPostData(params.slug);
    const formattedDate = new Date(post.date).toLocaleDateString(siteConfig.site.locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <article className="max-w-3xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-8 group">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title and Meta */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?category=${tag.toLowerCase()}`}
                className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                <Image
                  src={siteConfig.author.profileImage}
                  alt={siteConfig.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTime}</span>
            </div>
          </div>

          {post.excerpt && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 italic">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="prose dark:prose-invert prose-lg max-w-none mb-12">
          <MDXRemote source={post.content} />
        </div>

        {/* Share & Navigation */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 pb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Compartir este artículo
              </h4>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
            
            <div>
              <Link 
                href="/blog"
                className="inline-flex items-center px-5 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Volver al blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error loading post:', error);
    notFound();
  }
}