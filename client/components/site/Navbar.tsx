import { useState } from "react";
import { cn } from "@/lib/utils";

// Smooth scroll function with navbar offset
const smoothScrollTo = (elementId: string) => {
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

const navItems = [
  { label: "Главная", href: "#Navbar" },
  { label: "О нас", href: "#AboutUs" },
  { label: "Продукция", href: "#Products" },
  { label: "Колл-центр", href: "#ContactForm" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="Navbar" className="fixed w-full z-50">
      <nav
        className="h-[95px] w-full flex items-center justify-between px-[100px]"
        style={{ backgroundColor: "hsl(var(--brand-brown))" }}
      >
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
              className="rounded-md border border-white/70 bg-transparent px-2 py-1 text-xs text-white/90 outline-none focus:ring-1"
            >
              <option value="ru">🇷🇺 Русский</option>
              <option value="en">🇺🇸 English</option>
              <option value="uz">🇺🇿 O'zbek</option>
            </select>
          </div>

          {/* <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all",
                open && "translate-y-1 rotate-45",
              )}
            ></span>
            <span
              className={cn(
                "mt-1 block h-0.5 w-5 bg-white transition-opacity",
                open && "opacity-0",
              )}
            ></span>
            <span
              className={cn(
                "mt-1 block h-0.5 w-5 bg-white transition-all",
                open && "-translate-y-1 -rotate-45",
              )}
            ></span>
          </button> */}
        </div>
      </nav>

      {/* Mobile menu */}
      {/* <div
        className={cn(
          "md:hidden fixed left-0 right-0 z-40 bg-white px-4 py-6 shadow-lg transition-transform",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-800 text-base"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <select
              aria-label="Language"
              className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
            >
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div> */}
    </header>
  );
}
