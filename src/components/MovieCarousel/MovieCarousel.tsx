import { useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  PlayCircleIcon,
  FireIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MovieItemResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";
import { Button } from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import "./MovieCarousel.css";
import { ModalType } from "../../services/video/video.type";
import { BUTTON } from "../../constants/names";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

type MovieCarouselProps = {
  data: MovieItemResponse[];
  handleShowVideo: (movieId: number, variation: ModalType) => void;
};

const widthImgItem = 6;

export default function MovieCarousel({
  data,
  handleShowVideo,
}: MovieCarouselProps) {
  const [current, setCurrent] = useState(0);
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();
  const previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const handleToDetail = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="relative flex h-full w-full transition duration-700 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          zIndex: 2,
        }}
      >
        {data.map((s, idx) => {
          return !isMobile ? (
            <div className="relative min-w-full" key={idx}>
              <img
                className="object-fit h-full w-full"
                alt={s.title}
                src={createImgUrl("movie", s.backdrop_path)}
              />
              <div className="carousel-mask carousel-mask-hover absolute left-0 top-0 h-full w-full bg-opacity-50">
                <div
                  className="absolute left-0 top-0 flex w-1/2 flex-col gap-y-5 pl-24 pt-16 lg:max-h-[60%] lg:pl-16 xl:max-h-[80%] xl:pt-32"
                  // style={{ maxHeight: "60%" }}
                >
                  <h1 className="fontsize-title">{s.title}</h1>
                  <p className=" fontsize-text ellipsis-line max-h-fit w-4/5 text-justify xl:text-xl">
                    {s.overview}
                  </p>
                  <div className="flex" style={{ gap: "8%" }}>
                    <span className=" inline-flex gap-4">
                      <SparklesIcon className="size-5 text-yellow-400" />
                      {`${s.vote_average.toFixed(2)}/10 (${s.vote_count} votes)`}
                    </span>
                    <span className=" inline-flex gap-4">
                      <FireIcon className="size-5 text-red-700" />
                      {`${s.popularity.toFixed(0)} Trending`}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="flex size-1/4 items-center justify-center gap-2"
                      onClick={() => handleShowVideo(s.id, "movie")}
                    >
                      {BUTTON.WATCH_NOW}
                      <PlayCircleIcon className="size-5 text-white" />
                    </Button>
                    <Button
                      className="size-1/4"
                      onClick={() => handleShowVideo(s.id, "trailer")}
                    >
                      {BUTTON.PLAY_TRAILER}
                    </Button>
                    <Button className="p-0" background={false}>
                      <ExclamationCircleIcon
                        aria-label="detail"
                        className=" size-6 text-white"
                        onClick={() => handleToDetail(s.id)}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative min-w-full" key={idx}>
              <img
                className="object-fit w-screen"
                alt={s.title}
                src={createImgUrl("movie", s.poster_path)}
              />
              <div className="poster-mask flex  items-end justify-center ">
                <div className="flex w-full flex-col items-center">
                  <h1 className="w-4/5 text-center text-6xl">{s.title}</h1>
                  <div className="grid w-full grid-cols-3 py-5">
                    <button onClick={() => handleShowVideo(s.id, "trailer")}>
                      {BUTTON.PLAY_TRAILER}
                    </button>
                    <button
                      className="flex-center flex-col"
                      onClick={() => handleShowVideo(s.id, "movie")}
                    >
                      {BUTTON.WATCH_NOW}
                      <PlayCircleIcon className="size-5 text-white" />
                    </button>
                    <button className="flex-center flex-col">
                      <ExclamationCircleIcon
                        className=" size-6 text-white"
                        onClick={() => handleToDetail(s.id)}
                      />
                      Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute  top-0 flex h-full w-full items-center justify-between text-3xl text-white lg:px-5">
        <button className="carousel-button " onClick={previousSlide}>
          <ChevronLeftIcon className="size-10" />
        </button>
        <button className="carousel-button" onClick={nextSlide}>
          <ChevronRightIcon className="size-10" />
        </button>
      </div>

      <div
        id="carousel-pagination"
        className="absolute bottom-0 hidden w-full items-end justify-start py-4 transition duration-500 ease-in-out md:flex lg:bottom-20 "
        style={{
          transform: `translateX(${50 - widthImgItem / 2 - current * (6 + 0.5)}%)`,
          zIndex: 3,
          gap: `0.5%`,
        }}
      >
        {data.map((s, i) => {
          return (
            <img
              onClick={() => {
                setCurrent(i);
              }}
              key={"pic" + i}
              className={`cursor-pointer transition  duration-500 ease-in-out ${i === current && "scale-150"}`}
              style={{ width: `${widthImgItem}%` }}
              src={createImgUrl("movie", s.poster_path)}
            />
          );
        })}
      </div>
    </div>
  );
}
