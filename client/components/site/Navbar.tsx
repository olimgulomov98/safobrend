import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

// Smooth scroll function with navbar offset
const smoothScrollTo = (elementId: string) => {
  if (elementId === "#Navbar") {
    // For home link, scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const element = document.querySelector(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for navbar

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("home"), href: "#Navbar" },
    { label: t("about"), href: "#AboutUs" },
    { label: t("products"), href: "#Products" },
    { label: t("contact"), href: "#ContactForm" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      id="Navbar"
      className="fixed w-full z-50"
      style={{ backgroundColor: "hsl(var(--brand-brown))" }}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex h-[95px] w-full items-center justify-between px-[100px] max-w-[1350px] mx-auto">
        <a
          href="#Navbar"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#Navbar");
          }}
          className="text-white text-[24px] font-bold tracking-wide cursor-pointer"
        >
          YULDUZ COLLECTION
        </a>

        <div className="flex items-center gap-10">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(item.href);
                }}
                className="text-white font-semiBold hover:text-[#C1A433] transition-colors text-[16px] cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              aria-label="Language"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="rounded-md border border-white/70 bg-transparent px-2 py-1 text-xs text-white/90 outline-none focus:ring-1"
            >
              <option value="ru">🇷🇺 {t("russian")}</option>
              <option value="en">🇺🇸 {t("english")}</option>
              <option value="uz">🇺🇿 {t("uzbek")}</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden h-[95px] w-full flex items-center justify-between px-4">
        {/* Hamburger Menu */}
        <button
          className="flex flex-col gap-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </button>

        {/* Logo */}
        <a
          href="#Navbar"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#Navbar");
          }}
          className="text-white text-[20px] font-bold tracking-wide cursor-pointer"
        >
          YULDUZ COLLECTION
        </a>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-all duration-300",
          open ? "visible" : "invisible",
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black transition-opacity duration-300",
            open ? "opacity-50" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);

                  smoothScrollTo(item.href);
                }}
                className="block py-4 text-lg font-medium text-gray-800 hover:text-gray-600 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="px-6 py-4 mt-auto">
            <select
              aria-label="Language"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ru">🇷🇺 {t("russian")}</option>
              <option value="en">🇺🇸 {t("english")}</option>
              <option value="uz">🇺🇿 {t("uzbek")}</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
