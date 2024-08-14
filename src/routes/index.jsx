import { createBrowserRouter } from "react-router-dom";
// internal imports
import RootLayout from "../layouts/RootLayout";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
    ],
  },
]);
