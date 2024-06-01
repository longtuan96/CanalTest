import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../HomePage/MovieCard/MovieCard";
import { useSearchMovie } from "../../services/movie/movie";
import { Loader } from "../../components/common/Loader/Loader";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const resultSearchMovie = useSearchMovie({ query });

  if (resultSearchMovie.isPending) {
    return (
      <div className=" flex-center h-screen w-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {resultSearchMovie.data ? (
        <div className=" h-screen w-screen px-10 pt-24">
          <section>
            <h1 className="fontsize-title">Search Result: {query}</h1>
            <div className="mt-10 grid grid-cols-4 gap-20">
              {resultSearchMovie.data.results.map((item) => (
                <MovieCard key={item.id} data={item} />
              ))}
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
