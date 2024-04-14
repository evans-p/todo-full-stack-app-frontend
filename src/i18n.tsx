import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import StringConstants from "./constants/StringConstants";
import EL from "./locales/EL";
import EN from "./locales/EN";

const getLanguage = (): string => {
  let language = localStorage.getItem(StringConstants.LANGUAGE);

  if (language) {
    if (
      language === StringConstants.ENGLISH ||
      language === StringConstants.GREEK
    ) {
      return language;
    }
  }

  if (navigator.language.includes(StringConstants.GREEK)) {
    localStorage.setItem(StringConstants.LANGUAGE, StringConstants.GREEK);
    return StringConstants.GREEK;
  }

  localStorage.setItem(StringConstants.LANGUAGE, StringConstants.ENGLISH);
  return StringConstants.ENGLISH;
};

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: { ...EN },
    },
    el: {
      translation: { ...EL },
    },
  },
  lng: getLanguage(),
  fallbackLng: StringConstants.ENGLISH,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
