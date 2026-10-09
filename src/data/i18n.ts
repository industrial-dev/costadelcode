export const pagePaths = {
  home: '/',
  community: '/community/',
  events: '/events/',
  faq: '/faq/',
} as const;

export type PageKey = keyof typeof pagePaths;

export type Locale = 'es' | 'en';
export const localeConfig = {
  es: { htmlLang: 'es', ogLocale: 'es_ES', prefix: '' },
  en: { htmlLang: 'en', ogLocale: 'en_US', prefix: '/en' },
} as const;

export const localizedPath = (locale: Locale, page: PageKey) =>
  `${localeConfig[locale].prefix}${pagePaths[page]}`;

export const locales: Locale[] = ['es', 'en'];

export const getLocaleFromPath = (pathname: string): Locale =>
  pathname.replace(/\/$/, '').split('/').includes('en') ? 'en' : 'es';

export const getPageFromPath = (pathname: string): PageKey => {
  const path = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return (Object.entries(pagePaths).find(
    ([, pagePath]) => pagePath === path || pagePath === `${path}/`
  )?.[0] ?? 'home') as PageKey;
};
