import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  redirectTo = "/auth/sign-in",
  children,
}) {
  const accessToken = Cookies.get("accessToken"); // Get the access token from cookies

  // If no accessToken, redirect to the sign-in page
  if (!accessToken) {
    return <Navigate to={redirectTo} />;
  }

  // If accessToken exists, allow access to the protected route
  return children ? children : <Outlet />;
}
