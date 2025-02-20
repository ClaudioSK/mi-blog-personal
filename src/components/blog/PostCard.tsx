// src/components/blog/PostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { PostMetadata } from '@/lib/posts';

type PostCardProps = {
  post: PostMetadata;
};

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-500 dark:text-gray-400">
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}