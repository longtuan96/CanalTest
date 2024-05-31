import { useState } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { MovieItemResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";
import { Button } from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import "./MovieCarousel.css";
import { ModalType } from "../../services/video/video.type";
import { BUTTON } from "../../constants/names";

type MovieCarouselProps = {
  data: MovieItemResponse[];
  handleShowVideo: (movieId: number, variation: ModalType) => void;
};

export default function MovieCarousel({
  data,
  handleShowVideo,
}: MovieCarouselProps) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  let previousSlide = () => {
    if (current === 0) setCurrent(data.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === data.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const handleToDetail = (movieId: number) => {
    navigate(`/${movieId}`);
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
          return (
            <div className="relative min-w-full" key={idx}>
              <img
                className="h-full w-full object-fill"
                src={createImgUrl("movie", s.backdrop_path)}
              />
              <div className="carousel-mask carousel-mask-hover absolute left-0 top-0   h-full w-full bg-opacity-50">
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
                      className="flex size-1/4 items-center justify-center gap-2"
                      onClick={() => handleShowVideo(s.id, "movie")}
                    >
                      {BUTTON.WATCH_NOW}{" "}
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
                        className=" size-6 text-white"
                        onClick={() => handleToDetail(s.id)}
                      />
                    </Button>
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