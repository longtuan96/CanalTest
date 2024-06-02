import { describe, expect, test } from "vitest";
import { getTree, render, screen } from "../../test/utils";
import { PeopleCard } from "./PeopleCard";
import { creditMockData } from "../../services/credit/credit.mock";

describe("People Card", () => {
  test("render correctly", () => {
    expect(
      getTree(<PeopleCard data={creditMockData.cast[0]} />),
    ).toMatchSnapshot();
  });
  test("alt text must be set", () => {
    render(<PeopleCard data={creditMockData.cast[0]} />);
    const result = screen.getByAltText(creditMockData.cast[0].name);
    expect(result).toBeTruthy();
  });
});
