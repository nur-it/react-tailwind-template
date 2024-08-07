import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader: () => import("../pages/Root"),
    children: [],
  },
  {
    path: "/contacts",
    element: <Contact />,
    loader: () => import("../pages/Contact"),
  },
]);
