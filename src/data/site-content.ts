import { pagePaths, type PageKey } from './i18n';

type PageMeta = {
  title: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialPlatform = 'telegram' | 'instagram';

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
  pending?: boolean;
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
    pendingDate: string;
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
    stats: { label: string; value: string; badge?: string }[];
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
    community: string;
  };
  mosaic: {
    headline: string;
    connectLabel: string;
    connectDescription: string;
    offlineTitle: string;
    docTitle: string;
    communityTitle: string;
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
    founderPortfolio?: string;
  };
  setups: {
    eyebrow: string;
    title: string;
    items: SetupCard[];
  };
};

export type EventsPage = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight?: string;
    description: string;
    intro: string;
    formatAttributes: { value: string; label: string }[];
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
  };
  questions: {
    items: FaqItem[];
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
  telegram: 'https://t.me/costadelcode',
  instagram: 'https://instagram.com/costadelcode',
  github: 'https://github.com/industrial-dev/costadelcode',
  talks: 'mailto:hola@costadelcode.com',
} as const;

const buildSocialCtaLinks = (): CtaLink[] => [
  {
    label: 'Telegram',
    href: sharedLinks.telegram,
    variant: 'primary',
    platform: 'telegram',
  },
  {
    label: 'Instagram',
    href: sharedLinks.instagram,
    variant: 'secondary',
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
    tagline: 'Devs de la Costa del Sol. Conectados.',
    nav: buildNav({
      home: 'Inicio',
      community: 'Comunidad',
      events: 'Eventos',
      faq: 'FAQ',
    }),
    primaryCta: {
      label: 'Unirse a Telegram',
      href: sharedLinks.telegram,
      variant: 'primary',
      platform: 'telegram',
    },
    ctaLinks: buildSocialCtaLinks(),
    labels: {
      date: 'Fecha',
      time: 'Hora',
      location: 'Lugar',
      menu: 'Menú',
      navigation: 'Navegación principal',
      pendingDate: 'Fecha por confirmar',
    },
    social: [
      {
        label: 'Telegram',
        href: sharedLinks.telegram,
        note: 'Grupo principal',
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
      title: 'El primer paso es el más fácil.',
      description:
        'La próxima quedada se anuncia en Telegram antes que en ningún otro sitio. Entra ahora y no te la pierdas.',
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
          'Vivir en la Costa del Sol y trabajar fuera es un privilegio, pero también puede ser solitario. Costa del Code nace para conectar a quienes compartimos la misma zona geográfica.',
        ],
        stats: [
          { value: 'Costa del Sol', label: 'Nuestra zona' },
          { value: 'Arrancamos pronto', label: 'Momento' },
          { value: '100% gratis', label: 'Para unirte', badge: 'Para siempre' },
        ],
        primaryCta: {
          label: 'Unirme a Telegram',
          href: sharedLinks.telegram,
          variant: 'primary',
          platform: 'telegram',
        },
        secondaryCta: {
          label: 'Ver Instagram',
          href: sharedLinks.instagram,
          variant: 'secondary',
          platform: 'instagram',
        },
        tertiaryCta: {
          label: 'Ver GitHub',
          href: sharedLinks.github,
          variant: 'ghost',
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
          'La siguiente quedada se publica aquí en cuanto haya fecha cerrada. Si tienes tema, proponlo sin dudarlo.',
        event: {
          title: '¿Qué es Costa del Code?',
          date: 'Por confirmar',
          time: 'Después del trabajo',
          location: 'Costa del Sol (ubicación por confirmar)',
          meta: 'Formato ligero',
          description:
            'Quedada para hablar sobre Costa del Code, compartir casos reales, instrucciones útiles y herramientas con las que trabajas (o no) en tu día a día.',
          tags: ['Presentación'],
          ctaLabel: 'Quiero asistir',
          ctaHref: sharedLinks.telegram,
          pending: true,
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
          'De Estepona y alrededores. Junior, mid o senior, da igual: si escribes código y vives por aquí, esto va sobre ti.',
        description: [
          'Costa del Code está en sus inicios. Somos un grupo de devs de la zona, de todos los niveles, con ganas de quedar, hablar de código y conectar con gente que comparte el mismo día a día.',
        ],
      },
      founderCard: {
        eyebrow: '¿Quién inició este proyecto?',
        title: 'Dani hizo el primer commit; la comunidad lo mantiene vivo.',
        description: [
          'Costa del Code es la excusa para salir de casa, conocer gente y compartir lo que sabemos con los demás.',
        ],
        highlights: {
          offline:
            'Quedadas presenciales en la Costa del <span style="position:relative;display:inline-block"><span aria-hidden="true" style="position:absolute;left:0;right:0;top:52%;height:2px;background:currentColor;border-radius:1px;pointer-events:none"></span>Code</span> Sol. Sal de casa y conoce a otros devs de la zona.',
          sync: 'Proyectos reales en GitHub donde aprender, colaborar y ganar visibilidad con tu código.',
          push: 'Sube tus ideas al repositorio. La comunidad ayuda a revisarlas y hacerlas crecer.',
          feedback:
            'Recibe feedback honesto de compañeros que hablan tu idioma.',
          community:
            'Abierto a todos. Sin cuotas ni requisitos. Solo ganas de conectar y compartir.',
        },
        mosaic: {
          headline: 'Daniel Núñez',
          connectLabel: 'connect()',
          connectDescription: 'Cafés cortitos y charlas distendidas',
          offlineTitle: 'Meetups',
          docTitle: 'Proyectos',
          communityTitle: 'Comunidad',
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
        title: 'Un ingeniero esteponero que volvió a casa.',
        description:
          'Dani creció en Estepona, estudió fuera y pasó años trabajando en distintas ciudades y en el extranjero. Cuando volvió, echó algo en falta y se preguntó: ¿habrá muchos desarrolladores aquí? Ahora teletrabaja y tiene claro que no es el único que se lo pregunta. Costa del Code es su forma de buscar una respuesta.',
        founderNote:
          'No quiero construir una organización. Quiero que cuando alguien de aquí abra el portátil, sepa que no está solo.',
        founderPortfolio: 'https://industrial-dev.github.io/portfolio/',
      },
      setups: {
        eyebrow: 'Setups',
        title: 'Setups de la comunidad criticados por IA.',
        items: [
          {
            title: 'Configuración #01 · Los patos lo hacen todo',
            name: 'Dani (github: @industrial-dev)',
            role: 'Fundador · Dev Full Stack',
            imageSrc: '/images/setups/setup-01.jpg',
            imageAlt:
              'Setup de Daniel N. con dos monitores grandes, portátil central sobre mesa elevable y patos de goma en el escritorio',
            roast:
              'Triple pantalla, mesa elevable y un equipo de patos de goma más fiable que cualquier sprint planning.',
            highlights: [
              'Triple pantalla (2 monitores + portátil)',
              'Mesa elevable',
              'Teclado mecánico ultradelgado',
            ],
          },
          {
            title: 'Configuración #02 · El junior con setup Targaryen',
            name: 'Javi (github: @javi12ms)',
            role: 'Junior · Dev Full Stack',
            imageSrc: '/images/setups/setup-02.jpeg',
            imageAlt:
              'Setup de Javi con dos monitores curvos, torre gaming con RGB, teclado mecánico, mando de PS4 y una copa de Game of Thrones',
            roast:
              'Setup de senior financiado por la casa Targaryen: dos monitores curvos, torre con más RGB que una feria y una copa de Game of Thrones para el café. El mando de PS4 es puramente decorativo.',
            highlights: [
              '2 monitores curvos',
              'Torre gaming con RGB',
              'Teclado mecánico gaming',
              'Mando PS4 en el escritorio',
              'Copa de Game of Thrones',
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
        titleHighlight: 'impacto grande.',
        description:
          'Nada de macro eventos ni ponentes estrella. Nos juntamos a tomar algo, cada uno cuenta en qué está trabajando y se abre conversación.',
        intro:
          'Puedes venir aunque solo sea a tomar un café y charlar de código — cualquier nivel es bienvenido.',
        formatAttributes: [
          { value: '~90 min', label: 'duración' },
          { value: 'Informal', label: 'formato' },
          { value: 'Costa del Sol', label: 'ubicación' },
        ],
      },
      upcoming: {
        eyebrow: 'Agenda',
        title: 'Lo que viene próximamente.',
        intro:
          'Avisamos por Telegram e Instagram en cuanto cerremos sitio y fecha — si quieres proponer un tema, escríbenos.',
        items: [
          {
            title: '¿Qué es Costa del Code?',
            date: 'Por confirmar',
            time: 'Después del trabajo',
            location: 'Costa del Sol (ubicación por confirmar)',
            meta: 'Formato ligero',
            description:
              'Quedada para hablar sobre Costa del Code, compartir casos reales, instrucciones útiles y herramientas con las que trabajas (o no) en tu día a día.',
            tags: ['Presentación'],
            ctaLabel: 'Quiero asistir',
            ctaHref: sharedLinks.telegram,
            pending: true,
          },
        ],
      },
      speakers: {
        eyebrow: 'Ponentes',
        title: '¿Quieres dar una charla?',
        description:
          'Buscamos charlas cortas, prácticas y sin humo. Si tienes algo que contar, coméntalo por Telegram o Instagram y le damos forma.',
        cta: {
          label: 'Proponer charla',
          href: sharedLinks.telegram,
          variant: 'secondary',
        },
      },
    },
    faq: {
      meta: {
        title: 'FAQ | Costa del Code',
        description:
          'Resolvemos dudas frecuentes y dejamos los canales abiertos para conectar contigo.',
      },
      hero: {
        eyebrow: 'FAQ',
        title: 'Preguntas y respuestas.',
        intro:
          'Si tienes dudas, aquí están las más frecuentes. Si no ves la tuya, escríbenos y te respondemos rápido.',
      },
      questions: {
        items: [
          {
            question: '¿Tiene algún coste participar?',
            answer:
              'No, es 100% gratuito y abierto. Solo es necesario traer buen rollo y ganas de aprender y compartir.',
          },
          {
            question: '¿Qué nivel técnico necesito?',
            answer:
              'Cualquier nivel es bienvenido: juniors, seniors y curiosos con ganas de aprender.',
          },
          {
            question: '¿Dónde se hacen las quedadas?',
            answer:
              'Por el momento en Estepona. Se avisará tanto en el grupo de la comunidad como por instagram del lugar, hora y ubicación exacta de la próxima quedada.',
          },
          {
            question: '¿Puedo proponer un tema o charla?',
            answer:
              'Sí. De hecho estaremos encantados de recibir propuestas. Escríbenos y vemos como darle forma.',
          },
          {
            question: '¿Puedo ir aunque no sea dev?',
            answer: 'Seas quien seas, eres bienvenido en la comunidad.',
          },
          {
            question:
              '¿Puedo participar solo por Telegram sin ir a los eventos?',
            answer:
              'Por supuesto. El grupo de Telegram es el núcleo diario de la comunidad: preguntas, recursos, conversaciones. Los eventos son un plus, no un requisito.',
          },
          {
            question: '¿Con qué frecuencia hacéis quedadas?',
            answer:
              'Estamos arrancando, así que todavía no tenemos una frecuencia fija. El objetivo es quedar una vez al mes. Todo se anuncia en Telegram e Instagram.',
          },
          {
            question: '¿Hay algún stack o lenguaje predominante?',
            answer:
              'Ninguno. Hay gente de frontend, backend, full stack, escritorio, web, móvil... La conversación suele girar en torno a herramientas, proyectos y experiencias, no a tecnologías concretas.',
          },
        ],
      },
    },
  },
};

export const siteContent: SiteContent = esContent;
