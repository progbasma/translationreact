
import './App.css'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import React, { useEffect } from 'react';
import HttpBackend from 'i18next-http-backend';
import Languagebuttons from './component/Languagebuttons.jsx';
i18n
  .use(HttpBackend) // load translation using http -> see /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   
    // lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "ar",
    detection: {
        order: ['htmlTag','localStorage','querystring', 'hash', 'cookie',  'sessionStorage', 'navigator',  'path', 'subdomain'],
        caches: ['localStorage', 'cookie']
    },

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
    ,backend: {
        loadPath: '/locales/{{lng}}/translations.json',
      }
  });
function App() {
    const { t } = useTranslation();
    useEffect(() => {
        document.body.dir = i18n.dir();
      }, [i18n.language]);




  return (
    <>
    <Languagebuttons />

  <h2>{t('Welcome to React')}</h2>
  <p>{t('description')}</p>
    </>
  )
}

export default App
