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
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setIsAuthenticated(false);
  };

  // Mutation for sign-in
  const signInMutation = useMutation({
    mutationFn: AdminServices.adminLoginEmail, // Define the mutation function
    onSuccess: (res) => handleSuccess(res.data), // Callbacks for success
    onError: () => handleError("Login failed. Please check your credentials."), // Callbacks for error
  });

  // Mutation for sign-up
  const signUpMutation = useMutation({
    mutationFn: AdminServices.adminRegister, // Define the mutation function
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
  const handleSignUpSubmit = (data) => {
    signUpMutation.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      role: "66fcb83acabfa342b9e35081",
    });

    // console.log(data);
  };

  // Handle sign-out
  const signOut = () => {
    setUser(null);
    setIsAuthenticated(false);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    // Redirect to login page
    navigate("/auth/sign-in");
  };

  // Load user from localStorage (if available) on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

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
    loading: signInMutation.isLoading || signUpMutation.isLoading, // Track loading state
    error,
    signOut,
  };
};

export default useAuth;
