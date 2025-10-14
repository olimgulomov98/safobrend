import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Главная", href: "#Navbar" },
  { label: "О нас", href: "#AboutUs" },
  { label: "Продукция", href: "#Products" },
  { label: "Колл-центр", href: "#ContactForm" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="Navbar" className="fixed inset-x-0 top-0 z-50 shadow-sm">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[8vh] sm:px-6 lg:px-8"
        style={{ backgroundColor: "hsl(var(--brand-brown))" }}
      >
        <a
          href="#Navbar"
          className="text-white text-lg font-bold tracking-wide"
        >
          HUSAN SHER
        </a>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <select
            aria-label="Language"
            className="rounded-md border border-white/20 bg-transparent px-2 py-1 text-xs text-white/90 outline-none focus:ring-1"
          >
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">English</option>
            <option value="uz">O'zbek</option>
          </select>
        </div>

        <button
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
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed left-0 right-0 top-16 z-40 bg-white px-4 py-6 shadow-lg transition-transform",
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
      </div>
    </header>
  );
}
