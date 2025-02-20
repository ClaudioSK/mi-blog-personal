// src/app/about/page.tsx
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí | Mi Blog Personal',
  description: 'Conoce más sobre mi trayectoria profesional, habilidades y experiencia como ingeniero informático',
};

export default function AboutPage() {
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
          <div className="relative w-64 h-64 rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            <Image
              src="/images/profile.jpg"
              alt="Tu Nombre - Foto de perfil"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            ¡Hola! Soy Tu Nombre
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Soy un ingeniero en informática especializado en desarrollo web frontend y backend. Mi pasión es crear 
            aplicaciones web modernas, intuitivas y de alto rendimiento utilizando las últimas tecnologías.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Cuento con más de X años de experiencia trabajando en diversos proyectos, desde startups hasta grandes empresas.
            Me encanta enfrentar nuevos desafíos técnicos y encontrar soluciones creativas a problemas complejos.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Cuando no estoy codificando, disfruto de [tus hobbies e intereses personales]. Creo firmemente en el aprendizaje
            continuo y me mantengo actualizado con las últimas tendencias en tecnología.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Habilidades técnicas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Desarrollo Frontend</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">React</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">Next.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">TypeScript</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">Tailwind CSS</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">UI/UX Design</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Desarrollo Backend</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">Node.js</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">Express</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">MongoDB</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">PostgreSQL</span>
              </li>
              <li className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="min-w-[100px] text-right text-sm text-gray-600 dark:text-gray-400 ml-3">API REST</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Experiencia profesional
        </h2>
        
        <div className="space-y-8">
          {/* Experience Item 1 */}
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Desarrollador Senior</h3>
              <span className="sm:ml-4 text-sm text-blue-600 dark:text-blue-400 font-medium">Empresa XYZ</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Enero 2023 - Presente</span>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo y mantenimiento de aplicaciones web utilizando React, Next.js y Node.js.
              Implementación de arquitecturas escalables y optimización de rendimiento.
              Liderazgo técnico de un equipo de 5 desarrolladores.
            </p>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Desarrollador Frontend</h3>
              <span className="sm:ml-4 text-sm text-blue-600 dark:text-blue-400 font-medium">Startup ABC</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Marzo 2020 - Diciembre 2022</span>
            <p className="text-gray-700 dark:text-gray-300">
              Diseño e implementación de interfaces de usuario responsivas y accesibles.
              Desarrollo de componentes reutilizables y sistemas de diseño.
              Integración con APIs y optimización de rendimiento.
            </p>
          </div>
          
          {/* Experience Item 3 */}
          <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Desarrollador Web</h3>
              <span className="sm:ml-4 text-sm text-blue-600 dark:text-blue-400 font-medium">Agencia Digital 123</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Junio 2018 - Febrero 2020</span>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de sitios web y aplicaciones para clientes de diversos sectores.
              Implementación de diseños responsivos y optimización para buscadores (SEO).
              Mantenimiento y actualización de proyectos existentes.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
          Formación académica
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ingeniería en Informática</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Universidad XYZ</span> • <span className="text-gray-500 dark:text-gray-400">2014 - 2018</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Especialización en Desarrollo de Software y Sistemas Distribuidos.
              Proyecto final: &quot;Implementación de una plataforma de aprendizaje online con microservicios&quot;.
            </p>
          </div>
          
          <div>
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
          ¿Interesado en colaborar?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes.
          Si tienes una idea o proyecto en mente, ¡me encantaría escucharte!
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
        >
          Contáctame
        </a>
      </section>
    </div>
  );
}