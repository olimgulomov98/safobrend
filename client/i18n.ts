import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  ru: {
    translation: {
      // Navigation
      home: "Главная",
      about: "О нас",
      products: "Продукция",
      contact: "Колл-центр",

      // Hero section
      heroTitle: "YULDUZ COLLECTION",

      // About section
      aboutTitle: "О нас",
      aboutSubtitle: "Слияние моды и наследия",
      aboutDescription:
        "YULDUZ COLLECTION — место, где ремесло и мастерство соединяются. Наша мастерская расположена в Бухарской области, Пешкунском районе, махалле Пешку и уже более 30 лет предлагает клиентам качественные шубы и тюбетейки. Для нас каракульская шкура — это не просто сырьё, а бесценный дар, который можно превратить в произведение искусства. Каждое изделие создаётся вручную, с умением и любовью. В результате рождаются вещи, которые не только тёплые и удобные, но и воплощают в себе национальные традиции и утончённость. За долгие годы наше мастерство заслужило доверие и благодарность множества клиентов. Каждый заказ для нас — это новая ответственность, новые возможности и радость видеть довольного клиента.",

      // Products section
      productsTitle: "Продукция",

      // Footer
      callCenter: "Колл-центр",
      generalDirector: "Генеральный директор",
      phoneNumber: "Номер телефона",
      email: "Электронная почта",
      address: "Адрес",

      // Mobile navbar
      mobileTitle: "HUSAN SHER",

      // Language names
      language: "Язык",
      russian: "Русский",
      english: "English",
      uzbek: "O'zbek",
    },
  },
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",

      // Hero section
      heroTitle: "YULDUZ COLLECTION",

      // About section
      aboutTitle: "About Us",
      aboutSubtitle: "Fusion of Fashion and Heritage",
      aboutDescription:
        "YULDUZ COLLECTION — where craft and skill come together. Our workshop is located in Bukhara region, Peshku district, Peshku mahalla and for more than 30 years has been offering clients quality fur coats and skullcaps. For us, karakul skin is not just raw material, but a priceless gift that can be turned into a work of art. Each product is created by hand, with skill and love. As a result, things are born that are not only warm and comfortable, but also embody national traditions and sophistication. Over the years, our craftsmanship has earned the trust and gratitude of many clients. Every order for us is a new responsibility, new opportunities and the joy of seeing a satisfied client.",

      // Products section
      productsTitle: "Products",

      // Footer
      callCenter: "Call Center",
      generalDirector: "General Director",
      phoneNumber: "Phone Number",
      email: "Email",
      address: "Address",

      // Mobile navbar
      mobileTitle: "HUSAN SHER",

      // Language names
      language: "Language",
      russian: "Русский",
      english: "English",
      uzbek: "O'zbek",
    },
  },
  uz: {
    translation: {
      // Navigation
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      products: "Mahsulotlar",
      contact: "Aloqa",

      // Hero section
      heroTitle: "YULDUZ COLLECTION",

      // About section
      aboutTitle: "Biz haqimizda",
      aboutSubtitle: "Moda va merosning uyg'unligi",
      aboutDescription:
        "YULDUZ COLLECTION — hunarmandchilik va mahorat birlashadigan joy. Bizning ustaxona Buxoro viloyati, Peshku tumani, Peshku mahallasida joylashgan va 30 yildan ortiq vaqt davomida mijozlarga sifatli shuba va telpaklar taklif qilmoqda. Biz uchun qorakul terisi nafaqat xom ashyo, balki san'at asariga aylantirilishi mumkin bo'lgan qimmatbaho sovg'adir. Har bir buyum qo'lda, mahorat va muhabbat bilan yaratiladi. Natijada nafaqat issiq va qulay, balki milliy an'analar va nafosatni o'zida mujassam etgan narsalar tug'iladi. Uzoq yillar davomida bizning hunarmandchiligimiz ko'plab mijozlarning ishonchi va minnatdorchiligiga sazovor bo'ldi. Har bir buyurtma biz uchun yangi mas'uliyat, yangi imkoniyatlar va mamnun mijozni ko'rishdan zavqlanishdir.",

      // Products section
      productsTitle: "Mahsulotlar",

      // Footer
      callCenter: "Aloqa markazi",
      generalDirector: "Bosh direktor",
      phoneNumber: "Telefon raqami",
      email: "Elektron pochta",
      address: "Manzil",

      // Mobile navbar
      mobileTitle: "HUSAN SHER",

      // Language names
      language: "Til",
      russian: "Русский",
      english: "English",
      uzbek: "O'zbek",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
