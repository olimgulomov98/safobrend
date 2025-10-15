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
        "Yulduz Collection — это не просто бренд одежды, это воплощение индивидуального стиля каждой женщины. Каждое изделие создаётся с любовью, вниманием к деталям и стремлением подчеркнуть женственность и уверенность. Наша цель — подарить женщинам не только современный образ, но и ощущение внутренней гармонии, красоты и уверенности в себе. В каждой коллекции сочетаются утончённые линии, благородные ткани и тщательно подобранные оттенки. Мы вдохновляемся современными модными тенденциями, сохраняя при этом восточную изысканность и национальный шарм. Поэтому одежда от Yulduz Collection идеально подходит как для особых случаев, так и для повседневной жизни. Каждое изделие проходит ручную проверку качества и доставляется в идеальном состоянии. Для нас каждая коллекция — это вдохновение, обновление и выражение стиля.",

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
        "Yulduz Collection is more than just a clothing brand — it’s a celebration of every woman’s unique style. Each piece is crafted with love, attention to detail, and a desire to highlight femininity and confidence. Our mission is to give women not only a stylish appearance but also a sense of inner harmony, beauty, and self-assurance. Every collection combines refined design, premium fabrics, and carefully selected colors. Inspired by modern fashion trends, we preserve an elegant Eastern touch and timeless sophistication. That’s why Yulduz Collection outfits are perfect for both special occasions and everyday wear. Each item is checked by hand to ensure the highest quality and arrives in perfect condition. Every new collection represents inspiration, renewal, and confidence.",

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
        "Yulduz Collection — bu shunchaki kiyim brendi emas, bu har bir ayolning o‘ziga xos uslubini ifodalash imkonidir. Bizning har bir libosimiz — nafislik, qulaylik va ishonch uyg‘unligidan tug‘ilgan asar. Brendning asosiy maqsadi — ayollarga nafaqat zamonaviy ko‘rinish, balki o‘ziga ishonch, ayollik va go‘zallik tuyg‘usini ulashishdir. Har bir modelimizda nozik detallar, sifatli matolar va did bilan tanlangan ranglar uyg‘unlashgan. Biz kolleksiyalarni yaratishda zamonaviy moda yo‘nalishlarini kuzatamiz, lekin ularni sharqona nafislik bilan uyg‘unlashtiramiz. Shuning uchun Yulduz Collection kiyimlari — har qanday tadbir, ish muhiti yoki kundalik hayot uchun mos tanlovdir. Har bir buyum qo‘lda tekshiriladi, detallariga e’tibor bilan ishlov beriladi va sizga yetib borguncha mukammal holatda tayyorlanadi. Mijozlarimiz uchun har bir yangi kolleksiya — bu ilhom, yangilik va sifat kafolatidir.",

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
