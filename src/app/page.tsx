// src/app/blog/page.tsx
import { getSortedPostsMetadata } from '@/lib/posts';
import PostCard from '@/components/blog/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Mi Blog Personal',
  description: 'Artículos sobre desarrollo web, ingeniería informática y tecnología',
};

export default function BlogPage() {
  const posts = getSortedPostsMetadata();

  return (
    <div className="max-w-5xl mx-auto">
      {/* Blog Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Mis reflexiones, tutoriales y artículos sobre desarrollo web, ingeniería informática y tecnología.
        </p>
      </header>

      {/* Filter & Search - Futuro */}
      <div className="mb-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="w-full md:w-64">
          <select 
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            defaultValue=""
          >
            <option value="" disabled>Filtrar por categoría</option>
            <option value="all">Todas las categorías</option>
            <option value="react">React</option>
            <option value="nextjs">Next.js</option>
            <option value="typescript">TypeScript</option>
            <option value="css">CSS</option>
          </select>
        </div>
        
        <div className="w-full md:w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <div className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No hay artículos publicados
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Pronto añadiré artículos interesantes sobre desarrollo web, tecnología y mis experiencias como ingeniero informático.
          </p>
        </div>
      )}

      {/* Pagination - Futuro */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            &laquo; Anterior
          </button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">2</button>
          <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">3</button>
          <span className="px-2 text-gray-500 dark:text-gray-400">...</span>
          <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">8</button>
          <button className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            Siguiente &raquo;
          </button>
        </nav>
      </div>
    </div>
  );
}