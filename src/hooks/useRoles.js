import Cookies from "js-cookie"; // Import js-cookie
import { useEffect, useState } from "react";
import RoleServices from "../services/roleServices";

const useRoles = () => {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRoles = async () => {
    try {
      setIsLoading(true);

      // Check if accessToken exists in the cookies
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        throw new Error("Access token is missing.");
      }

      // Fetch roles using GET request
      const response = await RoleServices.getAllRoles();
      setRoles(response.data || []); // Assuming roles are in response.data
    } catch (error) {
      setError(error.message || "Failed to fetch roles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRoles(); // Automatically fetch roles on component mount
  }, []);

  return {
    roles,
    error,
    isLoading,
  };
};

export default useRoles;
