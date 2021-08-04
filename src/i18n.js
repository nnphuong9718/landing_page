import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/lang/translationEn'
import vi from './assets/lang/translationVi'

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lang') || 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;