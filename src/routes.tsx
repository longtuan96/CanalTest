import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { DetailPage } from "./pages/DetailPage/DetailPage.tsx";
import { SearchPage } from "./pages/SearchPage/SearchPage.tsx";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/movie" replace />,
      },
      {
        path: "/movie",
        element: <HomePage />,
      },
      {
        path: "/movie/:movieId",
        element: <DetailPage />,
      },
      {
        path: "/movie/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
