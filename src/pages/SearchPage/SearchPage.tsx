import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "../../services/movie/movie";
import { Loader } from "../../components/common/Loader/Loader";
import { MovieCard } from "../../components/MovieCard/MovieCard";

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
            <div className="mt-10 grid grid-cols-2 gap-20 sm:grid-cols-3 lg:grid-cols-4">
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
