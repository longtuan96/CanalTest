import { Link } from "react-router-dom";
import { MovieItemResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";

type CardProps = {
  data: MovieItemResponse;
};

export const MovieCard = ({ data }: CardProps) => {
  return (
    <Link to={`/movie/${data.id}`} key={data.id} title={data.title}>
      <img
        className="relative min-w-64"
        src={createImgUrl("movie", data.poster_path)}
        alt={data.title}
        key={data.id}
      />
    </Link>
  );
};
