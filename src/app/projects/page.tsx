// src/app/projects/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos | Mi Blog Personal',
  description: 'Explora mi portafolio de proyectos de desarrollo web, aplicaciones y experimentos tecnológicos',
};

// Tipo para un proyecto
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
};

// Datos de ejemplo de proyectos
const projects: Project[] = [
  {
    id: 'task-manager',
    title: 'Sistema de Gestión de Tareas',
    description: 'Aplicación full-stack desarrollada con React, Node.js y MongoDB para gestionar tareas y proyectos de forma eficiente. Incluye autenticación de usuarios, asignación de tareas, seguimiento de progreso y estadísticas.',
    image: '/images/project-1.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    demoUrl: 'https://task-manager-demo.com',
    codeUrl: 'https://github.com/tuusuario/task-manager',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Aplicación de Clima con API',
    description: 'Aplicación de pronóstico del tiempo que consume múltiples APIs meteorológicas y ofrece pronósticos precisos por ubicación. Incluye visualización de datos, gráficos y alertas personalizadas.',
    image: '/images/project-2.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'OpenWeather API', 'Chart.js'],
    demoUrl: 'https://weather-app-demo.vercel.app',
    codeUrl: 'https://github.com/tuusuario/weather-app',
    featured: true,
  },
  {
    id: 'e-commerce',
    title: 'Plataforma E-Commerce',
    description: 'Tienda en línea completa con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración. Desarrollada con Next.js, Stripe y Firebase.',
    image: '/images/project-3.jpg',
    tags: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS', 'Redux'],
    demoUrl: 'https://ecommerce-demo.vercel.app',
    codeUrl: 'https://github.com/tuusuario/ecommerce',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Portafolio Personal',
    description: 'Sitio web personal para mostrar proyectos y habilidades, con modo oscuro, animaciones y diseño responsivo. El mismo sitio que estás viendo ahora.',
    image: '/images/project-4.jpg',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    demoUrl: 'https://tunombre.dev',
    codeUrl: 'https://github.com/tuusuario/portfolio',
    featured: false,
  },
  {
    id: 'chat-app',
    title: 'Aplicación de Chat en Tiempo Real',
    description: 'Chat en tiempo real con funcionalidades de mensajería privada, grupos, envío de archivos y notificaciones. Implementado con Socket.io y React.',
    image: '/images/project-5.jpg',
    tags: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    demoUrl: 'https://chat-app-demo.herokuapp.com',
    codeUrl: 'https://github.com/tuusuario/chat-app',
    featured: false,
  },
  {
    id: 'dashboard',
    title: 'Dashboard Analítico',
    description: 'Panel de control para visualización de datos empresariales con gráficos interactivos, exportación de informes y filtros avanzados.',
    image: '/images/project-6.jpg',
    tags: ['React', 'D3.js', 'Material-UI', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://dashboard-demo.vercel.app',
    codeUrl: 'https://github.com/tuusuario/dashboard',
    featured: false,
  },
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
          Una selección de mis trabajos en desarrollo web, aplicaciones y experimentos tecnológicos.
        </p>
      </header>

      {/* Filter & Category - Futuro */}
      <div className="mb-10 flex justify-center">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button className="px-4 py-2 rounded-md bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white font-medium">
            Todos
          </button>
          <button className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-750">
            Web
          </button>
          <button className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-750">
            Mobile
          </button>
          <button className="px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-750">
            Experimentos
          </button>
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
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
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
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
        </section>
      )}

      {/* Regular Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Todos los Proyectos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
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
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
                    >
                      <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
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
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
                    >
                      <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      {/* Contact CTA */}
      <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea o necesitas ayuda con un desarrollo,
            ¡conversemos sobre cómo puedo ayudarte!
          </p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>
    </div>
  );
}