import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { DetailPage } from "./pages/DetailPage/DetailPage.tsx";

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
        path: "*",
        element: <></>,
      },
    ],
  },
]);
