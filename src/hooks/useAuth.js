import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import AdminServices from "../services/adminServices";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for general loading
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSuccess = (data) => {
    setUser(data.user); // Assuming the response contains a user object
    setIsAuthenticated(true);
    setError(null);

    // Set tokens in cookies
    Cookies.set("accessToken", data.accessToken);
    Cookies.set("refreshToken", data.refreshToken);

    // Redirect to home page
    navigate("/");
    setIsLoading(false); // Stop loading once successful
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setIsAuthenticated(false); // Reset isAuthenticated state
    setIsLoading(false); // Stop loading if error occurs
  };

  // Mutation for sign-in
  const signInMutation = useMutation({
    mutationFn: AdminServices.adminLoginEmail, // Define the mutation function
    onMutate: () => setIsLoading(true), // Set loading state before starting mutation
    onSuccess: (res) => handleSuccess(res.data), // Callbacks for success
    onError: () => handleError("Login failed. Please check your credentials."), // Callbacks for error
  });

  // Mutation for sign-up
  const signUpMutation = useMutation({
    mutationFn: AdminServices.adminRegister, // Define the mutation function
    onMutate: () => setIsLoading(true), // Set loading state before starting mutation
    onSuccess: (res) => handleSuccess(res.data), // Callbacks for success
    onError: () => handleError("Sign-up failed. Please try again."), // Callbacks for error
  });

  // Handle sign-in submission
  const handleSignInSubmit = (data) => {
    signInMutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  // Handle sign-up submission
  const handleSignUpSubmit = ({ name, email, password }) => {
    signUpMutation.mutate({
      name,
      email,
      password,
      role: "66fcb83acabfa342b9e35081",
    });
  };

  // Handle sign-out
  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setIsLoading(false); // Ensure loading is reset during sign-out

    // Redirect to login page
    navigate("/auth/sign-in");
  };

  // Load user from localStorage (if available) on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }
  }, []); // Add empty dependency array to prevent unnecessary re-renders

  // Save user to localStorage when the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return {
    watch,
    errors,
    register,
    handleSubmit,
    handleSignInSubmit,
    handleSignUpSubmit,
    isAuthenticated,
    user,
    isLoading, // Export loading state for external usage
    error,
    signOut,
  };
};

export default useAuth;
