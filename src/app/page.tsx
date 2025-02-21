import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsMetadata } from '@/lib/posts';
import { siteConfig } from '@/lib/config';
import PostCard from '@/components/blog/PostCard';

// Número de posts para mostrar en la página de inicio
const FEATURED_POSTS_COUNT = 3;

export default async function Home() {
  // Obtener los posts más recientes
  const latestPosts = getSortedPostsMetadata().slice(0, FEATURED_POSTS_COUNT);
  
  // Datos de proyectos destacados - podría venir de una función similar a getSortedPostsMetadata
  const featuredProjects = siteConfig.featuredProjects || [
    {
      id: 'task-manager',
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación full-stack desarrollada con React, Node.js y MongoDB para gestionar tareas y proyectos de forma eficiente.',
      image: '/images/project-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://task-manager-demo.com',
      codeUrl: 'https://github.com/tuusuario/task-manager',
    },
    {
      id: 'weather-app',
      title: 'Aplicación de Clima con API',
      description: 'Aplicación de pronóstico del tiempo que consume múltiples APIs meteorológicas y ofrece pronósticos precisos por ubicación.',
      image: '/images/project-2.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'OpenWeather API'],
      demoUrl: 'https://weather-app-demo.vercel.app',
      codeUrl: 'https://github.com/tuusuario/weather-app',
    }
  ];

  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hola, soy <span className="text-blue-600 dark:text-blue-400">{siteConfig.author.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            {siteConfig.author.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {siteConfig.author.bio}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors duration-300 text-center">
              Ver proyectos
            </Link>
            <Link href="/blog" className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-center">
              Leer blog
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src={siteConfig.author.profileImage || "/images/profile.jpg"}
              alt={`${siteConfig.author.name} - Foto de perfil`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Últimos artículos
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explora mis publicaciones más recientes sobre desarrollo, tecnología y más.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            // Mostrar posts de ejemplo si no hay posts reales todavía
            <>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/post-1.jpg"
                    alt="Imagen del artículo de ejemplo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-2">
                    React
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    Construyendo aplicaciones con Next.js y TypeScript
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    Una guía completa sobre cómo crear aplicaciones web modernas utilizando Next.js y TypeScript.
                  </p>
                  <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Leer más →
                  </Link>
                </div>
              </div>
              {/* Puedes añadir más posts de ejemplo aquí */}
            </>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-block font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Ver todos los artículos →
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Proyectos destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Algunos de mis trabajos más recientes en desarrollo web y software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={`Imagen del proyecto ${project.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                      Código
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      <svg className="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-block font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Ver todos los proyectos →
          </Link>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {siteConfig.contactCTA?.title || "¿Interesado en trabajar juntos?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {siteConfig.contactCTA?.description || 
             "Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. ¡Conversemos sobre cómo puedo ayudarte con tus necesidades tecnológicas!"}
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
          >
            {siteConfig.contactCTA?.buttonText || "Contactarme"}
          </Link>
        </div>
      </section>
    </div>
  );
}