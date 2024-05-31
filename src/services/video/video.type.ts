import { z } from "zod";
export const VideoItemSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});
export type VideoItem = z.infer<typeof VideoItemSchema>;

export const GetVideoReponseSchema = z.object({
  id: z.number(),
  results: z.array(VideoItemSchema),
});

export type GetVideoResponse = z.infer<typeof GetVideoReponseSchema>;

export const GetVideoRequestSchema = z.object({
  movieId: z.number(),
});
export type GetVideoRequest = z.infer<typeof GetVideoRequestSchema>;

export type ModalType = "trailer" | "movie";
