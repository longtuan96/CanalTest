import { describe, test } from "vitest";
import NavItem from "./NavItem";
import { screen } from "@testing-library/react";
import { render } from "../../../test/utils";
import { NAVBAR_ITEMS } from "../NavBar";

describe("NavItem", () => {
  test("render correctly", async () => {
    render(<NavItem item={NAVBAR_ITEMS[0]} />);
    screen.getByText("TV Shows");
  });
});
