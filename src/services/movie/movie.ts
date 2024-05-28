import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constants/keys";
import validate from "../../utils/validate";
import { api } from "../api";
import {
  GetMovieListRequestPayload,
  GetMovieListRequestPayloadSchema,
  MovieListResponse,
  MovieListResponseSchema,
} from "./movie.type";

const { LIST } = QUERY_KEYS;

const getMovieList = async (payload: GetMovieListRequestPayload) => {
  const response = await api.get<MovieListResponse>(`${payload.type}`, {
    params: validate(GetMovieListRequestPayloadSchema, payload),
  });
  return validate(MovieListResponseSchema, response.data);
};

export const useGetMovieList = (payload: GetMovieListRequestPayload) =>
  useQuery({
    queryKey: [LIST, payload.type],
    queryFn: () => getMovieList(payload),
  });
