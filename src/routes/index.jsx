import { createBrowserRouter } from "react-router-dom";
// internal imports
import RootLayout from "../layouts/RootLayout";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import SignUp from "../pages/auth/SignUp";
import SingIn from "../pages/auth/SingIn";

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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SingIn />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
]);
