import { z } from "zod";
import { MOVIES_LIST_TYPE } from "../../constants/keys";

const { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } = MOVIES_LIST_TYPE;

export const MovieItemResponseSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieItemResponse = z.infer<typeof MovieItemResponseSchema>;

export const MovieListResponseSchema = z.object({
  page: z.number(),
  results: z.array(MovieItemResponseSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type MovieListResponse = z.infer<typeof MovieListResponseSchema>;

export const GetMovieListRequestPayloadSchema = z.object({
  type: z.enum([NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING]),
});
export type GetMovieListRequestPayload = z.infer<
  typeof GetMovieListRequestPayloadSchema
>;
