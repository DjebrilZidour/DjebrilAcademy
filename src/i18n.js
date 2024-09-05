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
      "todo": "TO DO",
      "new_task": "New Task",
      "add_task": "Add Task",
      "toggle_task_done": "Toggle Task Done",
      "delete_task": "Delete Task",
      "still_for_2025": "Still for 2025",
      "error_invalid_task": "Please enter a valid task"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue à ",
      "welcomeName": "Djebril Academy",
      "problems": "Problems",
      "platform_desc": " La première plateforme pour résoudre vos",
      "des2":"de mathématiques et de physique",
      "get_course": "Obtenir Cours/Exercice",
      "learn_more": "En savoir plus",
      "our_mission": "Notre mission",
      "understand_lessons": "Comprendre toutes vos leçons sur une seule plateforme",
      "practice_learned": "Pratiquer tout ce que vous avez appris",
      "highest_mark": "Obtenez la meilleure note à vos examens",
      "our_ceo": "Notre PDG",
      "our_team": "Notre Équipe",
      "see_more": "Voir plus",
      "todo": "À FAIRE",
      "new_task": "Nouvelle Tâche",
      "add_task": "Ajouter Tâche",
      "toggle_task_done": "Changer Statut Tâche",
      "delete_task": "Supprimer Tâche",
      "still_for_2025": "Encore pour 2025",
      "error_invalid_task": "Veuillez entrer une tâche valide"
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبًا بكم في  ",
      "welcomeName": "جبريل اكاديمي",
      "des2": "أول منصة لحل",
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
      "todo": "قائمة المهام",
      "new_task": "مهمة جديدة",
      "add_task": "أضف مهمة",
      "toggle_task_done": "تبديل حالة المهمة",
      "delete_task": "حذف مهمة",
      "still_for_2025": "لا يزال للعام 2025",
      "error_invalid_task": "يرجى إدخال مهمة صحيحة"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
