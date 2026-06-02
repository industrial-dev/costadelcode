export const pagePaths = {
  es: {
    home: '/es/',
    community: '/es/comunidad/',
    resources: '/es/recursos/',
    events: '/es/eventos/',
    faq: '/es/faq/',
  },
  en: {
    home: '/en/',
    community: '/en/community/',
    resources: '/en/resources/',
    events: '/en/events/',
    faq: '/en/faq/',
  },
} as const;

export type PageKey = keyof (typeof pagePaths)['es'];

export const localeConfig = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  paths: {
    es: pagePaths.es.home,
    en: pagePaths.en.home,
  },
} as const;

export type LocaleCode = (typeof localeConfig.locales)[number];

const sharedAlternates = {
  es: pagePaths.es.home,
  en: pagePaths.en.home,
  'x-default': pagePaths.es.home,
} as const;

export const localeMeta: Record<
  LocaleCode,
  { htmlLang: string; ogLocale: string }
> = {
  es: {
    htmlLang: 'es',
    ogLocale: 'es_ES',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
};

export const localeAlternates = {
  es: sharedAlternates,
  en: sharedAlternates,
  root: sharedAlternates,
} as const;

export const pageAlternates = (page: PageKey) => ({
  es: pagePaths.es[page],
  en: pagePaths.en[page],
  'x-default': pagePaths.es[page],
});

export const redirectAlternates = {
  es: pagePaths.es.home,
  'x-default': pagePaths.es.home,
} as const;
