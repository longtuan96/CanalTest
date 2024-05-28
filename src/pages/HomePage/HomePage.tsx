import { useEffect, useState } from "react";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import { moviePopularMockData } from "../../services/movie/movie.mock";
import { MovieItemResponse } from "../../services/movie/movie.type";
import HorizontalList from "../../components/common/HorizontalList/HorizontalList";
import { Card } from "../../components/common/Card/Card";

const HomePage = () => {
  const [carouselData, setCarouselData] = useState<MovieItemResponse[]>([]);
  const [movieNowPlayingData, setMovieNowPlayingData] = useState<
    MovieItemResponse[]
  >([]);

  useEffect(() => {
    const result = moviePopularMockData.results;
    setMovieNowPlayingData(result);
    setCarouselData(result);
  }, []);

  return (
    <div className="">
      <div className=" h-screen w-screen">
        <MovieCarousel data={carouselData} />
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <Card type="movie" data={item} key={item.id} />;
          })}
        </HorizontalList>
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <Card type="movie" data={item} key={item.id} />;
          })}
        </HorizontalList>
      </div>
      <div>
        <HorizontalList title="Now in Theater">
          {movieNowPlayingData.map((item) => {
            return <Card type="movie" data={item} key={item.id} />;
          })}
        </HorizontalList>
      </div>
    </div>
  );
};

export default HomePage;
