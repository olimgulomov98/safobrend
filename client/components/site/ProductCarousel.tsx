import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type Item = {
  img: string;
};

const items: Item[] = [
  { img: "/product1.jpg" },
  { img: "/product2.jpg" },
  { img: "/product3.jpg" },
  { img: "/product4.jpg" },
  { img: "/product5.jpg" },
  { img: "/product6.jpg" },
  { img: "/product7.jpg" },
  { img: "/product8.jpg" },
  { img: "/product9.jpg" },
  { img: "/product10.jpg" },
  { img: "/product11.jpg" },
  { img: "/product12.jpg" },
  { img: "/product13.jpg" },
  { img: "/product14.jpg" },
  { img: "/product15.jpg" },
  { img: "/product16.jpg" },
  { img: "/product17.jpg" },
  { img: "/product18.jpg" },
  { img: "/product19.jpg" },
  { img: "/product20.jpg" },
  { img: "/product21.jpg" },
  { img: "/product22.jpg" },
  { img: "/product23.jpg" },
  { img: "/product24.jpg" },
  { img: "/product25.jpg" },
  { img: "/product26.jpg" },
  { img: "/product27.jpg" },
  { img: "/product28.jpg" },
  { img: "/product29.jpg" },
  { img: "/product30.jpg" },
  { img: "/product31.jpg" },
  { img: "/product32.jpg" },
  { img: "/product33.jpg" },
  { img: "/product34.jpg" },
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
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
              >
                <div className="rounded-[32px] bg-[#d7d8da] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] mx-4 p-5">
                  <img
                    src={item.img}
                    alt="products"
                    className="w-full h-[450px] rounded-[24px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
