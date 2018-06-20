import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json'
import th from './th.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  th
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('th') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

export const t = (name, params = {}) => {
  return I18n.t(name, params)
}

export default I18n;