import { HttpResponse, http } from "msw";
import { movieDetailMockData } from "../services/movie/movie.mock";
import { creditMockData } from "../services/credit/credit.mock";
import { TEST_MOVIE_ID } from "./constants";
import { MovieDetailResponse } from "../services/movie/movie.type";
import { GetCreditResponse } from "../services/credit/credit.type";

const get = (url: string, mockData: MovieDetailResponse | GetCreditResponse) =>
  http.get(url, () => {
    return HttpResponse.json(mockData);
  });

export const apiHandlers = [
  get(
    `${import.meta.env.VITE_THEMOVIEDB_API_URL}movie/${TEST_MOVIE_ID}`,
    movieDetailMockData,
  ),
  get(
    `${import.meta.env.VITE_THEMOVIEDB_API_URL}movie/${TEST_MOVIE_ID}/credits`,
    creditMockData,
  ),
];
