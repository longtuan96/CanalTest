import { useState } from "react";
import { useParams } from "react-router-dom";
import createImgUrl from "../../utils/createImgUrl";
import HorizontalList from "../../components/common/HorizontalList/HorizontalList";
import { PeopleCard } from "./PeopleCard/PeopleCard";
import { Loader } from "../../components/common/Loader/Loader";
import { useGetMovieDetail } from "../../services/movie/movie";
import { useGetCredit } from "../../services/credit/credit";
import { BUTTON } from "../../constants/names";
import { Button } from "../../components/common/Button/Button";
import moment from "moment";
import {
  ArrowTrendingUpIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ModalType } from "../../services/video/video.type";
import Modal from "../../components/common/Modal/Modal";
export const DetailPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [seclectedMovieId, setSeclectedMovieId] = useState<number | undefined>(
    undefined,
  );
  const [modalVariation, setModalVariation] = useState<ModalType>("movie");
  const { movieId } = useParams();

  const resultMovieDetail = useGetMovieDetail({ movieId });
  const resultCredit = useGetCredit({ movieId });
  if (resultMovieDetail.isPending && resultCredit.isPending) {
    return (
      <div className="flex-center h-screen w-screen bg-black opacity-80">
        <Loader />
      </div>
    );
  }

  const handleShowVideo = (
    movieId: number | undefined,
    variation: ModalType,
  ) => {
    setOpenModal(true);
    setSeclectedMovieId(movieId);
    setModalVariation(variation);
  };

  return (
    <div
      className="relative flex h-screen w-screen justify-center overflow-scroll bg-cover"
      style={{
        backgroundImage: `url(${createImgUrl("movie", resultMovieDetail.data?.backdrop_path)})`,
      }}
    >
      <div className=" absolute left-0 top-0 z-10  grid h-full w-full grid-cols-10 gap-4  bg-black/80 px-24 py-32">
        <section id="poster" className="col-span-3">
          <img
            className="w-full"
            alt={resultMovieDetail.data?.title}
            src={createImgUrl("movie", resultMovieDetail.data?.poster_path)}
            style={{ zIndex: "auto", position: "relative" }}
          />
        </section>
        <section id="info" className="col-span-7">
          <div className="px-12 pb-12">
            <strong className="fontsize-title">
              {resultMovieDetail.data?.title}
            </strong>
            <div className=" mt-8 flex gap-3 text-sm text-zinc-300">
              {resultMovieDetail.data?.genres.map((item) => (
                <span key={item.id} className="">
                  {item.name}
                </span>
              ))}
              <span className="rounded border border-white border-opacity-80 px-1 py-0.5 text-xs">
                {moment(resultMovieDetail.data?.release_date).format("YYYY")}
              </span>
              <span>
                {`${resultMovieDetail.data?.runtime && resultMovieDetail.data?.runtime > 60 && moment.duration(resultMovieDetail.data?.runtime, "minutes").hours() + "h"}${moment.duration(resultMovieDetail.data?.runtime, "minutes").minutes() + "m"}`}
              </span>
            </div>

            <div className="mt-3 flex gap-14">
              <span className=" inline-flex gap-4">
                <StarIcon className="size-5 text-yellow-400" />{" "}
                {`${resultMovieDetail.data?.vote_average.toFixed(2)}/10 (${resultMovieDetail.data?.vote_count} votes)`}
              </span>
              <span className=" inline-flex gap-4">
                <ArrowTrendingUpIcon className="size-5 text-red-700" />
                {`${resultMovieDetail.data?.popularity.toFixed(0)} Trending`}
              </span>
            </div>
            <div className=" mt-3 flex w-80 justify-between gap-4">
              <Button
                onClick={() =>
                  handleShowVideo(resultMovieDetail.data?.id, "movie")
                }
                className="flex  items-center justify-center gap-2"
              >
                {BUTTON.WATCH_NOW}
                <PlayCircleIcon className="size-5 text-white" />
              </Button>
              <Button
                className="flex items-center justify-center gap-2"
                onClick={() =>
                  handleShowVideo(resultMovieDetail.data?.id, "trailer")
                }
              >
                {BUTTON.PLAY_TRAILER}
              </Button>
            </div>
            <div
              className=" mt-3 max-h-96 min-h-32"
              style={{ maxWidth: "800px" }}
            >
              <p className=" fontsize-text text-justify text-zinc-300">
                {resultMovieDetail.data?.overview}
              </p>
            </div>
          </div>
          <div>
            <HorizontalList title="The Cast">
              {resultCredit.data?.cast.map((item) => (
                <PeopleCard key={item.id} data={item} />
              ))}
            </HorizontalList>
          </div>
        </section>
      </div>
      {openModal && seclectedMovieId && modalVariation && (
        <Modal
          variation={modalVariation}
          movieId={seclectedMovieId}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};
