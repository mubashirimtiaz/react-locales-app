import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import App from "./App";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "flag-icon-css/css/flag-icon.min.css";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag", "querystring", "localStorage"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    // react: { useSuspense: false },
  });

const Loader = () => (
  <div className="container mx-auto text-center">
    <p className="text-3xl">Loading...</p>
  </div>
);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
