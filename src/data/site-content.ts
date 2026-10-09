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

const enContent: SiteContent = {
  shared: {
    ...esContent.shared,
    tagline: 'Developers on the Costa del Sol. Connected.',
    nav: buildNav({
      home: 'Home',
      community: 'Community',
      events: 'Events',
      faq: 'FAQ',
    }),
    primaryCta: { ...esContent.shared.primaryCta, label: 'Join Telegram' },
    ctaLinks: buildSocialCtaLinks().map((link) => ({
      ...link,
      label:
        link.platform === 'telegram' ? 'Join Telegram' : 'Follow on Instagram',
    })),
    labels: {
      date: 'Date',
      time: 'Time',
      location: 'Location',
      menu: 'Menu',
      navigation: 'Main navigation',
      pendingDate: 'Date to be confirmed',
    },
    social: [
      { label: 'Telegram', href: sharedLinks.telegram, note: 'Main group' },
      {
        label: 'Instagram',
        href: sharedLinks.instagram,
        note: 'Behind the scenes',
      },
      { label: 'GitHub', href: sharedLinks.github, note: 'Open source' },
    ],
    footer: {
      note: 'An open software development community.',
      legal: 'Costa del Code · 2026',
      navTitle: 'Sections',
      socialTitle: 'Join us',
    },
    join: {
      eyebrow: 'Join the conversation',
      code: 'git switch -c costadelcode;',
      title: 'The first step is easy.',
      description:
        'The next meetup is announced on Telegram before anywhere else. Join now so you don’t miss it.',
    },
  },
  pages: {
    home: {
      meta: {
        title: 'Costa del Code | Developer community on the Costa del Sol',
        description:
          'Local connections, talks and open source projects for developers on the Costa del Sol.',
      },
      hero: {
        eyebrow: 'Costa del Code',
        code: 'git switch -c costadelcode;',
        title: 'A local developer community on the Costa del Sol.',
        intro: 'We’re close by. We just need to connect.',
        description: [
          'Living on the Costa del Sol and working remotely is a privilege, but it can also feel isolating. Costa del Code brings together people who share the same corner of the world.',
        ],
        stats: [
          { value: 'Costa del Sol', label: 'Our area' },
          { value: 'Coming soon', label: 'Getting started' },
          { value: '100% free', label: 'To join', badge: 'Always' },
        ],
        primaryCta: {
          ...esContent.pages.home.hero.primaryCta,
          label: 'Join us on Telegram',
        },
        secondaryCta: {
          ...esContent.pages.home.hero.secondaryCta,
          label: 'See Instagram',
        },
        tertiaryCta: {
          ...esContent.pages.home.hero.tertiaryCta,
          label: 'See GitHub',
        },
      },
      pillars: {
        eyebrow: 'Why join?',
        title: 'What brings us together.',
        items: [
          {
            title: 'Networking',
            description: 'Meet tech professionals nearby.',
            icon: 'networking',
          },
          {
            title: 'Collaboration',
            description: 'Take part in open source projects.',
            icon: 'collaboration',
          },
          {
            title: 'What’s new',
            description: 'Share talks, tools and trends.',
            icon: 'trends',
          },
          {
            title: 'Feedback',
            description:
              'Test ideas, show your work and hear what others think.',
            icon: 'feedback',
          },
          {
            title: 'Opportunities',
            description:
              'Find people to collaborate with and potential clients.',
            icon: 'opportunities',
          },
          {
            title: 'Resources',
            description: 'Discover tools used by the community.',
            icon: 'resources',
          },
        ],
      },
      eventHighlight: {
        eyebrow: 'Next meetup',
        title: 'A living calendar, relaxed events.',
        intro:
          'We’ll post the next meetup here as soon as the date is set. Have a topic in mind? Let us know.',
        event: {
          title: 'What is Costa del Code?',
          date: 'To be confirmed',
          time: 'After work',
          location: 'Costa del Sol (location to be confirmed)',
          meta: 'Relaxed format',
          description:
            'A meetup to talk about Costa del Code, share real world stories, useful tips and the tools you use (or don’t) every day.',
          tags: ['Introduction'],
          ctaLabel: 'I’d like to join',
          ctaHref: sharedLinks.telegram,
          pending: true,
        },
      },
    },
    community: {
      meta: {
        title: 'Community | Costa del Code',
        description:
          'Discover the purpose, story and values behind the local developer community on the Costa del Sol.',
      },
      hero: {
        eyebrow: 'Community',
        title: 'A real meeting place for people who live nearby.',
        intro:
          'From Estepona and nearby. Junior, mid-level or senior—it doesn’t matter. If you code and live around here, this is for you.',
        description: [
          'Costa del Code is just getting started. We’re a group of developers from the area, at every experience level, keen to meet up, talk code and connect with people who share our day-to-day.',
        ],
      },
      founderCard: {
        eyebrow: 'Who started this project?',
        title: 'Dani made the first commit; the community keeps it alive.',
        description: [
          'Costa del Code is an excuse to get out, meet people and share what we know.',
        ],
        highlights: {
          offline:
            'In-person meetups on the Costa del Sol. Get out and meet other local developers.',
          sync: 'Real GitHub projects where you can learn, collaborate and let your code be seen.',
          push: 'Bring your ideas to the repository. The community can review them and help them grow.',
          feedback: 'Get honest feedback from peers who speak your language.',
          community:
            'Open to everyone. No fees or requirements—just a willingness to connect and share.',
        },
        mosaic: {
          headline: 'Daniel Núñez',
          connectLabel: 'connect()',
          connectDescription: 'Quick coffees and easygoing conversations',
          offlineTitle: 'Meetups',
          docTitle: 'Projects',
          communityTitle: 'Community',
          pushCommand: '> gh repo clone industrial-dev/costadelcode',
          feedbackCommand: 'feedback --honest',
        },
      },
      purpose: {
        eyebrow: 'Why we’re here',
        title: 'Bring talent closer and build a real community.',
        description:
          'You don’t need to move to a big city to grow. What was missing was a place to connect the people who are already here.',
        points: [
          'Reduce the isolation of remote work.',
          'Showcase local talent and create real opportunities.',
          'Start open source projects right here in the area.',
        ],
      },
      origin: {
        eyebrow: 'Our story',
        title: 'An engineer from Estepona who came home.',
        description:
          'Dani grew up in Estepona, studied elsewhere and spent years working in different cities and abroad. When he came back, something was missing, and he wondered: are there many developers here? He works remotely now and knows he isn’t the only one asking. Costa del Code is his way of finding out.',
        founderNote:
          'I don’t want to build an organisation. I want people here to know they’re not alone when they open their laptop.',
        founderPortfolio: 'https://industrial-dev.github.io/portfolio/',
      },
      setups: {
        eyebrow: 'Setups',
        title: 'Community setups roasted by AI.',
        items: [
          {
            title: 'Setup #01 · The ducks do it all',
            name: 'Dani (GitHub: @industrial-dev)',
            role: 'Founder · Full Stack Developer',
            imageSrc: '/images/setups/setup-01.jpg',
            imageAlt:
              'Daniel N.’s setup with two large monitors, a laptop on a standing desk and rubber ducks on the desk',
            roast:
              'Three screens, a standing desk and a team of rubber ducks more reliable than any sprint planning.',
            highlights: [
              'Three screens (2 monitors + laptop)',
              'Standing desk',
              'Ultra-slim mechanical keyboard',
            ],
          },
          {
            title: 'Setup #02 · The junior with a Targaryen setup',
            name: 'Javi (GitHub: @javi12ms)',
            role: 'Junior · Full Stack Developer',
            imageSrc: '/images/setups/setup-02.jpeg',
            imageAlt:
              'Javi’s setup with two curved monitors, an RGB gaming tower, mechanical keyboard, PS4 controller and a Game of Thrones goblet',
            roast:
              'A senior setup funded by House Targaryen: two curved monitors, a tower with more RGB than a fairground and a Game of Thrones goblet for coffee. The PS4 controller is purely decorative.',
            highlights: [
              '2 curved monitors',
              'RGB gaming tower',
              'Gaming mechanical keyboard',
              'PS4 controller on the desk',
              'Game of Thrones goblet',
            ],
          },
        ],
      },
    },
    events: {
      meta: {
        title: 'Events | Costa del Code',
        description:
          'A local calendar of meetups, talks and relaxed events for developers on the Costa del Sol.',
      },
      hero: {
        eyebrow: 'Events',
        title: 'Small meetups, big impact.',
        titleHighlight: 'big impact.',
        description:
          'No mega-events or star speakers. We get together for a drink, share what we’re working on and see where the conversation goes.',
        intro:
          'Come just for a coffee and a chat about code if you like—every experience level is welcome.',
        formatAttributes: [
          { value: '~90 min', label: 'duration' },
          { value: 'Informal', label: 'format' },
          { value: 'Costa del Sol', label: 'location' },
        ],
      },
      upcoming: {
        eyebrow: 'Calendar',
        title: 'Coming up.',
        intro:
          'We’ll share the place and date on Telegram and Instagram as soon as they’re set. Want to suggest a topic? Get in touch.',
        items: [
          {
            title: 'What is Costa del Code?',
            date: 'To be confirmed',
            time: 'After work',
            location: 'Costa del Sol (location to be confirmed)',
            meta: 'Relaxed format',
            description:
              'A meetup to talk about Costa del Code, share real world stories, useful tips and the tools you use (or don’t) every day.',
            tags: ['Introduction'],
            ctaLabel: 'I’d like to join',
            ctaHref: sharedLinks.telegram,
            pending: true,
          },
        ],
      },
      speakers: {
        eyebrow: 'Speakers',
        title: 'Want to give a talk?',
        description:
          'We’re looking for short, practical talks without the hype. If you have something to share, tell us on Telegram or Instagram and we’ll shape it together.',
        cta: {
          label: 'Pitch a talk',
          href: sharedLinks.telegram,
          variant: 'secondary',
        },
      },
    },
    faq: {
      meta: {
        title: 'FAQ | Costa del Code',
        description:
          'Answers to common questions, plus open channels to connect with us.',
      },
      hero: {
        eyebrow: 'FAQ',
        title: 'Questions and answers.',
        intro:
          'Here are answers to the questions we hear most. If yours isn’t here, send us a message and we’ll get back to you.',
      },
      questions: {
        items: [
          {
            question: 'Does it cost anything to take part?',
            answer:
              'No, it’s completely free and open to everyone. Just bring a good attitude and a willingness to learn and share.',
          },
          {
            question: 'What technical level do I need?',
            answer:
              'Everyone is welcome: juniors, seniors and curious people who want to learn.',
          },
          {
            question: 'Where do meetups take place?',
            answer:
              'For now, in Estepona. We’ll share the place, time and exact location of the next meetup in the community group and on Instagram.',
          },
          {
            question: 'Can I suggest a topic or a talk?',
            answer:
              'Absolutely. We’d love to hear your ideas. Get in touch and we’ll work out the details.',
          },
          {
            question: 'Can I come if I’m not a developer?',
            answer: 'Whoever you are, you’re welcome in the community.',
          },
          {
            question: 'Can I take part on Telegram without attending events?',
            answer:
              'Of course. The Telegram group is the community’s daily hub for questions, resources and conversations. Events are a bonus, not a requirement.',
          },
          {
            question: 'How often do you meet?',
            answer:
              'We’re just getting started, so we don’t have a regular schedule yet. The goal is to meet once a month. We announce everything on Telegram and Instagram.',
          },
          {
            question: 'Is there a particular stack or programming language?',
            answer:
              'No. We have people in frontend, backend, full stack, desktop, web and mobile. Conversations tend to focus on tools, projects and experiences rather than specific technologies.',
          },
        ],
      },
    },
  },
};

export const siteContentByLocale: Record<'es' | 'en', SiteContent> = {
  es: esContent,
  en: enContent,
};
export const siteContent: SiteContent = esContent;
