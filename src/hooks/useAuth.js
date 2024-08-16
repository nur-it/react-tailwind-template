import { useForm } from "react-hook-form";

const useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // handle sign in submit
  const handleSignInSubmit = (data) => {
    console.log("data >><<", data);
  };

  // handle sign up submit
  const handleSignUpSubmit = (data) => {
    console.log("data >><<", data);
  };

  return {
    errors,
    register,
    handleSubmit,
    handleSignInSubmit,
    handleSignUpSubmit,
  };
};

export default useAuth;
