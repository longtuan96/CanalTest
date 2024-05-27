import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

type CarouselProps = {
  slides: string[];
};

export default function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative h-full">
      <div
        className={`flex transition ease-out duration-40 w-full h-full`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} className="min-w-full" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button className="carousel-button" onClick={previousSlide}>
          <ChevronLeftIcon className="size-10" />
        </button>
        <button className="carousel-button" onClick={nextSlide}>
          <ChevronRightIcon className="size-10" />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
