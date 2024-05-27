import MoviePlaceHolder from "src/assets/landscape-placeholder-svgrepo-com.svg";
import PeoplePlaceHolder from "src/assets/person-svgrepo-com.svg";

export default function createImgUrl(
  type: "people" | "movie",
  path?: string | null,
  size = "original",
) {
  if (!path) return type === "people" ? PeoplePlaceHolder : MoviePlaceHolder;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
