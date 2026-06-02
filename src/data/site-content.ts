import { pagePaths, type LocaleCode, type PageKey } from './i18n';

type PageMeta = {
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export type SocialLink = {
  label: string;
  href: string;
  note?: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type ToolkitItem = {
  name: string;
  description: string;
  href: string;
};

export type ToolkitCategory = {
  title: string;
  description: string;
  items: ToolkitItem[];
};

export type SetupCard = {
  title: string;
  name: string;
  role: string;
  imageSrc: string;
  imageLabel: string;
  imageAlt: string;
  roast: string;
  highlights: string[];
};

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  meta: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SharedContent = {
  brand: string;
  tagline: string;
  nav: NavItem[];
  primaryCta: CtaLink;
  ctaLinks: CtaLink[];
  social: SocialLink[];
  labels: {
    date: string;
    time: string;
    location: string;
    menu: string;
  };
  footer: {
    note: string;
    legal: string;
    navTitle: string;
    socialTitle: string;
  };
  join: {
    eyebrow: string;
    code: string;
    title: string;
    description: string;
  };
};

export type HomePage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    code: string;
    title: string;
    intro: string;
    description: string[];
    stats: { label: string; value: string }[];
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    tertiaryCta: CtaLink;
    founderCard: {
      eyebrow: string;
      title: string;
      description: string[];
      highlights: string[];
    };
  };
  pillars: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Pillar[];
  };
  eventHighlight: {
    eyebrow: string;
    title: string;
    intro: string;
    event: EventItem;
  };
};

export type CommunityPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    description: string[];
  };
  purpose: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  origin: {
    eyebrow: string;
    title: string;
    description: string;
    founderNote: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Pillar[];
  };
  setups: {
    eyebrow: string;
    title: string;
    intro: string;
    items: SetupCard[];
    cta: CtaLink;
  };
};

export type ResourcesPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    description: string;
  };
  categories: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ToolkitCategory[];
  };
  contribution: {
    eyebrow: string;
    title: string;
    description: string;
    cta: CtaLink;
  };
};

export type EventsPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    description: string;
  };
  upcoming: {
    eyebrow: string;
    title: string;
    intro: string;
    items: EventItem[];
  };
  speakers: {
    eyebrow: string;
    title: string;
    description: string;
    cta: CtaLink;
  };
};

export type FaqPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    description: string;
  };
  questions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLinks: CtaLink[];
  };
};

export type SiteContent = {
  shared: SharedContent;
  pages: {
    home: HomePage;
    community: CommunityPage;
    resources: ResourcesPage;
    events: EventsPage;
    faq: FaqPage;
  };
};

const sharedLinks = {
  whatsapp: 'https://chat.whatsapp.com/costadelcode',
  telegram: 'https://t.me/costadelcode',
  instagram: 'https://instagram.com/costadelcode',
  github: 'https://github.com/industrial-dev/costadelcode',
  talks: 'mailto:hola@costadelcode.com',
} as const;

const navPages = [
  'home',
  'community',
  'resources',
  'events',
  'faq',
] as const satisfies readonly PageKey[];

const buildNav = (locale: LocaleCode, labels: Record<PageKey, string>) => [
  ...navPages.map((page) => ({
    label: labels[page],
    href: pagePaths[locale][page],
  })),
];

