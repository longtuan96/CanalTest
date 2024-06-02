import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, MouseEvent } from "react";
import getVideoId from "../../../utils/getVideoId";
import { useGetVideo } from "../../../services/video/video";
import { ModalType } from "../../../services/video/video.type";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Loader } from "../Loader/Loader";

type ModalProps = {
  movieId: number;
  onClose: (e?: MouseEvent) => void;
  variation: ModalType;
};

export default function Modal({
  onClose,
  movieId,
  variation = "movie",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [{ onClose }]);

  const resultVideo = useGetVideo({ movieId });

  const renderContent = () => {
    if (variation === "trailer" && movieId) {
      return resultVideo.isPending && resultVideo.data === undefined ? (
        <div
          style={{ width: "80vw", height: "80vh" }}
          className="flex-center bg-black"
        >
          <Loader />
        </div>
      ) : (
        <iframe
          style={{ width: "80vw", height: "80vh" }}
          src={`https://www.youtube-nocookie.com/embed/${getVideoId(resultVideo.data?.results)}?autoplay=1&start=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media;"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      );
    } else {
      return (
        <div
          className="  flex-center"
          style={{ width: "80vw", height: "80vh" }}
        >
          <div className="flex flex-col items-center">
            <ExclamationTriangleIcon className=" size-16 text-red-700" />
            <span className="capitalize">
              this area is unavailable please return!
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-30 flex w-screen flex-col items-center overflow-y-auto px-4 py-8"
      role="dialog"
      aria-label="video-modal"
      aria-modal="true"
    >
      <div
        className="fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-80"
        onClick={onClose}
        role="none"
      ></div>
      <div
        className="op relative z-20 flex w-fit flex-col rounded-2xl bg-zinc-900 shadow-lg transition-all"
        role="none"
      >
        <div className="sticky -top-8 z-20 flex items-center justify-center rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 m-3.5 h-8 w-8 rounded-full bg-black bg-opacity-25 p-1 shadow-md backdrop-blur transition-all hover:bg-opacity-0"
          >
            <XMarkIcon title="exit popup button" />
          </button>
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}
