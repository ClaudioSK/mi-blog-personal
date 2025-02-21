export const siteConfig = {
  // Información personal
  author: {
    name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Tu Nombre",
    title: process.env.NEXT_PUBLIC_AUTHOR_TITLE || "Ingeniero en Informática • Desarrollador Web • Data Science",
    bio: process.env.NEXT_PUBLIC_AUTHOR_BIO || "Desarrollo soluciones web modernas y aplicaciones utilizando las últimas tecnologías. Especializado en React, Next.js y análisis de datos.",
    email: "tu@email.com",
    location: "Santiago, Chile",
    phone: "+56 9 1234 5678",
    profileImage: "/images/profile.jpg",
    resume: "/docs/resume.pdf",
    availability: "Disponible para proyectos freelance",
    hobbies: ["nuevas tecnologias", "ciclismo", "ajedrez", "música electrónica", "lectura de ciencia ficción"]
  },
  
  // Información del sitio
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Tu Nombre | Desarrollo Web & Data Science",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://tunombre.dev",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "Blog personal y portafolio sobre desarrollo web, ingeniería de datos y proyectos de tecnología. Comparto conocimientos, tutoriales y experiencias en el mundo tech.",
    language: "es",
    locale: "es_CL",
    googleAnalyticsId: "",
    themeColor: "#3B82F6"
  },
  
  // Redes sociales
  socialLinks: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/ClaudioSK",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/ClaudioSK",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/ClaudioSK",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/claudio.sk",
    youtube: "https://youtube.com/@ClaudioSK",
    medium: "https://medium.com/@claudiosk"
  },
  
  // Menú de navegación
  navLinks: [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/about', label: 'Sobre mí' },
    { href: '/contact', label: 'Contacto' }
  ],
  
  // Categorías para el blog
  blogCategories: [
    { value: 'react', label: 'React' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'tailwind', label: 'Tailwind CSS' },
    { value: 'python', label: 'Python' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'web-dev', label: 'Desarrollo Web' },
    { value: 'tutoriales', label: 'Tutoriales' },
    { value: 'carrera', label: 'Carrera Profesional' }
  ],
  
  // Proyectos destacados
  featuredProjects: [
    {
      id: 'task-manager',
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación full-stack desarrollada con React, Node.js y MongoDB para gestionar tareas y proyectos de forma eficiente. Incluye autenticación, asignación de tareas y estadísticas.',
      image: '/images/project-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://task-manager-demo.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/task-manager',
      featured: true,
      completionDate: '2023-11',
      category: 'web'
    },
    {
      id: 'weather-app',
      title: 'Aplicación de Clima con API',
      description: 'Aplicación de pronóstico del tiempo que consume múltiples APIs meteorológicas y ofrece pronósticos precisos por ubicación. Incluye visualización de datos y alertas personalizadas.',
      image: '/images/project-2.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'OpenWeather API'],
      demoUrl: 'https://weather-app-demo.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/weather-app',
      featured: true,
      completionDate: '2024-01',
      category: 'web'
    }
  ],
  
  // Todos los proyectos (incluyendo los no destacados)
  allProjects: [
    {
      id: 'e-commerce',
      title: 'Plataforma E-Commerce',
      description: 'Tienda en línea completa con catálogo de productos, carrito de compras, pasarela de pagos y panel de administración. Desarrollada con Next.js, Stripe y Firebase.',
      image: '/images/project-3.jpg',
      tags: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS', 'Redux'],
      demoUrl: 'https://ecommerce-demo.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/ecommerce',
      featured: false,
      completionDate: '2023-08',
      category: 'web'
    },
    {
      id: 'portfolio',
      title: 'Portafolio Personal',
      description: 'Sitio web personal para mostrar proyectos y habilidades, con modo oscuro, animaciones y diseño responsivo. El mismo sitio que estás viendo ahora.',
      image: '/images/project-4.jpg',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
      demoUrl: 'https://claudiosepulveda.dev',
      codeUrl: 'https://github.com/ClaudioSK/portfolio',
      featured: false,
      completionDate: '2024-02',
      category: 'web'
    },
    {
      id: 'chat-app',
      title: 'Aplicación de Chat en Tiempo Real',
      description: 'Chat en tiempo real con funcionalidades de mensajería privada, grupos, envío de archivos y notificaciones. Implementado con Socket.io y React.',
      image: '/images/project-5.jpg',
      tags: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: 'https://chat-app-demo.herokuapp.com',
      codeUrl: 'https://github.com/ClaudioSK/chat-app',
      featured: false,
      completionDate: '2023-06',
      category: 'web'
    },
    {
      id: 'dashboard',
      title: 'Dashboard Analítico',
      description: 'Panel de control para visualización de datos empresariales con gráficos interactivos, exportación de informes y filtros avanzados.',
      image: '/images/project-6.jpg',
      tags: ['React', 'D3.js', 'Material-UI', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://dashboard-demo.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/dashboard',
      featured: false,
      completionDate: '2023-09',
      category: 'data'
    },
    {
      id: 'data-visualization',
      title: 'Visualización de Datos COVID-19',
      description: 'Aplicación de visualización de datos que muestra estadísticas de COVID-19 a nivel mundial con gráficos interactivos y análisis comparativos.',
      image: '/images/project-7.jpg',
      tags: ['Python', 'Pandas', 'Plotly', 'FastAPI', 'React'],
      demoUrl: 'https://covid-viz.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/covid-data-viz',
      featured: false,
      completionDate: '2023-03',
      category: 'data'
    },
    {
      id: 'ml-recommender',
      title: 'Sistema de Recomendación ML',
      description: 'Sistema de recomendación de productos basado en machine learning que analiza comportamientos de usuarios y sugiere items relevantes.',
      image: '/images/project-8.jpg',
      tags: ['Python', 'scikit-learn', 'TensorFlow', 'Flask', 'PostgreSQL'],
      demoUrl: 'https://ml-recommender-demo.vercel.app',
      codeUrl: 'https://github.com/ClaudioSK/ml-recommender',
      featured: false,
      completionDate: '2023-12',
      category: 'data'
    },
    {
      id: 'mobile-fitness',
      title: 'Aplicación Móvil de Fitness',
      description: 'Aplicación para seguimiento de rutinas de ejercicio, nutrición y progreso físico. Incluye planes personalizados y estadísticas.',
      image: '/images/project-9.jpg',
      tags: ['React Native', 'Expo', 'Firebase', 'Redux', 'Node.js'],
      demoUrl: 'https://expo.dev/@claudiosk/fitness-app',
      codeUrl: 'https://github.com/ClaudioSK/fitness-mobile',
      featured: false,
      completionDate: '2023-10',
      category: 'mobile'
    }
  ],
  
  // CTA de contacto general
  contactCTA: {
    title: "¿Interesado en trabajar juntos?",
    description: "Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. ¡Conversemos sobre cómo puedo ayudarte con tus necesidades tecnológicas!",
    buttonText: "Contactarme",
    emailSubject: "Consulta desde tu sitio web"
  },
  
  // CTA específico para la página "Sobre mí"
  aboutCTA: {
    title: "¿Interesado en colaborar?",
    description: "Estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. Si tienes una idea o proyecto en mente, ¡me encantaría escucharte!",
    buttonText: "Contáctame",
    emailSubject: "Colaboración profesional"
  },
  
  // CTA específico para la página de proyectos
  projectsCTA: {
    title: "¿Tienes un proyecto en mente?",
    description: "Estoy disponible para nuevos proyectos de desarrollo web, aplicaciones y análisis de datos. Si tienes una idea o necesitas ayuda técnica, puedo ayudarte a convertirla en realidad.",
    buttonText: "Hablemos de tu proyecto",
    emailSubject: "Consulta sobre proyecto"
  },
  
  // Información de footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Claudio Sepúlveda. Todos los derechos reservados.`,
    links: [
      { href: '/privacy', label: 'Política de Privacidad' },
      { href: '/terms', label: 'Términos de Uso' },
      { href: '/sitemap.xml', label: 'Sitemap' }
    ]
  },
  
  // Experiencia profesional (para página "sobre mí")
  experience: [
    {
      company: "Empresa XYZ",
      position: "Desarrollador Senior",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web con React y Next.js. Liderazgo de equipo de 5 desarrolladores.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "AWS"]
    },
    {
      company: "Startup ABC",
      position: "Desarrollador Frontend",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces y componentes reutilizables. Implementación de sistemas de diseño.",
      technologies: ["React", "JavaScript", "SCSS", "Storybook"]
    }
  ],
  
  // Educación (para página "sobre mí")
  education: [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad de Santiago",
      period: "2014 - 2018",
      description: "Especialización en Desarrollo de Software y Sistemas Distribuidos. Proyecto final: 'Implementación de una plataforma de aprendizaje online con microservicios'.",
      achievements: ["Mejor promedio de la generación", "Beca de excelencia académica"]
    },
    {
      degree: "Máster en Desarrollo Web",
      institution: "Escuela de Tecnología Avanzada",
      period: "2019 - 2020",
      description: "Especialización en tecnologías frontend y arquitecturas modernas. Tesis: 'Optimización de rendimiento en aplicaciones web de gran escala'.",
      achievements: ["Tesis con distinción máxima"]
    }
  ],
  
  // Habilidades (para página "sobre mí")
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Express", "Python", "Django", "API REST"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    dataScience: ["Pandas", "NumPy", "Scikit-learn", "Jupyter", "Matplotlib"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
  },
  
  // Categorías de proyectos
  projectCategories: [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'data', label: 'Data Science' },
    { id: 'experiments', label: 'Experimentos' }
  ]
};