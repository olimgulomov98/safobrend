import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="ContactForm" className="bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col md:justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold">{t("callCenter")}</h3>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">{t("generalDirector")}:</span>{" "}
                YULDUZXON NABIJANOVA
              </p>
              <p>
                <span className="font-medium">{t("phoneNumber")}:</span>{" "}
                <a className="underline" href="tel:+998941560330">
                  +998 (94) 156-03-30
                </a>
              </p>
              <p>
                <span className="font-medium">{t("email")}:</span>{" "}
                <a
                  className="underline"
                  href="mailto:yulduzxonnabijanova1991@gmail.com"
                >
                  yulduzxonnabijanova1991@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3">
              <a
                href="https://t.me/Yulduz_Collectionn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                TELEGRAM
              </a>
              <a
                href="https://www.instagram.com/yulduz_collection_"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                INSTAGRAM
              </a>
              <a
                // href="https://uzum.uz/uz/shop/husansher"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                YANDEX MARKET
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full">
              <img
                src="/yulduz-logo.jpg"
                alt="HUSAN SHER logo"
                className="h-[250px] w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("address")}</h4>
            <div className="overflow-hidden rounded-xl shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Bukhara%20region&output=embed"
                width="400"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="#Navbar"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="absolute right-10 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
