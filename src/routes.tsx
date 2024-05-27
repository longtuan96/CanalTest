import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/movie",
        element: <></>,
      },
      {
        path: "/movie/:movieId",
        element: <></>,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
