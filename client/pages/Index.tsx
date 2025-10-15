import { useTranslation } from "react-i18next";
import { ProductCarousel } from "@/components/site/ProductCarousel";

export default function Index() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section id="HeroSection" className="relative">
        <div className="inset-0 pt-[80px]">
          <img
            src="/safobrend-logo.png"
            alt="Hero background"
            className="md:h-[90vh] w-full object-cover"
          />
        </div>
      </section>

      {/* About Us */}
      <section id="AboutUs" className="bg-gradient-to-b from-white to-slate-50">
        <div className="flex flex-col items-center py-10">
          <div className="mb-6 text-2xl font-extrabold uppercase text-black">
            {t("aboutTitle")}
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {t("aboutSubtitle")}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 text-center">
            {t("aboutDescription")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#Products"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#Products");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - 95; // 95px offset for navbar
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 cursor-pointer"
              style={{ backgroundColor: "hsl(var(--brand-accent))" }}
            >
              {t("products")}
            </a>
            <a
              href="#ContactForm"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#ContactForm");
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - 95; // 95px offset for navbar
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm font-semibold text-gray-900 cursor-pointer"
              style={{ borderColor: "hsl(var(--brand-accent))" }}
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="Products" className="relative bg-white">
        <ProductCarousel />
      </section>
    </main>
  );
}
