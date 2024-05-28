import createImgUrl from "../../../utils/createImgUrl";
import { MovieItemResponse } from "../../../services/movie/movie.type";
import { Link } from "react-router-dom";

type CardProps = {
  type: "people" | "movie";
  data: MovieItemResponse;
};

export const Card = ({ type, data }: CardProps) => {
  return (
    <Link to={""} key={data.id} title={data.title}>
      <img
        className="relative min-w-64"
        src={createImgUrl(type, data.poster_path)}
        alt={data.title}
        key={data.id}
      />
    </Link>
  );
};
