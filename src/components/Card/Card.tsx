import { createSearchParams, Link } from "react-router-dom";
import createImgUrl from "../../utils/createImgUrl";

type CardProps = {
  type: "people" | "movie";
  data: any;
};

export const Card = ({ type, data }: CardProps) => {
  return (
    <Link
      to={{
        pathname: location.pathname,
        search: createSearchParams({
          preview: data.id.toString(),
        }).toString(),
      }}
      key={data.id}
      title={data.title}
    >
      <img
        className="min-w-64 relative"
        src={createImgUrl(data.poster_path)}
        alt={data.title}
        key={data.id}
      />
    </Link>
  );
};
