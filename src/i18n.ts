import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        flagQuestion: "Which country does this flag belongs to? ",
        capitalQuestion: "is the capital of..? ",
        seeResults: "See results",
        afterGameMessage1: " you've got",
        afterGameMessage2: "points",
        startAgain: "Start again",
        next: 'Next',
        winToast: 'You did it awesome',
        loseToast: 'Sorry, better luck next time'
      },
    },
    es: {
      translation: {
        flagQuestion: "De que pais es esta bandera? ",
        capitalQuestion: "es la capital de..? ",
        seeResults: "Ver resultados",
        afterGameMessage1: " obtuviste",
        afterGameMessage2: "puntos",
        startAgain: "Comenzar de nuevo",
        next: 'Siguiente',
        winToast: 'Lo hiciste increible',
        loseToast: 'Lo siento, mejor suerte para la siguiente'
      },
    },
  },
});

export default i18n;
