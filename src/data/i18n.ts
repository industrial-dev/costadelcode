export const pagePaths = {
  home: '/',
  community: '/community/',
  resources: '/recursos/',
  events: '/events/',
  faq: '/faq/',
} as const;

export type PageKey = keyof typeof pagePaths;

export const siteLocale = {
  htmlLang: 'es',
  ogLocale: 'es_ES',
} as const;
