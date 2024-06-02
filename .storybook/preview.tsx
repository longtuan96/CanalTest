import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const queryClient = new QueryClient();
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
    layout: "centered",
  },

  decorators: [
    (Story) => (
      <div className="flex-center w-full" style={{ height: "80%" }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={createBrowserRouter([
              {
                path: "*",
                element: <Story />,
              },
            ])}
          />
        </QueryClientProvider>
      </div>
    ),
  ],
};

export default preview;
