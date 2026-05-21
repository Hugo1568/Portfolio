import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

export const languages = {
  es: { label: 'ES', flag: '🇲🇽', path: '/' },
  en: { label: 'EN', flag: '🇺🇸', path: '/en/' },
} as const;

export const defaultLang: Lang = 'es';

const translations = { es, en };

/**
 * Returns the translations object for a given language.
 * Usage inside .astro files:
 *   const t = useTranslations(lang);
 *   t.hero.title1
 */
export function useTranslations(lang: Lang) {
  return translations[lang];
}

/**
 * Given the current URL, returns the opposite locale's URL.
 * / → /en/    |    /en/ → /
 */
export function getAlternatePath(currentPath: string): string {
  if (currentPath.startsWith('/en')) {
    return currentPath.replace(/^\/en/, '') || '/';
  }
  return `/en${currentPath === '/' ? '/' : currentPath}`;
}

/**
 * Detects lang from URL pathname.
 * Useful in layouts: const lang = getLangFromUrl(Astro.url);
 */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}
