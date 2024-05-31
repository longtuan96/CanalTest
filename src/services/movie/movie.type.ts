import { z } from "zod";
import { LIST_TYPE } from "../../constants/keys";

const { MOVIE_NOW_PLAYING, MOVIE_POPULAR, MOVIE_TOP_RATED, MOVIE_UPCOMING } =
  LIST_TYPE;

export const MovieItemResponseSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
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
  type: z.enum([
    MOVIE_NOW_PLAYING,
    MOVIE_POPULAR,
    MOVIE_TOP_RATED,
    MOVIE_UPCOMING,
  ]),
});
export type GetMovieListRequestPayload = z.infer<
  typeof GetMovieListRequestPayloadSchema
>;

export const MovieDetailResponseSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  belongs_to_collection: z
    .object({
      id: z.number(),
      name: z.string(),
      poster_path: z.string(),
      backdrop_path: z.string(),
    })
    .nullable(),
  budget: z.number(),
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(
    z.union([
      z.object({
        id: z.number(),
        logo_path: z.string().nullable(),
        name: z.string(),
        origin_country: z.string(),
      }),
      z.object({
        id: z.number(),
        logo_path: z.null(),
        name: z.string(),
        origin_country: z.string(),
      }),
    ]),
  ),
  production_countries: z.array(
    z.object({ iso_3166_1: z.string(), name: z.string() }),
  ),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(
    z.object({
      english_name: z.string(),
      iso_639_1: z.string(),
      name: z.string(),
    }),
  ),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type MovieDetailResponse = z.infer<typeof MovieDetailResponseSchema>;

export const GetMovieDetailRequestSchema = z.object({
  movieId: z.string().optional(),
});
export type GetMovieDetailRequest = z.infer<typeof GetMovieDetailRequestSchema>;

export const searchMovieRequestSchema = z.object({
  query: z.string().optional().nullable(),
});
export type searchMovieRequest = z.infer<typeof searchMovieRequestSchema>;
