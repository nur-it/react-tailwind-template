import { createBrowserRouter } from "react-router-dom";
// internal imports
import ComponentLayout from "../layouts/ComponentLayout";
import RootLayout from "../layouts/RootLayout";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import SignUp from "../pages/auth/SignUp";
import SingIn from "../pages/auth/SingIn";
import AlertPage from "../pages/components/Alert";
import BadgePage from "../pages/components/Badge";
import BreadcrumbPage from "../pages/components/Breadcrumb";
import ButtonPage from "../pages/components/Button";
import CheckboxPage from "../pages/components/Checkbox";
import InputPage from "../pages/components/Input";
import RadioPage from "../pages/components/Radio";
import AddNewRole from "../pages/role/AddNewRole";
import RoleManagement from "../pages/role/RoleManagement";
import ProtectedRoute from "./private.route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/profile",
        element: <Profile />, // Protect this route
      },
      {
        path: "/settings",
        element: <Settings />, // Protect this route
      },
      {
        path: "/admin/settings/role-management",
        element: <RoleManagement />, // Protect this route
      },
      {
        path: "/admin/settings/role-management/add-new-role",
        element: <AddNewRole />,
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
  {
    path: "/components",
    element: <ComponentLayout />,
    children: [
      {
        path: "alert",
        element: <AlertPage />,
      },
      {
        path: "button",
        element: <ButtonPage />,
      },
      {
        path: "badge",
        element: <BadgePage />,
      },
      {
        path: "breadcrumb",
        element: <BreadcrumbPage />,
      },
      {
        path: "checkbox",
        element: <CheckboxPage />,
      },
      {
        path: "input",
        element: <InputPage />,
      },
      {
        path: "radio",
        element: <RadioPage />,
      },
    ],
  },
]);
