import { describe, expect, test } from "vitest";
import HorizontalList from "./HorizontalList";
import { getTree, render, screen } from "../../../test/utils";

const title = "test";
const children = "Something";

describe("HorizontalList", () => {
  test("render correctly", () => {
    expect(
      getTree(<HorizontalList title={title}>{children}</HorizontalList>),
    ).toMatchSnapshot();
  });
  test("title is a heading", () => {
    render(<HorizontalList title={title}>{children}</HorizontalList>);
    screen.getByRole("heading", { name: title });
  });
});
