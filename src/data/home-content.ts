import type { LocaleCode } from './i18n';

type NavItem = {
  label: string;
  href: string;
};

type AudienceItem = {
  title: string;
  description: string;
};

type MeetupItem = {
  title: string;
  description: string;
  meta: string;
};

type CtaLink = {
  label: string;
  href: string;
};

export type HomeContent = {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    code: string;
    title: string;
    intro: string;
    description: string[];
    primary: string;
    secondary: string;
  };
  community: {
    eyebrow: string;
    title: string;
    intro: string;
    audienceEyebrow: string;
    audience: AudienceItem[];
    closing: string;
  };
  meetups: {
    eyebrow: string;
    title: string;
    intro: string;
    items: MeetupItem[];
  };
  origin: {
    eyebrow: string;
    title: string;
    description: string;
  };
  cta: {
    eyebrow: string;
    code: string;
    title: string;
    description: string;
    links: CtaLink[];
  };
  footer: {
    copy: string;
    note: string;
  };
};

const esContent: HomeContent = {
  meta: {
    title: 'Costa del Code | Comunidad de devs en Estepona',
    description:
      'Una comunidad local y sin ánimo de lucro para desarrolladores en Estepona. Hacemos networking, charlas y quedadas para despegarnos de la pantalla.',
  },
  brand: 'Costa del Code',
  nav: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Comunidad', href: '#community' },
    { label: 'Quedadas', href: '#meetups' },
    { label: 'Únete', href: '#join' },
  ],
  hero: {
    eyebrow: 'Bienvenidos a',
    code: 'console.log("¡Hola, mundo! (Desde Estepona)");',
    title:
      'Programando en remoto, viviendo donde no hace falta mockear el buen tiempo.',
    intro:
      '¡Hola! Soy Dani, ingeniero industrial y desarrollador de software. Digamos que soy un Mid-level Developer con 5 años de commits a mis espaldas.',
    description: [
      'Al igual que muchos de vosotros, cuando empecé en esto me di cuenta de una gran verdad: el software nos da la libertad de trabajar desde donde queramos. Gracias al teletrabajo, puedo dar soporte a empresas de cualquier lugar del mundo con condiciones competitivas, pero sin hacer un deploy en producción un viernes... es decir, sin renunciar a lo que más quiero: mi pueblo, mis amigos, mi familia y la calidad de vida de Estepona.',
      'Un buen día me saltó una excepción en la cabeza y me pregunté: ¿Cuántos devs habrá en mi misma situación por aquí? Así que, para evitar el aislamiento del home office, decidí refactorizar mi vida social y crear Costa del Code.',
    ],
    primary: 'Entrar al grupo',
    secondary: 'Ver de qué va esto',
  },
  community: {
    eyebrow: '¿Qué es Costa del Code?',
    title:
      'Somos una comunidad de código abierto (literalmente) para desarrolladores en Estepona y la Costa del Sol.',
    intro: 'Este espacio es para ti si:',
    audienceEyebrow: 'Perfil',
    audience: [
      {
        title: 'Devs locales',
        description:
          'Eres de la zona y teletrabajas para empresas de fuera (arquitectura monolítica en casa, microservicios en el cliente).',
      },
      {
        title: 'Digital nomads',
        description:
          'Eres un digital nomad que ha configurado su localhost en Estepona porque te flipa el mar.',
      },
      {
        title: 'Gente de código',
        description:
          'Quieres conectar con otros perfiles tecnológicos sin tener que migrar tu base de datos (y tu vida) a una gran metrópolis.',
      },
    ],
    closing:
      'El propósito de esta web es simple: crear una red de contactos real y local. Queremos romper el aislamiento de la pantalla y conectar a los apasionados de la tecnología de la zona.',
  },
  meetups: {
    eyebrow: '¿Cómo nos organizamos?',
    title: 'Sin metodologías ágiles estrictas, lo prometo.',
    intro:
      'Costa del Code no tiene un Product Owner dictador. La idea es co-crearla entre todos, pero para arrancar el MVP, esto es lo que tenemos en mente:',
    items: [
      {
        title: 'Meetups y Quedadas',
        description: 'Encuentros periódicos para despegarnos de la silla.',
        meta: 'Presencial',
      },
      {
        title: 'Lightning Talks',
        description:
          'Exposiciones cortitas y al grano. Alguien se prepara un tema que le flipe (una nueva tecnología, patrones de diseño, cómo sobrevivir a CSS...) y lo expone en 15 minutos. Sin rodeos.',
        meta: '15 Minutos',
      },
      {
        title: 'Networking & Cañas',
        description:
          'Después de la charla, abrimos el debate. Momento para comentar novedades del sector, llorar juntos por la última actualización de una librería, pedir feedback para tus proyectos personales o simplemente charlar.',
        meta: 'Debate Abierto',
      },
    ],
  },
  origin: {
    eyebrow: 'Nuestro Objetivo',
    title: 'Hacer piña (y evitar los Merge Conflicts)',
    description:
      'Principalmente nos centramos en Estepona para que la latencia de las quedadas sea lo más baja posible, pero si vienes de los alrededores, ¡tu Pull Request de amistad será aceptada sin mirar el code review!',
  },
  cta: {
    eyebrow: 'Únete a la conversación antes de que tire un Timeout',
    code: 'git commit -m "Únete a la comunidad"',
    title:
      'Esto no es un sistema cerrado. Aquí no hay jerarquías ni código propietario.',
    description:
      'Queremos que propongas formatos, temas, lugares para quedar y dinámicas. Si te apetece formar parte de esto desde el principio, compartir código, experiencias y buen rato con gente que sabe lo que es sufrir por un punto y coma, ¡este es tu sitio!',
    links: [
      {
        label: 'Entrar al grupo de WhatsApp',
        href: '#',
      },
      {
        label: 'Entrar al canal de Telegram',
        href: '#',
      },
    ],
  },
  footer: {
    copy: 'Costa del Code',
    note: 'Comunidad sin ánimo de lucro de developers en Estepona.',
  },
};

export const homeContent: Record<LocaleCode, HomeContent> = {
  es: esContent,
  en: esContent,
};