const esContent: SiteContent = {
  shared: {
    brand: 'Costa del Code',
    tagline: 'La comunidad de devs en la Costa del Sol.',
    nav: buildNav('es', {
      home: 'Inicio',
      community: 'Comunidad',
      resources: 'Recursos',
      events: 'Eventos',
      faq: 'FAQ',
    }),
    primaryCta: {
      label: 'Unirse a WhatsApp',
      href: sharedLinks.whatsapp,
      variant: 'primary',
    },
    ctaLinks: [
      { label: 'WhatsApp', href: sharedLinks.whatsapp, variant: 'primary' },
      { label: 'Telegram', href: sharedLinks.telegram, variant: 'secondary' },
      { label: 'Instagram', href: sharedLinks.instagram, variant: 'ghost' },
    ],
    labels: {
      date: 'Fecha',
      time: 'Hora',
      location: 'Lugar',
      menu: 'Menú',
    },
    social: [
      {
        label: 'WhatsApp',
        href: sharedLinks.whatsapp,
        note: 'Grupo principal',
      },
      {
        label: 'Telegram',
        href: sharedLinks.telegram,
        note: 'Canal de avisos',
      },
      {
        label: 'Instagram',
        href: sharedLinks.instagram,
        note: 'Detrás de cámaras',
      },
      { label: 'GitHub', href: sharedLinks.github, note: 'Open source' },
    ],
    footer: {
      note: 'Comunidad abierta de desarrollo de software.',
      legal: 'Costa del Code · 2026',
      navTitle: 'Secciones',
      socialTitle: 'Únete',
    },
    join: {
      eyebrow: 'Únete a la conversación',
      code: 'git switch -c costadelcode;',
      title: 'Una comunidad social para gente que vive en remoto.',
      description:
        'Comparte proyectos, enseña y aprende de otros y encuentra compañía real.',
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Costa del Code | Comunidad de devs en la Costa del Sol',
        description:
          'Networking local, charlas y proyectos open source para desarrolladores en la Costa del Sol.',
      },
      hero: {
        eyebrow: 'Costa del Code',
        code: 'git switch -c costadelcode;',
        title: 'Comunidad local de desarrolladores en la Costa del Sol.',
        intro: 'Estamos cerca. Nos falta conectar.',
        description: [
          'Vivir en la Costa del Sol y trabajar para fuera es un privilegio, pero también puede ser solitario. Costa del Code nace para conectar a quienes compartimos la misma zona geográfica.',
        ],
        stats: [
          { value: 'Local-first', label: 'Costa del Sol' },
          { value: 'Open source', label: 'Proyectos con impacto real' },
          { value: 'Sin coste', label: 'Comunidad abierta' },
        ],
        primaryCta: {
          label: 'Unirme a WhatsApp',
          href: sharedLinks.whatsapp,
          variant: 'primary',
        },
        secondaryCta: {
          label: 'Unirme a Telegram',
          href: sharedLinks.telegram,
          variant: 'secondary',
        },
        tertiaryCta: {
          label: 'Ver Instagram',
          href: sharedLinks.instagram,
          variant: 'ghost',
        },
        founderCard: {
          eyebrow: '¿Quién inició este proyecto?',
          title: 'Daniel Núñez. Mid-senior developer.',
          description: [
            'Costa del Code es la excusa para salir de casa y compartir lo que estamos aprendiendo con los que también viven por aquí.',
          ],
          highlights: [
            'Charlas cortas, setups y cafés con feedback real.',
            'Proyectos comunitarios para practicar y conectar.',
            'Conocer tecnologías y casos de uso que ya están funcionando en proyectos reales.',
            'Valida ideas y recibe feedback honesto de compañeros que hablan el mismo idioma.',
            'Encuentra potenciales colaboradores y/o clientes.',
          ],
        },
      },
      pillars: {
        eyebrow: '¿Por qué sumarte?',
        title: 'Pilares que nos mueven.',
        intro:
          'Diseñamos el grupo para aportar valor real: menos ruido, más conexiones y aprendizajes útiles.',
        items: [
          {
            title: 'Networking',
            description: 'Conoce profesionales tech que trabajan cerca de ti.',
          },
          {
            title: 'Colaboración',
            description:
              'Proyectos open source donde practicar y mostrar talento real.',
          },
          {
            title: 'Actualidad',
            description:
              'Charlas sobre las últimas tendencias en desarrollo de software.',
          },
          {
            title: 'Sintonía',
            description:
              'Habla de tus proyectos con gente que entiende el contexto.',
          },
          {
            title: 'Descubrimiento',
            description:
              'Compartimos stacks, setups, IDE tricks y flujos eficientes.',
          },
          {
            title: 'Retroalimentación',
            description:
              'Valida ideas y recibe feedback sin filtros ni postureo.',
          },
          {
            title: 'Oportunidades',
            description: 'Acceso a ofertas locales, freelos y recomendaciones.',
          },
          {
            title: 'Clientes',
            description:
              'Conecta con negocios locales que buscan soluciones tech.',
          },
          {
            title: 'Recursos',
            description:
              'Toolkit curado de herramientas y patrones compartidos.',
          },
          {
            title: 'Diversión',
            description: 'Humor dev, setups y anécdotas que nos unen.',
          },
        ],
      },
      eventHighlight: {
        eyebrow: 'Próxima quedada',
        title: 'Agenda viva, eventos en formato ligero.',
        intro:
          'La siguiente meetup se publica aquí en cuanto haya fecha cerrada. Si tienes tema, proponlo sin dudarlo.',
        event: {
          title: '¿Qué es Costa del Code?',
          date: 'Por confirmar',
          time: 'Afterwork',
          location: 'Costa del Sol (ubicación por confirmar)',
          meta: 'Formato ligero · 90 min',
          description:
            'Mesa corta para compartir casos reales, prompts útiles y herramientas que ya están en tu stack diario.',
          tags: ['IA aplicada', 'Live demos', 'Networking'],
          ctaLabel: 'Quiero asistir',
          ctaHref: sharedLinks.whatsapp,
        },
      },
    },
    community: {
      meta: {
        title: 'Comunidad | Costa del Code',
        description:
          'Conoce el propósito, la historia y los pilares que mueven la comunidad local de devs en Costa del Sol.',
      },
      hero: {
        eyebrow: 'Comunidad',
        title: 'Un punto de encuentro real para gente que vive cerca.',
        intro:
          'Costa del Code conecta a devs locales, nómadas digitales y perfiles tech que quieren compartir conocimiento sin salir de la Costa del Sol.',
        description: [
          'Nuestro foco es lo local: menos algoritmos, más caras conocidas. Queremos crear un hub donde las conversaciones que pasan en Teams o Google Meet también puedan pasar con un café en la mano.',
          'Si estás construyendo algo, buscando feedback o solo quieres hablar de código con alguien cercano, este es tu sitio.',
        ],
      },
      purpose: {
        eyebrow: 'El por qué',
        title: 'Descentralizar talento y crear comunidad real.',
        description:
          'No hace falta irse a una capital para crecer. Lo que faltaba era un lugar para conectar a quienes ya están aquí.',
        points: [
          'Reducir el aislamiento del teletrabajo con encuentros presenciales.',
          'Dar visibilidad a talento local y crear oportunidades reales.',
          'Impulsar proyectos open source que nazcan desde la zona.',
        ],
      },
      origin: {
        eyebrow: 'Historia',
        title: 'Todo empezó con preguntas simples.',
        description:
          '¿Cuántos devs habrá trabajando en remoto desde la Costa del Sol? ¿Hasta dónde podría llegar una comunidad de desarrolladores de software? La respuesta está aún por descubrir.',
        founderNote:
          'Soy Dani, llevo años trabajando en remoto y sabía que la comunidad tenía que existir también fuera de las grandes ciudades.',
      },
      pillars: {
        eyebrow: 'Pilares',
        title: 'Lo que hace que esto funcione.',
        intro: 'Estos son los temas que guían nuestras quedadas y proyectos.',
        items: [
          {
            title: 'Networking',
            description: 'Conexiones reales entre profesionales tech locales.',
          },
          {
            title: 'Colaboración',
            description: 'Proyectos abiertos para aprender haciendo.',
          },
          {
            title: 'Actualidad',
            description: 'Charlas sobre IA, tooling y tendencias.',
          },
          {
            title: 'Sintonía',
            description: 'Gente que entiende tus retos y tu stack.',
          },
          {
            title: 'Descubrimiento',
            description: 'Trucos de IDE, setups y flujos de trabajo.',
          },
          {
            title: 'Retroalimentación',
            description: 'Feedback honesto para proyectos personales.',
          },
          {
            title: 'Oportunidades',
            description: 'Ofertas, freelos y colaboraciones locales.',
          },
          {
            title: 'Clientes',
            description: 'Canal local para encontrar necesidades reales.',
          },
          {
            title: 'Recursos',
            description: 'Biblioteca de herramientas y patrones curados.',
          },
          {
            title: 'Diversión',
            description: 'Humor dev, setups y cultura compartida.',
          },
        ],
      },
      setups: {
        eyebrow: 'Roast my setup',
        title: 'Setups reales, humor respetuoso.',
        intro:
          'Dos setups de muestra para el primer despliegue. Pronto abrimos la galería completa con aportes de la comunidad.',
        items: [
          {
            title: 'Setup #01 · El minimalista accidental',
            name: 'Rafa M.',
            role: 'Frontend developer',
            imageSrc: '/images/setups/setup-01.svg',
            imageLabel: 'Placeholder de setup con luz cálida',
            imageAlt: 'Foto de setup con mesa clara y monitor ultrawide',
            roast:
              'Mucho minimalismo, pero ese cable HDMI sigue viendo el sol cada mañana.',
            highlights: [
              '1x monitor ultrawide',
              'Teclado low profile',
              'Café en taza de cerámica',
            ],
          },
          {
            title: 'Setup #02 · El multiventana',
            name: 'Lola G.',
            role: 'Backend + IA',
            imageSrc: '/images/setups/setup-02.svg',
            imageLabel: 'Placeholder de setup con tonos oscuros',
            imageAlt: 'Foto de setup con doble monitor y libros',
            roast:
              'Dos pantallas, tres notebooks y aun así el bug estaba en la línea 12.',
            highlights: [
              '2x monitores 27"',
              'Dock con mil puertos',
              'Notas en post-its',
            ],
          },
        ],
        cta: {
          label: 'Quiero compartir mi setup',
          href: sharedLinks.instagram,
          variant: 'secondary',
        },
      },
    },
    resources: {
      meta: {
        title: 'Recursos | Costa del Code',
        description:
          'Toolkit curado con herramientas, patrones de diseño y tecnologías que usamos en la comunidad.',
      },
      hero: {
        eyebrow: 'Toolkit',
        title: 'Recursos que usamos a diario para construir más rápido.',
        intro:
          'Selección curada por la comunidad para ahorrar horas de búsqueda.',
        description:
          'Un directorio ligero y práctico con herramientas, patrones y stacks que ya están funcionando en proyectos reales.',
      },
      categories: {
        eyebrow: 'Directorios',
        title: 'Tres bloques claros para empezar hoy.',
        intro:
          'Cada categoría tiene ejemplos reales y enlaces listos para probar.',
        items: [
          {
            title: 'Herramientas frontend',
            description: 'Stack rápido, UI consistente y DX sin dramas.',
            items: [
              {
                name: 'Astro',
                description: 'Site builder rápido para contenido y marketing.',
                href: 'https://astro.build',
              },
              {
                name: 'Tailwind CSS v4',
                description: 'Sistema de diseño utility-first con tokens.',
                href: 'https://tailwindcss.com',
              },
              {
                name: 'Vite',
                description: 'Build rápido para proyectos modernos.',
                href: 'https://vitejs.dev',
              },
              {
                name: 'Figma',
                description: 'Prototipos rápidos con colaboración.',
                href: 'https://figma.com',
              },
            ],
          },
          {
            title: 'Patrones de diseño',
            description: 'Buenas prácticas para escalar sin caos.',
            items: [
              {
                name: 'Design Systems',
                description: 'Componentes consistentes y reutilizables.',
                href: 'https://designsystemsrepo.com',
              },
              {
                name: 'Atomic Design',
                description: 'Metodología para construir UI por capas.',
                href: 'https://bradfrost.com/blog/post/atomic-web-design/',
              },
              {
                name: 'Clean Architecture',
                description: 'Separación clara entre dominio y detalles.',
                href: 'https://8thlight.com/insights/clean-architecture',
              },
              {
                name: 'Component-driven',
                description: 'Construir UI desde piezas pequeñas.',
                href: 'https://storybook.js.org/docs/react/writing-stories/introduction',
              },
            ],
          },
          {
            title: 'Tech stack local',
            description: 'Tecnologías que más usamos por aquí.',
            items: [
              {
                name: 'TypeScript',
                description: 'Tipado para proyectos front y back.',
                href: 'https://www.typescriptlang.org',
              },
              {
                name: 'React',
                description: 'UI dinámica para apps complejas.',
                href: 'https://react.dev',
              },
              {
                name: 'Node.js',
                description: 'Backends rápidos con JS.',
                href: 'https://nodejs.org',
              },
              {
                name: 'Python',
                description: 'Automatización, datos y ML.',
                href: 'https://www.python.org',
              },
            ],
          },
        ],
      },
      contribution: {
        eyebrow: 'Aporta',
        title: 'El toolkit crece con la comunidad.',
        description:
          'Si falta alguna herramienta, patrón o stack que uses a diario, cuéntanoslo y lo sumamos al listado.',
        cta: {
          label: 'Proponer un recurso',
          href: sharedLinks.telegram,
          variant: 'primary',
        },
      },
    },
    events: {
      meta: {
        title: 'Eventos | Costa del Code',
        description:
          'Agenda local con quedadas, charlas y formatos ligeros para developers en Costa del Sol.',
      },
      hero: {
        eyebrow: 'Eventos',
        title: 'Quedadas pequeñas, impacto grande.',
        intro:
          'Nada de macro eventos. Preferimos charlas cortas y conversaciones largas.',
        description:
          'Publicamos aquí cada meetup para que puedas venir aunque solo sea a tomar un café y charlar de código.',
      },
      upcoming: {
        eyebrow: 'Agenda',
        title: 'Lo que viene (placeholder editable).',
        intro:
          'Actualizamos esta sección cuando cerramos fecha. Si quieres proponer tema, escribe.',
        items: [
          {
            title: 'IA aplicada al código',
            date: 'Fecha por confirmar',
            time: '18:30 - 20:00',
            location: 'Costa del Sol',
            meta: 'Afterwork · 90 min',
            description:
              'Casos reales de uso de IA: prompts útiles, tooling y workflows que ya usamos cada día.',
            tags: ['IA', 'Live demos', 'Networking'],
            ctaLabel: 'Quiero asistir',
            ctaHref: sharedLinks.whatsapp,
          },
          {
            title: 'Debates sobre IDEs y setups',
            date: 'Fecha por confirmar',
            time: '19:00 - 20:30',
            location: 'Costa del Sol',
            meta: 'Mesa redonda',
            description:
              'Comparte tu configuración, extensiones clave y trucos para ser más rápido.',
            tags: ['Tooling', 'DX', 'Setups'],
            ctaLabel: 'Sumarme al debate',
            ctaHref: sharedLinks.telegram,
          },
        ],
      },
      speakers: {
        eyebrow: 'Speakers',
        title: '¿Quieres dar una charla?',
        description:
          'Buscamos talks cortas, prácticas y sin humo. 15 minutos y feedback real.',
        cta: {
          label: 'Proponer charla',
          href: sharedLinks.talks,
          variant: 'secondary',
        },
      },
    },
    faq: {
      meta: {
        title: 'FAQ y Contacto | Costa del Code',
        description:
          'Resolvemos dudas frecuentes y dejamos los canales abiertos para conectar contigo.',
      },
      hero: {
        eyebrow: 'FAQ y contacto',
        title: 'Respuestas claras antes de sumarte.',
        intro: 'Si algo no está aquí, nos escribes y lo resolvemos rápido.',
        description:
          'La comunidad es abierta, gratuita y local. Queremos que sea fácil dar el primer paso.',
      },
      questions: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Lo que suele preguntar la gente.',
        intro: 'Corto y directo.',
        items: [
          {
            question: '¿Tiene algún coste participar?',
            answer:
              'No, es 100% gratuito y abierto. Solo pedimos ganas de compartir y respeto.',
          },
          {
            question: '¿Qué nivel técnico necesito?',
            answer:
              'Cualquier nivel es bienvenido: juniors, seniors y curiosos con ganas de aprender.',
          },
          {
            question: '¿Dónde se hacen las quedadas?',
            answer:
              'Preferimos espacios locales de Costa del Sol. Avisamos la ubicación con antelación.',
          },
          {
            question: '¿Puedo proponer un tema o charla?',
            answer:
              'Sí. De hecho lo buscamos. Escribe y te ayudamos a darle forma.',
          },
          {
            question: '¿Puedo ir aunque no sea dev?',
            answer: 'Si eres perfil tech o estás aprendiendo, eres bienvenido.',
          },
        ],
      },
      contact: {
        eyebrow: 'Contacto rápido',
        title: 'Conecta en el canal que prefieras.',
        description:
          'WhatsApp para el grupo principal, Telegram para avisos y Instagram para ver la parte humana.',
        ctaLinks: [
          { label: 'WhatsApp', href: sharedLinks.whatsapp, variant: 'primary' },
          {
            label: 'Telegram',
            href: sharedLinks.telegram,
            variant: 'secondary',
          },
          { label: 'Instagram', href: sharedLinks.instagram, variant: 'ghost' },
        ],
      },
    },
  },
};

