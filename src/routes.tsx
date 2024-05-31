import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { DetailPage } from "./pages/DetailPage/DetailPage.tsx";
import { SearchPage } from "./pages/SearchPage/SearchPage.tsx";

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
        element: <DetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
