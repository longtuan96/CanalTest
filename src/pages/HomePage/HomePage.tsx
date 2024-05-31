import { useEffect, useState } from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { moviePopularMockData } from "../../services/movie/movie.mock";
import { MovieItemResponse } from "../../services/movie/movie.type";
import HorizontalList from "../../components/common/HorizontalList/HorizontalList";
import { MovieCard } from "./MovieCard/MovieCard";
import Modal from "../../components/common/Modal/Modal";
import { useGetMovieList } from "../../services/movie/movie";
import { LIST_TYPE } from "../../constants/keys";
import { ModalType } from "../../services/video/video.type";

const { MOVIE_POPULAR, MOVIE_NOW_PLAYING, MOVIE_TOP_RATED, MOVIE_UPCOMING } =
  LIST_TYPE;

const HomePage = () => {
  const [carouselData, setCarouselData] = useState<MovieItemResponse[]>([]);
  const [movieNowPlayingData, setMovieNowPlayingData] = useState<
    MovieItemResponse[]
  >([]);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [seclectedMovieId, setSeclectedMovieId] = useState<number | undefined>(
    undefined,
  );
  const [modalVariation, setModalVariation] = useState<ModalType>("movie");
  const resultPopular = useGetMovieList({ type: MOVIE_POPULAR });
  const resultNowPlaying = useGetMovieList({ type: MOVIE_NOW_PLAYING });
  const resultTopRated = useGetMovieList({ type: MOVIE_TOP_RATED });
  const resultUpComing = useGetMovieList({ type: MOVIE_UPCOMING });

  const handleShowVideo = (movieId: number, variation: ModalType) => {
    setOpenModal(true);
    setSeclectedMovieId(movieId);
    setModalVariation(variation);
  };

  return (
    <div className="">
      <div className=" h-screen w-screen">
        {resultPopular.isSuccess && (
          <MovieCarousel
            data={resultPopular.data.results}
            handleShowVideo={handleShowVideo}
          />
        )}
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
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

export default HomePage;
