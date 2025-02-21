// src/app/projects/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Proyectos | ${siteConfig.site.name}`,
  description: 'Explora mi portafolio de proyectos de desarrollo web, aplicaciones y experimentos tecnológicos',
};

// Categorías de proyectos
const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'data', label: 'Data Science' },
  { id: 'experiments', label: 'Experimentos' }
];

// Obtener proyectos de la configuración o usar los predeterminados
const allProjects = siteConfig.allProjects || [
  // Proyecto 1...
  // Proyecto 2...
  // (Mantener los proyectos originales como fallback)
];

// Combinar proyectos destacados con regulares, asegurando que no haya duplicados
const projects = [
  ...(siteConfig.featuredProjects || []),
  ...allProjects.filter(p => 
    !(siteConfig.featuredProjects || []).some(fp => fp.id === p.id)
  )
];

export default function ProjectsPage() {
  // Separar proyectos destacados
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Mis Proyectos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Una selección de mis trabajos en desarrollo web, data science y experimentos tecnológicos.
        </p>
      </header>

      {/* Filter & Category */}
      <div className="mb-10 flex justify-center overflow-x-auto pb-2">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {projectCategories.map(category => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-md transition-colors ${
                category.id === 'all' 
                  ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white font-medium' 
                  : 'text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-750'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
            Proyectos Destacados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={`Captura del proyecto: ${project.title}`}
                    fill
                    className="object-cover"
                  />
                  {project.completionDate && (
                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      {new Date(project.completionDate).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
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
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium group"
                      >
                        <svg className="w-5 h-5 inline-block mr-1 transition-transform group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium group"
                      >
                        <svg className="w-5 h-5 inline-block mr-1 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        </section>
      )}

      {/* Regular Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Todos los Proyectos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.length > 0 ? (
            regularProjects.map(project => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={`Imagen de ${project.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span 
                        key={`${project.id}-${tag}`} 
                        className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm group"
                      >
                        <svg className="w-4 h-4 inline-block mr-1 transition-transform group-hover:-translate-y-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm group"
                      >
                        <svg className="w-4 h-4 inline-block mr-1 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Próximamente más proyectos
              </h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                Estoy trabajando en nuevos proyectos que serán añadidos pronto. ¡Vuelve a revisar más adelante!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {siteConfig.projectsCTA?.title || "¿Tienes un proyecto en mente?"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            {siteConfig.projectsCTA?.description || 
             "Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea o necesitas ayuda con un desarrollo, ¡conversemos sobre cómo puedo ayudarte!"}
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            {siteConfig.projectsCTA?.buttonText || "Hablemos de tu proyecto"}
          </Link>
        </div>
      </section>
    </div>
  );
}