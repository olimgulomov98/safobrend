export function Footer() {
  return (
    <footer id="ContactForm" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">Колл-центр</h3>
            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <p>
                <span className="font-medium">Генеральный директор:</span>{" "}
                HUSENOV SHERMAT
              </p>
              <p>
                <span className="font-medium">Номер телефона:</span>{" "}
                <a className="underline" href="tel:+998991244558">
                  +998 (99) 124-45-58
                </a>
              </p>
              <p>
                <span className="font-medium">Электронная почта:</span>{" "}
                <a
                  className="underline"
                  href="mailto:yuldashevjoxa007@gmail.com"
                >
                  yuldashevjoxa007@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3">
              <a
                href="https://t.me/yuldashev6106"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                TELEGRAM
              </a>
              <a
                href="https://www.instagram.com/husenov_shermat"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                INSTAGRAM
              </a>
              <a
                href="https://uzum.uz/uz/shop/husansher"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md"
              >
                YANDEX MARKET
              </a>
            </div>
          </div>

          <div className="flex items-start md:items-center">
            <div className="w-full">
              <img
                src="https://husan-sher.vercel.app/assets/logo-BpRIo9P9.png"
                alt="HUSAN SHER logo"
                className="h-28 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Адрес</h4>
            <div className="overflow-hidden rounded-xl shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Bukhara%20region&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t pt-6 text-xs text-gray-500">
          <a
            href="#Navbar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm"
          >
            ↑
          </a>
          <p>© {new Date().getFullYear()} HUSAN SHER</p>
        </div>
      </div>
    </footer>
  );
}
