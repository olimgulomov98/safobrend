import { ProductCarousel } from "@/components/site/ProductCarousel";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section id="HeroSection" className="relative">
        <div className="absolute inset-0">
          <img
            src="https://husan-sher.vercel.app/assets/bg-image-CG-JaHav.png"
            alt="Hero background"
            className="h-[90vh] w-full object-cover"
          />
        </div>
        <div className="relative z-10 h-[90vh] w-full bg-black/10" />
      </section>

      {/* About Us */}
      <section id="AboutUs" className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="mb-6 text-6xl font-extrabold uppercase tracking-tight text-black/5 sm:text-7xl lg:text-8xl">
              О нас
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Слияние моды и наследия
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              HUSAN SHER — место, где ремесло и мастерство соединяются. Наша
              мастерская расположена в Бухарской области, Пешкунском районе,
              махалле Пешку и уже более 30 лет предлагает клиентам качественные
              шубы и тюбетейки. Для нас каракульская шкура — это не просто
              сырьё, а бесценный дар, который можно превратить в произведение
              искусства. Каждое изделие создаётся вручную, с умением и любовью.
              В результате рождаются вещи, которые не только тёплые и удобные,
              но и воплощают в себе национальные традиции и утончённость. За
              долгие годы наше маст��рство заслужило доверие и благодарность
              множества клиентов. Каждый заказ для нас — это новая
              ответственность, новые возможности и радость видеть довольного
              клиента.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#Products"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                style={{ backgroundColor: "hsl(var(--brand-accent))" }}
              >
                Продукция
              </a>
              <a
                href="#ContactForm"
                className="inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm font-semibold text-gray-900"
                style={{ borderColor: "hsl(var(--brand-accent))" }}
              >
                Колл-центр
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://husan-sher.vercel.app/assets/2-BALklqpx.jpg"
                alt="About visual"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="Products" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Продукция
            </h3>
          </div>
          <ProductCarousel />
        </div>
      </section>
    </main>
  );
}
