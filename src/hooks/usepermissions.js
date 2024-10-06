import Cookies from "js-cookie"; // Import js-cookie
import { useEffect, useState } from "react";
import PermissionServices from "../services/permissionServices";

const usePermissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(permissions);

  const getPermissions = async () => {
    try {
      setIsLoading(true);

      // Check if accessToken exists in the cookies
      const accessToken = Cookies.get("accessToken");
      if (!accessToken) {
        throw new Error("Access token is missing.");
      }

      // Fetch permissions using GET request
      const response = await PermissionServices.getAllPermissions();
      setPermissions(response.data || []); // Assuming permissions are in response.data
    } catch (error) {
      setError(error.message || "Failed to fetch permissions");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPermissions(); // Automatically fetch permissions on component mount
  }, []);

  return {
    permissions,
    error,
    isLoading,
  };
};

export default usePermissions;
