// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: `Sobre mí | ${siteConfig.site.name}`,
  description: 'Conoce más sobre mi trayectoria profesional, habilidades y experiencia como ingeniero informático',
};

export default function AboutPage() {
  // Asignar habilidades a las categorías correctas
  const { skills, experience } = siteConfig;
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Sobre mí
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ingeniero informático apasionado por el desarrollo web y las nuevas tecnologías
        </p>
      </header>

      {/* Profile Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl group">
            <Image
              src={siteConfig.author.profileImage || "/images/profile.jpg"}
              alt={`${siteConfig.author.name} - Foto de perfil`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="flex items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              ¡Hola! Soy {siteConfig.author.name}
            </h2>
            {siteConfig.author.availability && (
              <span className="ml-4 px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                {siteConfig.author.availability}
              </span>
            )}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Soy un ingeniero en informática especializado en desarrollo web frontend y backend, con experiencia en data science. Mi pasión es crear 
            aplicaciones web modernas, intuitivas y de alto rendimiento utilizando las últimas tecnologías.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cuento con más de 5 años de experiencia trabajando en diversos proyectos, desde startups hasta grandes empresas.
            Me encanta enfrentar nuevos desafíos técnicos y encontrar soluciones creativas a problemas complejos.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Cuando no estoy codificando, disfruto de la fotografía, el senderismo y los juegos de estrategia. Creo firmemente en el aprendizaje
            continuo y me mantengo actualizado con las últimas tendencias en tecnología.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {/* Social Links */}
            <div className="flex space-x-3">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={`Perfil de ${platform}`}
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
            </div>
            
            {/* Resume Button */}
            {siteConfig.author.resume && (
              <a 
                href={siteConfig.author.resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Descargar CV
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Habilidades técnicas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Desarrollo Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${95 - (index * 5)}%` }}
                    ></div>
                  </div>
                  <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Desarrollo Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${90 - (index * 5)}%` }}
                    ></div>
                  </div>
                  <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Data Science Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Data Science</h3>
            <ul className="space-y-2">
              {skills.dataScience.map((skill, index) => (
                <li key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${88 - (index * 4)}%` }}
                    ></div>
                  </div>
                  <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Database Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Bases de Datos</h3>
            <ul className="space-y-2">
              {skills.database.map((skill, index) => (
                <li key={skill} className="flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-orange-600 h-2.5 rounded-full" 
                      style={{ width: `${85 - (index * 5)}%` }}
                    ></div>
                  </div>
                  <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Tools & Other Skills */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Herramientas y DevOps</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool) => (
              <span 
                key={tool}
                className="px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Experiencia profesional
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-500">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.position}</h3>
                <span className="sm:ml-4 text-sm text-blue-600 dark:text-blue-400 font-medium">{job.company}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">{job.period}</span>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {job.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Formación académica
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ingeniería en Informática</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Universidad de Santiago</span> • <span className="text-gray-500 dark:text-gray-400">2014 - 2018</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Especialización en Desarrollo de Software y Sistemas Distribuidos.
              Proyecto final: &quot;Implementación de una plataforma de aprendizaje online con microservicios&quot;.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Máster en Desarrollo Web</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Escuela de Tecnología Avanzada</span> • <span className="text-gray-500 dark:text-gray-400">2019 - 2020</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Especialización en tecnologías frontend y arquitecturas modernas.
              Tesis: &quot;Optimización de rendimiento en aplicaciones web de gran escala&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {siteConfig.aboutCTA?.title || "¿Interesado en colaborar?"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          {siteConfig.aboutCTA?.description || 
           "Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Si tienes una idea o proyecto en mente, ¡me encantaría escucharte!"}
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
        >
          {siteConfig.aboutCTA?.buttonText || "Contáctame"}
        </Link>
      </section>
    </div>
  );
}

// Función auxiliar para obtener iconos de redes sociales
function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'medium':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      );
  }
}