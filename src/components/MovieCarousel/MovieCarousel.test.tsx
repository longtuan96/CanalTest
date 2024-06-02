import { describe, expect, test } from "vitest";
import { getTree, render, screen } from "../../test/utils";
import MovieCarousel from "./MovieCarousel";
import { moviePopularMockData } from "../../services/movie/movie.mock";
import { MemoryRouter } from "react-router-dom";

describe("Movie Carousel", () => {
  test("render correctly", () => {
    expect(
      getTree(
        <MemoryRouter initialEntries={["/"]}>
          <MovieCarousel
            handleShowVideo={() => {}}
            data={moviePopularMockData.results}
          />
        </MemoryRouter>,
      ),
    ).toMatchSnapshot();
  });
});
