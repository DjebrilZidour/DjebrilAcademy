// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to ",
      "welcomeName": "Djebril Academy",
      "problems": "Problems",
      "platform_desc": "The first platform to fix your mathematics and physics ",
      "get_course": "Get Course/Exercise",
      "learn_more": "Learn more",
      "our_mission": "Our Mission",
      "understand_lessons": "Understand all your lessons in one platform",
      "practice_learned": "Practice all what you've learned",
      "highest_mark": "Get the highest mark in your exams",
      "our_ceo": "Our CEO",
      "our_team": "Our Team",
      "see_more": "See more",
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue à ",
      "welcomeName": "Djebril Academy",
      "problems": "Problems",
      "platform_desc": "La première plateforme pour résoudre vos  de mathématiques et de physique",
      "get_course": "Obtenir Cours/Exercice",
      "learn_more": "En savoir plus",
      "our_mission": "Notre mission",
      "understand_lessons": "Comprendre toutes vos leçons sur une seule plateforme",
      "practice_learned": "Pratiquer tout ce que vous avez appris",
      "highest_mark": "Obtenez la meilleure note à vos examens",
      "our_ceo": "Notre PDG",
      "our_team": "Notre Équipe",
      "see_more": "Voir plus",
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبًا بكم في  ",
      "welcomeName": "جبريل اكاديمي",
      "des2":"أول منصة لحل",
      "problems": " مشكلات",
      "platform_desc": " الرياضيات والفيزياء الخاصة بك",
      "get_course": "احصل على الدورة/التمارين",
      "learn_more": "تعرف على المزيد",
      "our_mission": "مهمتنا",
      "understand_lessons": "فهم جميع دروسك على منصة واحدة",
      "practice_learned": "ممارسة كل ما تعلمته",
      "highest_mark": "احصل على أعلى الدرجات في امتحاناتك",
      "our_ceo": "مديرنا التنفيذي",
      "our_team": "فريقنا",
      "see_more": "شاهد المزيد",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // langue par défaut
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
