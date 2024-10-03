import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importuj svoje prevode
import translationEN from './locales/en/translation.json';
import translationSR from './locales/sr/translation.json';
import translationRU from './locales/ru/translation.json';

// Konfiguracija prevoda za svaki jezik
const resources = {
  en: { translation: translationEN },
  sr: { translation: translationSR },
  ru: { translation: translationRU }
};

i18n
  .use(initReactI18next) // Pass in react-i18next plugin
  .init({
    resources,
    lng: 'sr', // Podrazumevani jezik
    fallbackLng: 'en', // Ako jezik nije dostupan, koristi fallback
    interpolation: {
      escapeValue: false // React već štiti od XSS-a
    }
  });

export default i18n;
