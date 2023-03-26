import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import ptTranslation from './pt.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation }
    },
    lng: navigator.language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;