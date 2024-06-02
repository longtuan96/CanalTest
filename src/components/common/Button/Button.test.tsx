import { describe, expect, test } from "vitest";
import { render, screen } from "../../../test/utils";
import { Button } from "./Button";

const testChild = "TEST";

describe("Button", () => {
  test("render correctly", () => {
    render(<Button>{testChild}</Button>);
    const target = screen.getAllByText(testChild);
    expect(target).toBeDefined();
  });
});
