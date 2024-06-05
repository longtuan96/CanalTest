import { Link } from "react-router-dom";
import { MovieItemResponse } from "../../services/movie/movie.type";
import createImgUrl from "../../utils/createImgUrl";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

type CardProps = {
  data: MovieItemResponse;
};

export const MovieCard = ({ data }: CardProps) => {
  const isMobile = useCheckMobileScreen();
  return (
    <Link to={`/movie/${data.id}`} key={data.id} title={data.title}>
      <img
        className="relative w-40"
        style={{ minWidth: !isMobile ? "10vw" : "30vw" }}
        src={createImgUrl("movie", data.poster_path)}
        alt={data.title}
        key={data.id}
      />
    </Link>
  );
};
