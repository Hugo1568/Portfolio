import type { Translations } from './es';

export const en: Translations = {
  // NAV
  nav: {
    about:      '// about',
    experience: '// experience',
    projects:   '// projects',
    certs:      '// certs',
    contact:    '// contact',
    hire:       'Hire me →',
  },

  // HERO
  hero: {
    available: 'Available for projects',
    title1:    'Hugo',
    title2:    'Cano Beyliss',
    subtitle:  '> Full Stack Developer & IT Infrastructure Specialist',
    desc:      'I build internal systems, automate business processes, and develop web experiences that actually work. From managing infrastructure for 100+ users to cutting 3-day processes down to 5 minutes.',
    cta1:      'See my work',
    cta2:      "Let's talk",
    stat1:     'years of experience',
    stat2:     'time improvement',
    stat3:     'users supported',
  },

  // ABOUT
  about: {
    sectionNum:   '01',
    sectionTitle: 'About me',
    p1: 'I\'m a full stack developer and IT specialist based in <strong>Sonora, Mexico</strong>. I move comfortably between backend, frontend, and infrastructure — whatever the project needs.',
    p2: 'During my years at <strong>Appel Contact Center / Argole Solutions</strong> I managed Vicidial, Citrix, Xen, Active Directory, and Fortinet servers, while building internal tools that solved real business problems.',
    p3: 'I also build sites and applications for external clients: from Astro landing pages to systems with complex APIs.',
    p4: 'Currently working toward <strong>CompTIA A+</strong> and <strong>Security+</strong> certifications, with CCNA on the roadmap.',
    skills: [
      { cat: 'Frontend & UI',    tags: ['Astro', 'Vue', 'Blazor', 'JavaScript', 'HTML/CSS', 'Tailwind'] },
      { cat: 'Backend & DB', tags: ['PHP/Laravel', '.NET', 'REST APIs', 'MySQL', 'SQL Server', 'SQLite'] },
      { cat: 'Infrastructure', tags: ['Linux', 'Windows Server', 'Citrix/Xen', 'Fortinet VPN', 'Active Directory', 'IIS', 'Vicidial'] },
      { cat: 'Tools & Automation', tags: ['n8n', 'Selenium', 'Git', 'Google Workspace', 'Advanced Excel'] },
    ],
  },

  // EXPERIENCE
  experience: {
    sectionNum:   '02',
    sectionTitle: 'Experience',
    jobs: [
      {
        date:    '2022 — 2025',
        company: 'Appel Contact Center / Argole Solutions',
        role:    'IT Systems Specialist & Automation',
        bullets: [
          'Managed full IT infrastructure: Vicidial, Citrix, Xen, Active Directory, Fortinet (VPN & firewall) for 100+ users',
          'Built a collections analysis automation system processing 70K records with 46 columns — cut operational time from 3 days to 5 minutes (99.88% improvement)',
          'Set up and maintained Google Workspace with corporate domain; managed local and cloud telephony servers',
          'Integrated systems via APIs with external dialing platforms and developed corporate landing pages',
          'Managed hardware/software procurement and end-user technical support under SLA',
        ],
      },
      {
        date:    '2022',
        company: 'Qualisys',
        role:    'Software Development Intern',
        bullets: [
          'Built an internal CMS for corporate communication (news, calendar, birthdays) using .NET Framework 4.8, Blazor, and CSS',
          'Full CRUD implementation, database management, image integration, and Git version control',
          'End-to-end deployment from scratch, configuring IIS Server',
        ],
      },
      {
        date:    'Ongoing',
        company: 'Freelance',
        role:    'Full Stack Developer',
        bullets: [
          'Websites and landing pages for clients in construction, corporate, and services sectors',
          'Third-party API integration and workflow automation with n8n and Selenium',
          'Primary stack: Astro, Laravel, PHP, Tailwind, Vue',
        ],
        last: true,
      },
    ],
  },

  // PROJECTS
  projects: {
    sectionNum:   '03',
    sectionTitle: 'Projects',
    easterEggHint: 'Hover to reveal',
    viewSite:   'View site →',
    readTds:    'Read on TDS →',
    items: [
      {
        num:   '01 — Automation',
        name:  'Collections Analysis System',
        desc:  'Internal tool that processes 70,000 records with 46 columns. Cut operational time from 3 days to 5 minutes. Generates up to 10 reports daily on demand for 3 users.',
        stack: ['Python', 'Excel', 'SQL', 'Automation'],
      },
      {
        num:   '02 — Corporate CMS',
        name:  'Qualisys Internal Portal',
        desc:  'Full internal web system for corporate communication: news, calendar, and birthdays. Built with .NET Framework 4.8 and Blazor, deployed on IIS Server from scratch.',
        stack: ['.NET 4.8', 'Blazor', 'SQL Server', 'IIS', 'Git'],
        accent: true,
      },
      {
        num:   '03 — Personal Project',
        name:  'AriesLauncher',
        desc:  'Custom Electron-based Minecraft launcher for personal use. Built to explore cross-platform desktop application development.',
        stack: ['Electron', 'JavaScript', 'Node.js'],
      },
      {
        num:   '04 — AI & ML',
        name:  'Real-Time Facial Recognition',
        desc:  'Facial recognition app to identify Computer Science students at the University of Sonora using PyTorch and MTCNN. Published on Towards Data Science.',
        stack: ['Python', 'PyTorch', 'MTCNN', 'Deep Learning', 'OpenCV'],
        link:  'https://medium.com/data-science/real-time-facial-recognition-application-to-identify-computer-science-students-at-the-university-of-253bc43d7c32',
        linkColor: 'blue',
        accent: true,
      },
      {
        num:   '05 — AI & Music',
        name:  'Generating Corridos Tumbados with AI',
        desc:  'Neural network music generation experiment. Can AI learn to compose corridos tumbados? Spoiler: not really. Published on Towards Data Science.',
        stack:  ['Python', 'Neural Network', 'NLP', 'Music'],
        link:   'https://medium.com/data-science/how-to-fail-to-generate-corridos-tumbados-using-ai-b10395d09e26',
        linkColor: 'purple',
        easterEgg: true,
      },
      {
        num:   '06 — Business Web',
        name:  'DIMACSON',
        desc:  'Corporate site for a civil construction company. Responsive design with sections for projects, services, and contact. Built with Astro for maximum performance.',
        stack: ['Astro', 'CSS', 'JavaScript'],
        link:  'https://dimacson.com.mx/',
        linkColor: 'green',
      },
      {
        num:   '07 — Corporate Web',
        name:  'XY Desarrolladora',
        desc:  'Digital presence for a real estate developer. High-impact landing page focused on lead generation and project showcase.',
        stack: ['Web', 'Responsive', 'SEO'],
        link:  'https://www.xydesarrolladora.com/',
        linkColor: 'green',
        accent: true,
      },
      {
        num:   '08 — Services Web',
        name:  '3PM Proyectos',
        desc:  'Website for a project management company. Professional design focused on service presentation and lead generation.',
        stack: ['Web', 'HTML/CSS', 'JavaScript'],
        link:  'https://www.3pmproyectos.com/',
        linkColor: 'green',
      },
      {
        num:   '09 — Corporate Web',
        name:  'Argole Solutions',
        desc:  'Official site for Argole Solutions, a contact center company. Corporate digital presence with service information and contact integration.',
        stack: ['Web', 'Corporate'],
        link:  'https://argolesolutions.com/',
        linkColor: 'green',
        accent: true,
      },
      {
        num:   '10 — Production & Web',
        name:  'Resonance',
        desc:  'Collective project focused on video editing, filmmaking, and website development. Immersive web design with a dark aesthetic and carefully crafted user experience.',
        stack: ['Video', 'Film', 'UI Design', 'Web'],
        link:  'https://resonance.hugocano.dev/',
        linkColor: 'green',
      },
    ],
  },

  // CERTIFICATIONS
  certs: {
    sectionNum:   '04',
    sectionTitle: 'Certifications',
    inProgress:   'In progress',
  },

  // CONTACT
  contact: {
    sectionNum:   '05',
    sectionTitle: 'Contact',
    heading1: 'Got a project',
    heading2: 'in mind?',
    headingEm: "Let's talk.",
    body: 'Whether it\'s a website, an internal system, process automation, or infrastructure support — I\'m ready to help.',
    available: 'Available now',
    location: 'Based in <strong>Sonora, Mexico</strong>.',
    openTo: 'Open to <strong>freelance</strong> projects, <strong>remote</strong> positions, and collaborations in:',
    services: [
      'Full stack web development',
      'Internal systems & automation',
      'IT support & infrastructure',
      'Technical consulting',
    ],
    languages: 'Languages: <strong>Spanish</strong> (native), <strong>English</strong> (intermediate technical)',
  },

  // FOOTER
  footer: {
    copy:  '© 2026 Hugo Francisco Cano Beyliss — Sonora, Mexico',
    built: 'Built with Astro & Tailwind',
  },
};
