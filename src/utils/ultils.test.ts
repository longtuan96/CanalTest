import { describe, expect, test } from "vitest";
import getVideoId from "./getVideoId";
import { videoMockData } from "../services/video/video.mock";
import validateAndParse from "./validateAndParse";
import { MovieListResponseSchema } from "../services/movie/movie.type";
import { moviePopularMockData } from "../services/movie/movie.mock";

describe("test ultils", () => {
  test("test getVideoId", () => {
    expect(getVideoId(videoMockData.results)).toBeTypeOf("string");
  });
  test("test validateAndParse", () => {
    expect(
      validateAndParse(MovieListResponseSchema, moviePopularMockData),
    ).toBeTypeOf("object");
  });
});
