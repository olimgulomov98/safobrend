import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Item = {
  title: string;
  price: string;
  img: string;
};

const items: Item[] = [
  {
    title: "Cho'pon",
    price: "$65",
    img: "/product1.jpg",
  },
  {
    title: "Julietta",
    price: "$65",
    img: "/product3.jpg",
  },

  {
    title: "Baska",
    price: "$65",
    img: "/product5.jpg",
  },
  {
    title: "Baska",
    price: "$65",
    img: "/product6.jpg",
  },
  {
    title: "Baska",
    price: "$65",
    img: "/product7.jpg",
  },
  {
    title: "Baska",
    price: "$65",
    img: "/product8.jpg",
  },
  {
    title: "Julietta",
    price: "$65",
    img: "/product4.jpg",
  },
  {
    title: "Baska",
    price: "$65",
    img: "/product9.jpg",
  },
  {
    title: "Cho'pon",
    price: "$65",
    img: "/product2.jpg",
  },
  {
    title: "Baska",
    price: "$65",
    img: "/product10.jpg",
  },
];

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

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
    <div className="relative py-20">
      <div className="container mx-auto px-4 relative">
        {/* Prev Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 shadow-md rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition"
        >
          ›
        </button>

        {/* Carousel */}
        <div ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="min-w-0 shrink-0 grow-0 basis-[25%]">
                <div className="rounded-[32px] bg-white overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                  <div className="bg-[#F7F4F1] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[340px] object-fit transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-800 text-base font-medium">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
