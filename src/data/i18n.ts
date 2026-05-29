export const localeConfig = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  paths: {
    es: '/es/',
    en: '/en/',
  },
} as const;

export type LocaleCode = (typeof localeConfig.locales)[number];

const sharedAlternates = {
  es: localeConfig.paths.es,
  en: localeConfig.paths.en,
  'x-default': localeConfig.paths.es,
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

export const redirectAlternates = {
  es: localeConfig.paths.es,
  'x-default': localeConfig.paths.es,
} as const;
