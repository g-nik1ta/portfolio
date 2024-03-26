import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import translationUA from "locales/ua/translation.json";
import translationEN from "locales/en/translation.json";
import translationRU from "locales/ru/translation.json";

const resources = {
    ua: {
        translation: translationUA
    },
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    },
};

const lng = "en";

i18n
    .use(Backend) // used to load data from othe directory
    .use(LanguageDetector) // detects the current language
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng, // default language
        detection: {
            checkWhitelist: true,
        },
        debug: false,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
        // Разрешить использование HTML в переводах
        sanitizeHtml: true,
    });

export default i18n;
