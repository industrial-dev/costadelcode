import { pagePaths, type PageKey } from './i18n';

type PageMeta = {
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialPlatform = 'whatsapp' | 'telegram' | 'instagram';

export type CtaLink = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  platform?: SocialPlatform;
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

export type PillarIconName =
  | 'networking'
  | 'collaboration'
  | 'trends'
  | 'feedback'
  | 'opportunities'
  | 'resources';

export type HomePillar = Pillar & {
  icon: PillarIconName;
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
    navigation: string;
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
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: HomePillar[];
  };
  eventHighlight: {
    eyebrow: string;
    title: string;
    intro: string;
    event: EventItem;
  };
};

export type FounderCard = {
  eyebrow: string;
  title: string;
  description: string[];
  highlights: {
    offline: string;
    sync: string;
    push: string;
    feedback: string;
  };
  mosaic: {
    headline: string;
    connectLabel: string;
    connectDescription: string;
    offlineNumber: string;
    offlineLabel: string;
    offlineTitle: string;
    docTitle: string;
    communityTitle: string;
    communityTag: string;
    pushCommand: string;
    feedbackCommand: string;
  };
};

export type CommunityPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    description: string[];
    founderIntro: {
      name: string;
      note: string;
      eyebrow: string;
    };
  };
  founderCard: FounderCard;
  purpose: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  origin?: {
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

const buildSocialCtaLinks = (): CtaLink[] => [
  {
    label: 'WhatsApp',
    href: sharedLinks.whatsapp,
    variant: 'primary',
    platform: 'whatsapp',
  },
  {
    label: 'Telegram',
    href: sharedLinks.telegram,
    variant: 'secondary',
    platform: 'telegram',
  },
  {
    label: 'Instagram',
    href: sharedLinks.instagram,
    variant: 'ghost',
    platform: 'instagram',
  },
];

const navPages = [
  'home',
  'community',
  'events',
  'faq',
] as const satisfies readonly PageKey[];

const buildNav = (labels: Record<PageKey, string>) => [
  ...navPages.map((page) => ({
    label: labels[page],
    href: pagePaths[page],
  })),
];

const esContent: SiteContent = {
  shared: {
    brand: 'Costa del Code',
    tagline: 'La comunidad de devs en la Costa del Sol.',
    nav: buildNav({
      home: 'Inicio',
      community: 'Comunidad',
      events: 'Eventos',
      faq: 'Preguntas',
    }),
    primaryCta: {
      label: 'Unirse a WhatsApp',
      href: sharedLinks.whatsapp,
      variant: 'primary',
      platform: 'whatsapp',
    },
    ctaLinks: buildSocialCtaLinks(),
    labels: {
      date: 'Fecha',
      time: 'Hora',
      location: 'Lugar',
      menu: 'Menú',
      navigation: 'Navegación principal',
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
      { label: 'GitHub', href: sharedLinks.github, note: 'Código abierto' },
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
      description: 'Comparte, enseña y aprende con compañía real.',
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Costa del Code | Comunidad de devs en la Costa del Sol',
        description:
          'Conexiones locales, charlas y proyectos de código abierto para desarrolladores en la Costa del Sol.',
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
          { value: 'Local', label: 'Costa del Sol' },
          { value: 'Código abierto', label: 'Proyectos con impacto real' },
          { value: 'Sin coste', label: 'Comunidad abierta' },
        ],
        primaryCta: {
          label: 'Unirme a WhatsApp',
          href: sharedLinks.whatsapp,
          variant: 'primary',
          platform: 'whatsapp',
        },
        secondaryCta: {
          label: 'Unirme a Telegram',
          href: sharedLinks.telegram,
          variant: 'secondary',
          platform: 'telegram',
        },
        tertiaryCta: {
          label: 'Ver Instagram',
          href: sharedLinks.instagram,
          variant: 'ghost',
          platform: 'instagram',
        },
      },
      pillars: {
        eyebrow: '¿Por qué sumarte?',
        title: 'Pilares que nos mueven.',
        items: [
          {
            title: 'Networking',
            description: 'Conoce profesionales tech de la zona.',
            icon: 'networking',
          },
          {
            title: 'Colaboración',
            description: 'Participa en proyectos de código abierto.',
            icon: 'collaboration',
          },
          {
            title: 'Actualidad',
            description: 'Comparte charlas, herramientas y tendencias.',
            icon: 'trends',
          },
          {
            title: 'Feedback',
            description: 'Valida ideas, enseña avances y recibe opiniones.',
            icon: 'feedback',
          },
          {
            title: 'Oportunidades',
            description:
              'Descubre personas, colaboraciones y posibles clientes.',
            icon: 'opportunities',
          },
          {
            title: 'Recursos',
            description:
              'Conoce y accede a herramientas utilizadas por la comunidad.',
            icon: 'resources',
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
          time: 'Después del trabajo',
          location: 'Costa del Sol (ubicación por confirmar)',
          meta: 'Formato ligero · 90 min',
          description:
            'Mesa corta para hablar sobre Costa del Code, compartir casos reales, instrucciones útiles y herramientas con las que trabajas (o no) en tu día a día.',
          tags: ['IA aplicada', 'Demos en directo', 'Conexiones'],
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
          'De Estepona y alrededores. Junior, mid o senior, da igual: si escribes código y vives por aquí, esto va de ti.',
        description: [
          'Costa del Code está en sus inicios. Somos un grupo de devs de la zona, de todos los niveles, con ganas de quedar, hablar de código y conectar con gente que comparte el mismo día a día.',
        ],
        founderIntro: {
          name: 'Daniel Núñez',
          eyebrow: 'Fundador · Estepona',
          note: 'No quiero construir una organización. Quiero que cuando alguien de aquí abra el portátil, sepa que no está solo.',
        },
      },
      founderCard: {
        eyebrow: '¿Quién inició este proyecto?',
        title: 'Dani hizo el primer commit; la comunidad lo mantiene vivo.',
        description: [
          'Costa del Code es la excusa para salir de casa, conocer gente y compartir lo que sabemos con los demás.',
        ],
        highlights: {
          offline: 'Encuentra potenciales colaboradores y/o clientes.',
          sync: 'Aprendizajes compartidos sobre stacks, herramientas y casos de uso reales.',
          push: 'Proyectos comunitarios para practicar, colaborar y ganar visibilidad.',
          feedback:
            'Valida ideas y recibe feedback honesto de compañeros que hablan el mismo idioma.',
        },
        mosaic: {
          headline: 'Daniel Núñez',
          connectLabel: 'connect()',
          connectDescription: 'Cafés cortitos y charlas distendidas',
          offlineNumber: '01',
          offlineLabel: 'offline',
          offlineTitle: 'connect',
          docTitle: 'docs',
          communityTitle: 'gente junta',
          communityTag: '[ costadelcode ]',
          pushCommand: '> gh repo clone industrial-dev/costadelcode',
          feedbackCommand: 'feedback --honesto',
        },
      },
      purpose: {
        eyebrow: 'El por qué',
        title: 'Descentralizar talento y crear comunidad real.',
        description:
          'No hace falta irse a una gran ciudad para crecer. Lo que faltaba era un lugar para conectar a quienes ya están aquí.',
        points: [
          'Reducir el aislamiento del teletrabajo.',
          'Dar visibilidad a talento local y crear oportunidades reales.',
          'Impulsar proyectos de código abierto que nazcan desde la zona.',
        ],
      },
      origin: {
        eyebrow: 'Historia',
        title: 'Un dev de Estepona que volvió a casa.',
        description:
          'Dani creció en Estepona, estudió fuera y pasó años trabajando en distintas ciudades y en el extranjero. Cuando volvió, lo tenía todo menos algo obvio: gente tech cerca con quien hablar. Ahora teletrabaja desde Estepona y tiene claro que no es el único en esa situación. Costa del Code es su forma de hacer algo al respecto.',
        founderNote:
          'No quiero construir una organización. Quiero que cuando alguien de aquí abra el portátil, sepa que no está solo.',
      },
      pillars: {
        eyebrow: 'Pilares',
        title: 'Lo que hace que esto funcione.',
        intro: 'Estos son los temas que guían nuestras quedadas y proyectos.',
        items: [
          {
            title: 'Conexiones',
            description: 'Conexiones reales entre profesionales tech locales.',
          },
          {
            title: 'Colaboración',
            description: 'Proyectos abiertos para aprender haciendo.',
          },
          {
            title: 'Actualidad',
            description: 'Charlas sobre IA, herramientas y tendencias.',
          },
          {
            title: 'Sintonía',
            description: 'Gente que entiende tus retos y tus tecnologías.',
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
        eyebrow: 'Revisión de configuraciones',
        title: 'Configuraciones reales, humor respetuoso.',
        intro:
          'Dos setups de muestra para el primer despliegue. Pronto abrimos la galería completa con aportes de la comunidad.',
        items: [
          {
            title: 'Configuración #01 · El minimalista accidental',
            name: 'Rafa M.',
            role: 'Desarrollador de interfaz',
            imageSrc: '/images/setups/setup-01.svg',
            imageLabel: 'Imagen provisional de configuración con luz cálida',
            imageAlt:
              'Foto de configuración con mesa clara y monitor panorámico',
            roast:
              'Mucho minimalismo, pero ese cable HDMI sigue viendo el sol cada mañana.',
            highlights: [
              '1 monitor panorámico',
              'Teclado de perfil bajo',
              'Café en taza de cerámica',
            ],
          },
          {
            title: 'Configuración #02 · El multiventana',
            name: 'Lola G.',
            role: 'Servidor + IA',
            imageSrc: '/images/setups/setup-02.svg',
            imageLabel: 'Imagen provisional de configuración con tonos oscuros',
            imageAlt: 'Foto de configuración con doble monitor y libros',
            roast:
              'Dos pantallas, tres notebooks y aun así el bug estaba en la línea 12.',
            highlights: [
              '2x monitores 27"',
              'Dock con mil puertos',
              'Notas en post-its',
            ],
          },
        ],
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
        title: 'Lo que viene (provisional y editable).',
        intro:
          'Actualizamos esta sección cuando cerramos fecha. Si quieres proponer tema, escribe.',
        items: [
          {
            title: 'IA aplicada al código',
            date: 'Fecha por confirmar',
            time: '18:30 - 20:00',
            location: 'Costa del Sol',
            meta: 'Después del trabajo · 90 min',
            description:
              'Casos reales de uso de IA: instrucciones útiles, herramientas y flujos de trabajo que ya usamos cada día.',
            tags: ['IA', 'Demos en directo', 'Conexiones'],
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
            tags: [
              'Herramientas',
              'Experiencia de desarrollo',
              'Configuraciones',
            ],
            ctaLabel: 'Sumarme al debate',
            ctaHref: sharedLinks.telegram,
          },
        ],
      },
      speakers: {
        eyebrow: 'Ponentes',
        title: '¿Quieres dar una charla?',
        description:
          'Buscamos charlas cortas, prácticas y sin humo. 15 minutos y opiniones reales.',
        cta: {
          label: 'Proponer charla',
          href: sharedLinks.talks,
          variant: 'secondary',
        },
      },
    },
    faq: {
      meta: {
        title: 'Preguntas y Contacto | Costa del Code',
        description:
          'Resolvemos dudas frecuentes y dejamos los canales abiertos para conectar contigo.',
      },
      hero: {
        eyebrow: 'Preguntas y contacto',
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
        ctaLinks: buildSocialCtaLinks(),
      },
    },
  },
};

export const siteContent: SiteContent = esContent;
