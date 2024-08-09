import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
// internal imports
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/Home";
import SinglePost from "../pages/SinglePost";

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:postId",
    element: <SinglePost />,
    action: queryClient,
  },
  {
    path: "/contacts",
    element: <Contact />,
    action: queryClient,
  },
]);
