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

      // About section
      aboutTitle: "О нас",
      aboutSubtitle: "Слияние моды и наследия",
      aboutDescription:
        "SAFOBREND — это не просто бренд мужской одежды, а воплощение стиля и уверенности каждого мужчины. Мы создаём брюки, рубашки, костюмы и другие изделия для мужчин от 7 до 70 лет. Каждая вещь сочетает в себе качество, комфорт и современный дизайн. Одежда от SAFOBREND подчёркивает индивидуальность и подходит как для повседневной жизни, так и для особых случаев. Наша цель — передать через одежду внутреннюю силу и уверенность мужчины. Каждая модель продумана до мелочей, выполнена из прочных тканей и имеет современный стиль. SAFOBREND — это твой стиль, твоя уверенность, твой бренд.",

      // Products section
      productsTitle: "Продукция",

      // Footer
      callCenter: "Колл-центр",
      generalDirector: "Генеральный директор",
      phoneNumber: "Номер телефона",
      email: "Электронная почта",
      address: "Адрес",
      addressText:
        "Наманганская область, город Наманган, улица Ислама Каримова, 1-й тупик, махалля Орзу, дом 12",

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

      // About section
      aboutTitle: "About Us",
      aboutSubtitle: "Fusion of Fashion and Heritage",
      aboutDescription:
        "SAFOBREND is more than just a men’s clothing brand — it’s a reflection of every man’s style and confidence. We create trousers, shirts, suits, and more for men aged 7 to 70. Each piece combines quality, comfort, and modern design. SAFOBREND clothing emphasizes individuality and is perfect for both everyday wear and special occasions. Our mission is to express a man’s inner strength and confidence through his look. Every design is thoughtfully crafted, made from durable fabrics, and features a contemporary touch. SAFOBREND — your style, your confidence, your brand.",

      // Products section
      productsTitle: "Products",

      // Footer
      callCenter: "Call Center",
      generalDirector: "General Director",
      phoneNumber: "Phone Number",
      email: "Email",
      address: "Address",
      addressText:
        "Namangan region, Namangan city, Islam Karimov street, 1st dead-end, Orzu neighborhood, house 12",

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

      // About section
      aboutTitle: "Biz haqimizda",
      aboutSubtitle: "Moda va merosning uyg'unligi",
      aboutDescription:
        "SAFOBREND — bu shunchaki kiyim brendi emas, bu har bir erkakning uslubi va ishonchining ifodasidir. Biz 7 yoshdan 70 yoshgacha bo‘lgan erkaklar uchun shimlar, ko‘ylaklar, kostyumlar va boshqa kiyim turlarini yaratamiz. Har bir mahsulotimizda sifat, qulaylik va zamonaviylik uyg‘unlashgan. SAFOBREND kiyimlari har qanday holatda — kundalik hayotda ham, maxsus tadbirlarda ham — sizga o‘ziga xoslik va ishonch bag‘ishlaydi. Bizning maqsadimiz — har bir erkakning tashqi ko‘rinishida ichki kuchi va o‘ziga ishonchini aks ettirishdir. Har bir model puxta o‘ylangan dizayn, bardoshli mato va zamonaviy detalga ega. SAFOBREND — bu sizning uslubingiz, sizning ishonchingiz, sizning brendingiz.",

      // Products section
      productsTitle: "Mahsulotlar",

      // Footer
      callCenter: "Aloqa markazi",
      generalDirector: "Bosh direktor",
      phoneNumber: "Telefon raqami",
      email: "Elektron pochta",
      address: "Manzil",
      addressText:
        "Namangan viloyati, Namangan shahar, Islom Karimov ko'chasi, 1-tupik, Orzu MFY, 12-uy",

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
