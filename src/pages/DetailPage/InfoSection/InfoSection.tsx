import moment from "moment";
import { MovieDetailResponse } from "../../../services/movie/movie.type";
import createImgUrl from "../../../utils/createImgUrl";
import {
  ArrowTrendingUpIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../../../components/common/Button/Button";
import { Loader } from "../../../components/common/Loader/Loader";
import { BUTTON } from "../../../constants/names";

type InfoSectionProp = {
  data?: MovieDetailResponse;
};

export const InfoSection = ({ data }: InfoSectionProp) => {
  if (data) {
    return (
      <section className="container relative col-span-5 grid w-full grid-cols-2 gap-4 ">
        <div id="poster" className="">
          <img
            className="w-full"
            alt={data.title}
            src={createImgUrl("movie", data.poster_path)}
            style={{ zIndex: "auto", position: "relative" }}
          />
        </div>
        <div id="info" className="">
          <strong className="fontsize-title">{data.title}</strong>
          <p className="fontsize-subtitle mt-1">
            Release Date: {moment(data.release_date).format("DD/MM/YYYY")}
          </p>
          <div className=" mt-3 text-sm text-zinc-300">
            {data.genres.map((item) => (
              <span key={item.id} className="mr-2 ">
                {item.name}
              </span>
            ))}
            <span>
              {`${data.runtime > 60 && moment.duration(data.runtime, "minutes").hours() + "h"}${moment.duration(data.runtime, "minutes").minutes() + "m"}`}
            </span>
          </div>
          <div className="mt-3">
            <b className="fontsize-subtitle">Overview</b>
            <p className=" fontsize-text text-zinc-300">{data.overview}</p>
          </div>
          <div className="mt-3 flex gap-14">
            <span className=" inline-flex gap-4">
              <StarIcon className="size-5 text-yellow-400" />{" "}
              {`${data.vote_average.toFixed(2)}/10 (${data.vote_count} votes)`}
            </span>
            <span className=" inline-flex gap-4">
              <ArrowTrendingUpIcon className="size-5 text-red-700" />
              {`${data.popularity.toFixed(0)} Trending`}
            </span>
          </div>
          <div className=" mt-3 flex w-80 justify-between">
            <Button className="flex  items-center justify-center gap-2">
              {BUTTON.WATCH_NOW}{" "}
              <PlayCircleIcon className="size-5 text-white" />
            </Button>
            <Button
              variation="secondary"
              className="flex items-center justify-center gap-2"
            >
              {BUTTON.PLAY_TRAILER}
            </Button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="flex-center h-full w-full">
        <Loader />
      </div>
    );
  }
};
