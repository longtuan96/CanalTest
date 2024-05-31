import { useQuery } from "@tanstack/react-query";
import validateAndParse from "../../utils/validateAndParse";
import { api } from "../api";
import {
  GetMovieDetailRequest,
  GetMovieListRequestPayload,
  MovieDetailResponse,
  MovieDetailResponseSchema,
  MovieListResponse,
  MovieListResponseSchema,
  searchMovieRequest,
} from "./movie.type";
import { LIST_TYPE, QUERY_KEYS } from "../../constants/keys";
import createQueryParams from "../../utils/createQueryParams";

const { LIST, DETAILS, SEARCH } = QUERY_KEYS;

const getMovieList = async (payload: GetMovieListRequestPayload) => {
  const response = await api.get<MovieListResponse>(`${payload.type}`, {
    params: createQueryParams(),
  });
  return validateAndParse(MovieListResponseSchema, response.data);
};

export const useGetMovieList = (payload: GetMovieListRequestPayload) =>
  useQuery({
    queryKey: [LIST, payload],
    queryFn: () => getMovieList(payload),
  });

const getMovieDetail = async (payload: GetMovieDetailRequest) => {
  const response = await api.get<MovieDetailResponse>(
    `movie/${payload.movieId}`,
    { params: createQueryParams() },
  );
  return validateAndParse(MovieDetailResponseSchema, response.data);
};

export const useGetMovieDetail = (payload: GetMovieDetailRequest) =>
  useQuery({
    queryKey: [DETAILS, payload],
    queryFn: () => getMovieDetail(payload),
  });

const searchMovie = async (payload: searchMovieRequest) => {
  const response = await api.get<MovieListResponse>(
    `${LIST_TYPE.SEARCH_MOVIE}`,
    { params: createQueryParams(payload) },
  );

  return validateAndParse(MovieListResponseSchema, response.data);
};

export const useSearchMovie = (payload: searchMovieRequest) =>
  useQuery({
    queryKey: [SEARCH, payload],
    queryFn: () => searchMovie(payload),
  });
