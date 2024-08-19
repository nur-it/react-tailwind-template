import { useForm } from "react-hook-form";
import AdminServices from "../services/adminServices";

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
    const adminInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    AdminServices.adminLogin(adminInfo)
      .then((res) => console.log(res))
      .catch((error) => console.log("error", error));
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
