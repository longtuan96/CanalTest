import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:movieId",
        element: <></>,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
