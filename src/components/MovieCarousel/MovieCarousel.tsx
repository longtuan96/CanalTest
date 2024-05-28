import { useRef, useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  StarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { MovieItemResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";
import { Button } from "../common/Button/Button";

type MovieCarouselProps = {
  data: MovieItemResponse[];
};

export default function MovieCarousel({ data }: MovieCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isMouseIn, setIsMouseIn] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);
  const handleMouse = (isIn: boolean) => {
    setIsMouseIn(true);
  };

  let previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div
      className="relative h-full overflow-hidden"
      onMouseOver={() => handleMouse(true)}
      onMouseOut={() => handleMouse(false)}
    >
      <div
        className="relative flex h-full w-full transition duration-700 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          zIndex: 2,
        }}
      >
        {data.map((s, idx) => {
          return (
            <div className="relative min-w-full" key={idx}>
              <img
                className="h-full w-full object-fill"
                src={createImgUrl("movie", s.backdrop_path)}
              />
              <div
                className={clsx(
                  isMouseIn ? "carousel-mask-hover visible" : "invisible",
                  "carousel-mask absolute left-0 top-0   h-full w-full bg-opacity-50",
                )}
              >
                <div className=" absolute left-44 top-60 flex w-2/5 flex-col gap-y-5 ">
                  <span className="title">{s.title}</span>
                  <p className=" w-4/5">{s.overview}</p>
                  <div className="flex gap-28">
                    <span className=" inline-flex gap-4">
                      <StarIcon className="size-5 text-yellow-400" />{" "}
                      {`${s.vote_average.toFixed(2)}/10 (${s.vote_count} votes)`}
                    </span>
                    <span className=" inline-flex gap-4">
                      <ArrowTrendingUpIcon className="size-5 text-red-700" />
                      {`${s.popularity.toFixed(0)} Trending`}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className=" size-1/4"
                      onClick={() => {
                        console.log("test");
                      }}
                    >
                      Details
                    </Button>
                    <Button className=" size-1/4">Play Trailer</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute top-0  flex h-full w-full items-center justify-between px-10 text-3xl text-white">
        <button className="carousel-button" onClick={previousSlide}>
          <ChevronLeftIcon className="size-10" />
        </button>
        <button className="carousel-button" onClick={nextSlide}>
          <ChevronRightIcon className="size-10" />
        </button>
      </div>

      <div
        ref={divRef}
        className="absolute bottom-20 flex w-full items-end justify-start gap-5 py-4 transition duration-500 ease-in-out"
        style={{
          transform: `translateX(${47 - current * (100 / 13)}%)`,
          zIndex: 3,
        }}
      >
        {data.map((s, i) => {
          return (
            <img
              onClick={() => {
                setCurrent(i);
              }}
              key={"pic" + i}
              className={`h-64 w-64 cursor-pointer transition  duration-500 ease-in-out ${i === current && "scale-150"}`}
              src={createImgUrl("movie", s.poster_path)}
            />
          );
        })}
      </div>
    </div>
  );
}
