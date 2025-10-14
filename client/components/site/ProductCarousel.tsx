import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Item = { title: string; price: string; img: string };

const items: Item[] = [
  { title: "KARAKUL TELPAK", price: "$80", img: "https://husan-sher.vercel.app/assets/5-BCcC-Cy4.jpg" },
  { title: "KARAKUL TELPAK", price: "$65", img: "https://husan-sher.vercel.app/assets/6-Dd7AgXd0.jpg" },
  { title: "KARAKUL TELPAK", price: "$65", img: "https://husan-sher.vercel.app/assets/7-DyLgjrKw.jpg" },
  { title: "KARAKUL TELPAK", price: "$75", img: "https://husan-sher.vercel.app/assets/1-DpBa-m8R.jpg" },
  { title: "WOMEN BROWN SHUBA", price: "$425", img: "https://husan-sher.vercel.app/assets/2-BALklqpx.jpg" },
  { title: "WOMEN SHUBA", price: "$350", img: "https://husan-sher.vercel.app/assets/3-DNataPz9.jpg" },
  { title: "WOLF TELPAK", price: "$65", img: "https://husan-sher.vercel.app/assets/4-FtmO15sf.jpg" },
];

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {items.map((item, idx) => (
            <div key={idx} className="min-w-0 shrink-0 grow-0 basis-full px-4 sm:basis-1/2 lg:basis-1/3">
              <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
                <div className="overflow-hidden rounded-xl">
                  <img src={item.img} alt={item.title} className="h-64 w-full object-cover" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-sm text-gray-600">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -top-14 right-0 hidden gap-2 sm:flex">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="pointer-events-auto rounded-full border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm disabled:opacity-40"
          disabled={!canScrollPrev}
        >
          Prev
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="pointer-events-auto rounded-full border bg-white px-3 py-2 text-sm text-gray-700 shadow-sm disabled:opacity-40"
          disabled={!canScrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
