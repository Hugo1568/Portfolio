export const es = {
    // NAV
    nav: {
        about: "// sobre mí",
        experience: "// experiencia",
        projects: "// proyectos",
        certs: "// certs",
        contact: "// contacto",
        hire: "Contrátame →",
    },

    // HERO
    hero: {
        available: "Disponible para proyectos",
        title1: "Hugo",
        title2: "Cano Beyliss",
        subtitle: "> Full Stack Developer & IT Infrastructure Specialist",
        desc: "Construyo sistemas internos, automatizo procesos empresariales y desarrollo experiencias web que funcionan de verdad. Desde administrar infraestructura con 100+ usuarios hasta reducir procesos de 3 días a 5 minutos.",
        cta1: "Ver mi trabajo",
        cta2: "Hablemos",
        stat1: "años de experiencia",
        stat2: "mejora en tiempo",
        stat3: "usuarios soportados",
    },

    // ABOUT
    about: {
        sectionNum: "01",
        sectionTitle: "Sobre mí",
        p1: "Soy desarrollador full stack e IT specialist con base en <strong>Sonora, México</strong>. Me muevo cómodo entre el backend, el frontend y la infraestructura — lo que sea que necesite el proyecto.",
        p2: "En mis años en <strong>Appel Contact Center / Argole Solutions</strong> administré servidores Vicidial, Citrix, Xen, Active Directory, Fortinet y más, mientras desarrollaba herramientas internas que resolvían problemas reales de negocio.",
        p3: "También construyo sitios y aplicaciones para clientes externos: desde landing pages con Astro hasta sistemas con APIs complejas.",
        p4: "Actualmente preparando certificaciones <strong>CompTIA A+</strong> y <strong>Security+</strong>, con CCNA en el radar.",
        skills: [
            {
                cat: "Frontend & UI",
                tags: [
                    "Astro",
                    "Vue",
                    "Blazor",
                    "JavaScript",
                    "HTML/CSS",
                    "Tailwind",
                ],
            },
            {
                cat: "Backend & DB",
                tags: [
                    "PHP/Laravel",
                    ".NET",
                    "REST APIs",
                    "MySQL",
                    "SQL Server",
                    "SQLite",
                ],
            },
            {
                cat: "Infraestructura",
                tags: [
                    "Linux",
                    "Windows Server",
                    "Citrix/Xen",
                    "Fortinet VPN",
                    "Active Directory",
                    "IIS",
                    "Vicidial",
                ],
            },
            {
                cat: "Herramientas & Automatización",
                tags: [
                    "n8n",
                    "Selenium",
                    "Git",
                    "Google Workspace",
                    "Excel avanzado",
                ],
            },
        ],
    },

    // EXPERIENCE
    experience: {
        sectionNum: "02",
        sectionTitle: "Experiencia",
        jobs: [
            {
                date: "2022 — 2025",
                company: "Appel Contact Center / Argole Solutions",
                role: "IT Systems Specialist & Automatización",
                bullets: [
                    "Administré infraestructura IT completa: Vicidial, Citrix, Xen, Active Directory, Fortinet (VPN & firewall) para 100+ usuarios",
                    "Desarrollé un sistema de automatización de cobranza que procesa 70K registros con 46 columnas — redujo el tiempo operativo de 3 días a 5 minutos (99.88% de mejora)",
                    "Configuré y mantuve Google Workspace con dominio empresarial; gestioné servidores de telefonía local y en la nube",
                    "Integré sistemas mediante APIs con plataformas externas de marcación y desarrollé landing pages corporativas",
                    "Gestión de compras de hardware/software y soporte técnico a usuarios finales bajo SLA",
                ],
            },
            {
                date: "2022",
                company: "Qualisys",
                role: "Interno de Desarrollo de Software",
                bullets: [
                    "Desarrollé CMS interno para comunicación corporativa (noticias, calendario, cumpleaños) con .NET Framework 4.8, Blazor y CSS",
                    "CRUD completo, manejo de base de datos, integración de imágenes, control de versiones con Git",
                    "Despliegue completo del sistema desde cero configurando IIS Server",
                ],
            },
            {
                date: "Ongoing",
                company: "Freelance",
                role: "Full Stack Developer",
                bullets: [
                    "Sitios y landing pages para clientes en sectores de construcción, corporativo y servicios",
                    "Integración de APIs de terceros y automatización de flujos con n8n y Selenium",
                    "Stack principal: Astro, Laravel, PHP, Tailwind, Vue",
                ],
                last: true,
            },
        ],
    },

    // PROJECTS
    projects: {
        sectionNum: "03",
        sectionTitle: "Proyectos",
        easterEggHint: "Pasa el cursor para revelar",
        viewSite: "Ver sitio →",
        readTds: "Leer en TDS →",
        items: [
            {
                num: "01 — Automatización",
                name: "Sistema de Análisis de Cobranza",
                desc: "Herramienta interna que procesa 70,000 registros con 46 columnas. Redujo tiempos operativos de 3 días a 5 minutos. Genera hasta 10 reportes diarios bajo demanda para 3 usuarios.",
                stack: ["Python", "Excel", "SQL", "Automatización"],
            },
            {
                num: "02 — CMS Corporativo",
                name: "Portal Interno Qualisys",
                desc: "Sistema web completo para comunicación interna: noticias, calendario y cumpleaños. Implementado con .NET Framework 4.8 y Blazor, desplegado en IIS Server desde cero.",
                stack: [".NET 4.8", "Blazor", "SQL Server", "IIS", "Git"],
                accent: true,
            },
            {
                num: "03 — Proyecto Personal",
                name: "AriesLauncher",
                desc: "Launcher personalizado de Minecraft basado en Electron. Proyecto de uso personal para explorar desarrollo de aplicaciones desktop multiplataforma.",
                stack: ["Electron", "JavaScript", "Node.js"],
            },
            {
                num: "04 — IA & ML",
                name: "Reconocimiento Facial en Tiempo Real",
                desc: "Aplicación de reconocimiento facial para identificar estudiantes de Ciencias de la Computación en la Universidad de Sonora usando PyTorch y MTCNN. Publicado en Towards Data Science.",
                stack: [
                    "Python",
                    "PyTorch",
                    "MTCNN",
                    "Deep Learning",
                    "OpenCV",
                ],
                link: "https://towardsdatascience.com/real-time-facial-recognition-application-to-identify-computer-science-students-at-the-university-of-253bc43d7c32/",
                linkColor: "blue",
                accent: true,
            },
            {
                num: "05 — IA & Música",
                name: "Generando Corridos Tumbados con IA",
                desc: "Experimento de generación de música con redes neuronales. ¿Puede la IA aprender a componer corridos tumbados? Spoiler: no muy bien. Publicado en Towards Data Science.",
                stack: ["Python", "Neural Network", "NLP", "Música"],
                link: "https://towardsdatascience.com/how-to-fail-to-generate-corridos-tumbados-using-ai-b10395d09e26/",
                linkColor: "purple",
                easterEgg: true,
            },
            {
                num: "06 — Web Empresarial",
                name: "DIMACSON",
                desc: "Sitio corporativo para empresa de construcción civil. Diseño responsivo con secciones de obras, servicios y contacto. Desarrollado con Astro para máxima performance.",
                stack: ["Astro", "CSS", "JavaScript"],
                link: "https://dimacson.com.mx/",
                linkColor: "green",
            },
            {
                num: "07 — Web Corporativa",
                name: "XY Desarrolladora",
                desc: "Presencia digital para desarrolladora inmobiliaria. Landing page de alto impacto enfocada en captación de clientes y presentación de proyectos.",
                stack: ["Web", "Responsivo", "SEO"],
                link: "https://www.xydesarrolladora.com/",
                linkColor: "green",
                accent: true,
            },
            {
                num: "08 — Web Servicios",
                name: "3PM Proyectos",
                desc: "Sitio web para empresa de gestión de proyectos. Diseño profesional con enfoque en presentación de servicios y generación de leads.",
                stack: ["Web", "HTML/CSS", "JavaScript"],
                link: "https://www.3pmproyectos.com/",
                linkColor: "green",
            },
            {
                num: "09 — Web Corporativa",
                name: "Argole Solutions",
                desc: "Sitio oficial de Argole Solutions, empresa de contact center. Presencia digital corporativa con integración de información de servicios y contacto.",
                stack: ["Web", "Corporativo"],
                link: "https://argolesolutions.com/",
                linkColor: "green",
                accent: true,
            },
            {
                num: "10 — Producción & Web",
                name: "Resonance",
                desc: "Proyecto colectivo enfocado en edición de video, filmación y desarrollo de sitios web. Diseño web inmersivo con estética oscura y experiencia cuidada.",
                stack: ["Video", "Film", "Diseño UI", "Web"],
                link: "https://resonance.hugocano.dev/",
                linkColor: "green",
            },
        ],
    },

    // CERTIFICATIONS
    certs: {
        sectionNum: "04",
        sectionTitle: "Certificaciones",
        inProgress: "En progreso",
    },

    // CONTACT
    contact: {
        sectionNum: "05",
        sectionTitle: "Contacto",
        heading1: "¿Tienes un proyecto",
        heading2: "en mente?",
        headingEm: "Hablemos.",
        body: "Ya sea un sitio web, un sistema interno, automatización de procesos o soporte de infraestructura — estoy listo para ayudar.",
        available: "Disponible ahora",
        location: "Ubicado en <strong>Sonora, México</strong>.",
        openTo: "Abierto a proyectos <strong>freelance</strong>, posiciones <strong>remote</strong> y colaboraciones en:",
        services: [
            "Desarrollo web full stack",
            "Sistemas internos y automatización",
            "Soporte e infraestructura IT",
            "Consultoría técnica",
        ],
        languages:
            "Idiomas: <strong>Español</strong> (nativo), <strong>Inglés</strong> (técnico intermedio)",
    },

    // FOOTER
    footer: {
        copy: "© 2026 Hugo Francisco Cano Beyliss — Sonora, México",
        built: "Built with Astro & Tailwind",
    },
} as const;

export type Translations = typeof es;
