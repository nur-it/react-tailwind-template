import Cookies from "js-cookie"; // Import js-cookie
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleServices from "../services/roleServices";

const useRoles = () => {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

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

  // create role

  const handleCreateRole = async (data) => {
    try {
      setIsLoading(true);
      const response = await RoleServices.createRole(data);
      setRoles((prevRoles) => [...prevRoles, response.data]);
      // Redirect to role management page
      navigate("/admin/settings/role-management");
      setSuccess(true);
    } catch (error) {
      setError(error.message || "Failed to create role");
    } finally {
      setIsLoading(false);
    }
  };

  // update role

  const handleUpdateRole = async (data, id) => {
    try {
      setIsLoading(true);
      const response = await RoleServices.updateRole(data, id);
      setRoles((prevRoles) =>
        prevRoles.map((role) => (role._id === id ? response.data : role)),
      );
      // Redirect to role management page
      navigate("/admin/settings/role-management");
      setSuccess(true);
    } catch (error) {
      setError(error.message || "Failed to update role");
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
    success,
    handleCreateRole,
    handleUpdateRole,
  };
};

export default useRoles;
