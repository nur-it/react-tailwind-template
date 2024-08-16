import { useForm } from "react-hook-form";

const useAuth = () => {
  const {
    register,
    handleSubmit,
    watch,
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
    watch,
    errors,
    register,
    handleSubmit,
    handleSignInSubmit,
    handleSignUpSubmit,
  };
};

export default useAuth;
