import { useState } from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import HorizontalList from "../../components/common/HorizontalList/HorizontalList";
import Modal from "../../components/common/Modal/Modal";
import { useGetMovieList } from "../../services/movie/movie";
import { LIST_TYPE } from "../../constants/keys";
import { ModalType } from "../../services/video/video.type";
import { MovieCard } from "../../components/MovieCard/MovieCard";

const { MOVIE_POPULAR, MOVIE_NOW_PLAYING, MOVIE_TOP_RATED, MOVIE_UPCOMING } =
  LIST_TYPE;

const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [selectedMovieId, setSelectedMovieId] = useState<number | undefined>(
    undefined,
  );
  const [modalVariation, setModalVariation] = useState<ModalType>("movie");
  const resultPopular = useGetMovieList({ type: MOVIE_POPULAR });
  const resultNowPlaying = useGetMovieList({ type: MOVIE_NOW_PLAYING });
  const resultTopRated = useGetMovieList({ type: MOVIE_TOP_RATED });
  const resultUpComing = useGetMovieList({ type: MOVIE_UPCOMING });

  const handleShowVideo = (movieId: number, variation: ModalType) => {
    setOpenModal(true);
    setSelectedMovieId(movieId);
    setModalVariation(variation);
  };

  return (
    <div className="no-scrollbar flex h-full w-full flex-col gap-5">
      <section className=" h-full w-full">
        {resultPopular.isSuccess && (
          <MovieCarousel
            data={resultPopular.data.results}
            handleShowVideo={handleShowVideo}
          />
        )}
      </section>
      <section>
        <HorizontalList title="Now in Theater">
          {resultNowPlaying.data?.results.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
      </section>
      <section>
        <HorizontalList title="Top Rated">
          {resultTopRated.data?.results.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
      </section>
      <section>
        <HorizontalList title="Release Soon">
          {resultUpComing.data?.results.map((item) => {
            return <MovieCard data={item} key={item.id} />;
          })}
        </HorizontalList>
      </section>
      {openModal && selectedMovieId && modalVariation && (
        <Modal
          variation={modalVariation}
          movieId={selectedMovieId}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
