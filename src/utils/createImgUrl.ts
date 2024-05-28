import MoviePlaceHolder from "../assets/landscape-placeholder-svgrepo-com.svg";
import PeoplePlaceHolder from "../assets/person-svgrepo-com.svg";

export default function createImgUrl(
  type: "people" | "movie",
  path?: string | null,
  size = "original",
) {
  if (!path) return type === "people" ? PeoplePlaceHolder : MoviePlaceHolder;
  return `${import.meta.env.VITE_THEMOVIEDB_IMG_URL}/${size}${path}`;
}
