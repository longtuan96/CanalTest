import { describe, expect, test } from "vitest";
import { getTree } from "../../test/utils";
import Navbar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  test("render correctly", async () => {
    expect(
      getTree(
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>,
      ),
    ).toMatchSnapshot();
  });
});
