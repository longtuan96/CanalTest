import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchBox } from "./SearchBox";
import { expect, test } from "vitest";

test("renders correctly", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <SearchBox />
    </MemoryRouter>,
  );

  const placeholder = screen.getByPlaceholderText("Type to Search...");
  expect(placeholder).toBeTruthy();
});