const enContent: SiteContent = {
  shared: {
    brand: 'Costa del Code',
    tagline: 'The dev community in Costa del Sol and the Costa del Sol.',
    nav: buildNav('en', {
      home: 'Home',
      community: 'Community',
      resources: 'Resources',
      events: 'Events',
      faq: 'FAQ',
    }),
    primaryCta: {
      label: 'Join WhatsApp',
      href: sharedLinks.whatsapp,
      variant: 'primary',
    },
    ctaLinks: [
      { label: 'WhatsApp', href: sharedLinks.whatsapp, variant: 'primary' },
      { label: 'Telegram', href: sharedLinks.telegram, variant: 'secondary' },
      { label: 'Instagram', href: sharedLinks.instagram, variant: 'ghost' },
    ],
    labels: {
      date: 'Date',
      time: 'Time',
      location: 'Location',
      menu: 'Menu',
    },
    social: [
      { label: 'WhatsApp', href: sharedLinks.whatsapp, note: 'Main group' },
      { label: 'Telegram', href: sharedLinks.telegram, note: 'Announcements' },
      {
        label: 'Instagram',
        href: sharedLinks.instagram,
        note: 'Behind the scenes',
      },
      { label: 'GitHub', href: sharedLinks.github, note: 'Open source' },
    ],
    footer: {
      note: 'Open developer community in Costa del Sol. Local, lightweight, no posturing.',
      legal: 'Costa del Code · 2026 · Open source',
      navTitle: 'Sections',
      socialTitle: 'Join',
    },
    join: {
      eyebrow: 'Join the conversation',
      code: 'git commit -m "Joining the community"',
      title: 'A local crew for remote builders.',
      description:
        'Share projects, learn from nearby devs, and find real companionship beyond Slack.',
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Costa del Code | Dev community in Costa del Sol',
        description:
          'Local networking, talks, and open-source projects for developers on the Costa del Sol.',
      },
      hero: {
        eyebrow: 'Costa del Code',
        code: 'git switch -c local-community',
        title: 'Remote work should not feel like remote life.',
        intro:
          "I'm Dani, an industrial engineer and software dev. Between deploys and coffee, I started a real local meeting point for tech people here.",
        description: [
          'Living in Costa del Sol while working for global teams is a privilege, but it can be lonely. Costa del Code exists to connect people who share the same local latitude.',
          'This is community with a local focus: meetups, open collaboration, real projects, and a support network without filters.',
        ],
        stats: [
          { value: 'Local-first', label: 'Costa del Sol + Costa del Sol' },
          { value: 'Open source', label: 'Projects with real impact' },
          { value: 'No cost', label: 'Open community' },
        ],
        primaryCta: {
          label: 'Join WhatsApp',
          href: sharedLinks.whatsapp,
          variant: 'primary',
        },
        secondaryCta: {
          label: 'Join Telegram',
          href: sharedLinks.telegram,
          variant: 'secondary',
        },
        tertiaryCta: {
          label: 'Follow on Instagram',
          href: sharedLinks.instagram,
          variant: 'ghost',
        },
        founderCard: {
          eyebrow: 'Founder note',
          title: 'Let us build a tech scene without moving to a big city.',
          description: [
            'Costa del Code is an excuse to leave the home office and share what we are learning with people who also live here.',
          ],
          highlights: [
            'Chill meetups with no posturing or endless slides.',
            'Community projects to practice and connect.',
            'Short talks, setups, and coffee with real feedback.',
          ],
        },
      },
      pillars: {
        eyebrow: 'Why join',
        title: 'Pillars that move the community.',
        intro:
          'We designed the group to deliver real value: less noise, more connections and useful learning.',
        items: [
          {
            title: 'Networking',
            description: 'Meet devs and tech professionals close to you.',
          },
          {
            title: 'Collaboration',
            description:
              'Open-source projects to practice and show real skills.',
          },
          {
            title: 'Current topics',
            description: 'Talks on applied AI, modern tooling, and trends.',
          },
          {
            title: 'Alignment',
            description: 'Speak with people who understand your context.',
          },
          {
            title: 'Discovery',
            description: 'We share stacks, setups, IDE tricks, and workflows.',
          },
          {
            title: 'Feedback',
            description: 'Validate ideas and get honest input.',
          },
          {
            title: 'Opportunities',
            description: 'Local jobs, freelance gigs, and referrals.',
          },
          {
            title: 'Clients',
            description: 'Connect with local businesses needing tech help.',
          },
          {
            title: 'Resources',
            description: 'Curated toolkit of tools and patterns.',
          },
          {
            title: 'Fun',
            description: 'Dev humor, setups, and shared culture.',
          },
        ],
      },
      eventHighlight: {
        eyebrow: 'Next meetup',
        title: 'A living agenda with lightweight events.',
        intro:
          'We publish the next meetup here as soon as the date is set. If you have a topic, pitch it.',
        event: {
          title: 'Applied AI for coding (pilot edition)',
          date: 'Date to be confirmed',
          time: 'Afterwork',
          location: 'Costa del Sol',
          meta: 'Light format · 90 min',
          description:
            'A short table to share real use cases, useful prompts, and tools already in your daily stack.',
          tags: ['Applied AI', 'Live demos', 'Networking'],
          ctaLabel: 'I want to join',
          ctaHref: sharedLinks.whatsapp,
        },
      },
    },
    community: {
      meta: {
        title: 'Community | Costa del Code',
        description:
          'Learn the purpose, story, and pillars behind the local dev community in Costa del Sol.',
      },
      hero: {
        eyebrow: 'Community',
        title: 'A real meeting point for people who live nearby.',
        intro:
          'Costa del Code connects local devs, digital nomads, and tech profiles who want to share knowledge without leaving the Costa del Sol.',
        description: [
          'Our focus is local: less algorithm, more familiar faces. We want a hub where the same conversations from Slack can happen with a coffee in hand.',
          'If you are building something, looking for feedback, or just want to talk code with someone close by, this is your spot.',
        ],
      },
      purpose: {
        eyebrow: 'The why',
        title: 'Decentralize talent and create real community.',
        description:
          'You do not need a capital city to grow. We just needed a place to connect people who are already here.',
        points: [
          'Reduce remote-work isolation with in-person meetups.',
          'Give visibility to local talent and create real opportunities.',
          'Boost open-source projects born from the area.',
        ],
      },
      origin: {
        eyebrow: 'Origin',
        title: 'It started with a simple question.',
        description:
          'How many devs live nearby? The answer: more than I expected. Creating the group was a human refactor that made sense.',
        founderNote:
          "I'm Dani. After years of remote work, I knew the community had to exist outside big cities too.",
      },
      pillars: {
        eyebrow: 'Pillars',
        title: 'What makes this work.',
        intro: 'These are the themes that guide our meetups and projects.',
        items: [
          {
            title: 'Networking',
            description: 'Real connections among local tech professionals.',
          },
          {
            title: 'Collaboration',
            description: 'Open projects to learn by doing.',
          },
          {
            title: 'Current topics',
            description: 'Talks about AI, tooling, and trends.',
          },
          {
            title: 'Alignment',
            description: 'People who understand your stack and challenges.',
          },
          {
            title: 'Discovery',
            description: 'IDE tips, setups, and workflows.',
          },
          {
            title: 'Feedback',
            description: 'Honest input for personal projects.',
          },
          {
            title: 'Opportunities',
            description: 'Local jobs, freelance gigs, and collaborations.',
          },
          {
            title: 'Clients',
            description: 'A local channel for real needs.',
          },
          {
            title: 'Resources',
            description: 'Library of curated tools and patterns.',
          },
          {
            title: 'Fun',
            description: 'Dev humor, setups, and shared culture.',
          },
        ],
      },
      setups: {
        eyebrow: 'Roast my setup',
        title: 'Real setups, respectful humor.',
        intro:
          'Two sample setups for the first release. The full gallery opens with community contributions.',
        items: [
          {
            title: 'Setup #01 · Accidental minimalist',
            name: 'Rafa M.',
            role: 'Frontend developer',
            imageSrc: '/images/setups/setup-01.svg',
            imageLabel: 'Setup placeholder with warm light',
            imageAlt: 'Workspace with bright desk and ultrawide monitor',
            roast:
              'Minimalist energy, but that HDMI cable still sees the sun every morning.',
            highlights: [
              '1x ultrawide monitor',
              'Low-profile keyboard',
              'Coffee in a ceramic mug',
            ],
          },
          {
            title: 'Setup #02 · The multi-window',
            name: 'Lola G.',
            role: 'Backend + AI',
            imageSrc: '/images/setups/setup-02.svg',
            imageLabel: 'Setup placeholder with darker tones',
            imageAlt: 'Workspace with dual monitors and books',
            roast:
              'Two screens, three notebooks, and the bug was still on line 12.',
            highlights: [
              '2x 27" monitors',
              'Dock with too many ports',
              'Sticky notes everywhere',
            ],
          },
        ],
        cta: {
          label: 'Share my setup',
          href: sharedLinks.instagram,
          variant: 'secondary',
        },
      },
    },
    resources: {
      meta: {
        title: 'Resources | Costa del Code',
        description:
          'Curated toolkit with tools, design patterns, and technologies used by the community.',
      },
      hero: {
        eyebrow: 'Toolkit',
        title: 'Resources we use daily to build faster.',
        intro: 'Curated by the community to save hours of research.',
        description:
          'A lightweight directory with tools, patterns, and stacks already working in real projects.',
      },
      categories: {
        eyebrow: 'Directories',
        title: 'Three clear blocks to start today.',
        intro: 'Each category comes with real examples and ready links.',
        items: [
          {
            title: 'Frontend tools',
            description: 'Fast stack, consistent UI, and calm DX.',
            items: [
              {
                name: 'Astro',
                description: 'Fast site builder for content and marketing.',
                href: 'https://astro.build',
              },
              {
                name: 'Tailwind CSS v4',
                description: 'Utility-first design system with tokens.',
                href: 'https://tailwindcss.com',
              },
              {
                name: 'Vite',
                description: 'Lightning fast builds for modern projects.',
                href: 'https://vitejs.dev',
              },
              {
                name: 'Figma',
                description: 'Rapid prototyping with collaboration.',
                href: 'https://figma.com',
              },
            ],
          },
          {
            title: 'Design patterns',
            description: 'Good practices to scale without chaos.',
            items: [
              {
                name: 'Design Systems',
                description: 'Consistent, reusable components.',
                href: 'https://designsystemsrepo.com',
              },
              {
                name: 'Atomic Design',
                description: 'Layered methodology for building UI.',
                href: 'https://bradfrost.com/blog/post/atomic-web-design/',
              },
              {
                name: 'Clean Architecture',
                description: 'Clear separation between domain and details.',
                href: 'https://8thlight.com/insights/clean-architecture',
              },
              {
                name: 'Component-driven',
                description: 'Building UI from small parts.',
                href: 'https://storybook.js.org/docs/react/writing-stories/introduction',
              },
            ],
          },
          {
            title: 'Local tech stack',
            description: 'Technologies we use most around here.',
            items: [
              {
                name: 'TypeScript',
                description: 'Typed tooling for front and back.',
                href: 'https://www.typescriptlang.org',
              },
              {
                name: 'React',
                description: 'Dynamic UI for complex apps.',
                href: 'https://react.dev',
              },
              {
                name: 'Node.js',
                description: 'Fast backends with JS.',
                href: 'https://nodejs.org',
              },
              {
                name: 'Python',
                description: 'Automation, data, and ML.',
                href: 'https://www.python.org',
              },
            ],
          },
        ],
      },
      contribution: {
        eyebrow: 'Contribute',
        title: 'The toolkit grows with the community.',
        description:
          'If a tool, pattern, or stack is missing, tell us and we will add it.',
        cta: {
          label: 'Suggest a resource',
          href: sharedLinks.telegram,
          variant: 'primary',
        },
      },
    },
    events: {
      meta: {
        title: 'Events | Costa del Code',
        description:
          'Local agenda with meetups, talks, and lightweight formats for devs in Costa del Sol.',
      },
      hero: {
        eyebrow: 'Events',
        title: 'Small meetups, big impact.',
        intro: 'No mega events. We prefer short talks and long conversations.',
        description:
          'Every meetup is listed here so you can join even for a quick coffee and code chat.',
      },
      upcoming: {
        eyebrow: 'Agenda',
        title: 'Upcoming (editable placeholder).',
        intro:
          'We update this section once a date is locked. Pitch a topic if you have one.',
        items: [
          {
            title: 'Applied AI for coding',
            date: 'Date to be confirmed',
            time: '18:30 - 20:00',
            location: 'Costa del Sol',
            meta: 'Afterwork · 90 min',
            description:
              'Real use cases: helpful prompts, tooling, and workflows already in daily use.',
            tags: ['AI', 'Live demos', 'Networking'],
            ctaLabel: 'I want to join',
            ctaHref: sharedLinks.whatsapp,
          },
          {
            title: 'IDE and setup debates',
            date: 'Date to be confirmed',
            time: '19:00 - 20:30',
            location: 'Costa del Sol',
            meta: 'Round table',
            description:
              'Share your configuration, key extensions, and tricks to move faster.',
            tags: ['Tooling', 'DX', 'Setups'],
            ctaLabel: 'Join the debate',
            ctaHref: sharedLinks.telegram,
          },
        ],
      },
      speakers: {
        eyebrow: 'Speakers',
        title: 'Want to give a talk?',
        description:
          'We look for short, practical, no-fluff talks. 15 minutes and real feedback.',
        cta: {
          label: 'Pitch a talk',
          href: sharedLinks.talks,
          variant: 'secondary',
        },
      },
    },
    faq: {
      meta: {
        title: 'FAQ & Contact | Costa del Code',
        description:
          'Frequently asked questions and the easiest ways to connect with the community.',
      },
      hero: {
        eyebrow: 'FAQ & contact',
        title: 'Clear answers before you join.',
        intro: 'If it is not here, message us and we will answer fast.',
        description:
          'The community is open, free, and local. We want your first step to feel easy.',
      },
      questions: {
        eyebrow: 'Frequently asked',
        title: 'What people usually ask.',
        intro: 'Short and straight.',
        items: [
          {
            question: 'Does it cost anything to join?',
            answer: 'No. It is 100% free and open. We only ask for respect.',
          },
          {
            question: 'What level do I need?',
            answer:
              'Any level is welcome: juniors, seniors, and curious learners.',
          },
          {
            question: 'Where do meetups happen?',
            answer:
              'We prefer local spots in Costa del Sol. We announce the location early.',
          },
          {
            question: 'Can I propose a topic or talk?',
            answer: 'Yes. We actually want that. Write us and we will help.',
          },
          {
            question: 'Can I join if I am not a dev yet?',
            answer: 'If you are in tech or learning, you are welcome.',
          },
        ],
      },
      contact: {
        eyebrow: 'Quick contact',
        title: 'Connect on the channel you prefer.',
        description:
          'WhatsApp for the main group, Telegram for updates, Instagram for the human side.',
        ctaLinks: [
          { label: 'WhatsApp', href: sharedLinks.whatsapp, variant: 'primary' },
          {
            label: 'Telegram',
            href: sharedLinks.telegram,
            variant: 'secondary',
          },
          { label: 'Instagram', href: sharedLinks.instagram, variant: 'ghost' },
        ],
      },
    },
  },
};

export const siteContent: Record<LocaleCode, SiteContent> = {
  es: esContent,
  en: enContent,
};
