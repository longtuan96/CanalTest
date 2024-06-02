import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { describe, expect, test, vi } from "vitest";
import { moviePopularMockData } from "../../services/movie/movie.mock";
import createImgUrl from "../../utils/createImgUrl";
describe("Movie Card", () => {
  test("renders movie card with correct link and image", () => {
    vi.fn(() =>
      createImgUrl("movie", moviePopularMockData.results[0].backdrop_path),
    );
    render(
      <MemoryRouter>
        <MovieCard data={moviePopularMockData.results[0]} />
      </MemoryRouter>,
    );

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveProperty(
      "alt",
      moviePopularMockData.results[0].title,
    );
  });
});
