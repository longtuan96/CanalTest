import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cleanup, render } from "@testing-library/react";
import { ReactElement } from "react";

import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

const queryClient = new QueryClient();

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };

export function getTree(node: ReactElement) {
  return renderer.create(node).toJSON();
}
