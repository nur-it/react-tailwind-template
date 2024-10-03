import { useState } from "react";
import { Helmet } from "react-helmet";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import signInSvg from "../../assets/images/illustration-03.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import InputText from "../../components/ui/InputText";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { register, handleSubmit, handleSignUpSubmit, errors, watch } =
    useAuth();
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className="flex min-h-screen items-center justify-center">
        <div className="container_fluid">
          <div className="border-stroke rounded-sm border bg-white shadow-md">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-full xl:block xl:w-1/2">
                <div className="px-24 py-20 text-center">
                  <Link className="mb-5 inline-block" to="/auth/sign-up">
                    <img className="" src={logoDark} alt="Logo" />
                  </Link>

                  <p className="font-medium text-secondary 2xl:px-20">
                    Welcome! Start by creating your account.
                  </p>

                  <span className="mt-16 inline-block">
                    <img src={signInSvg} alt="illustration" />
                  </span>
                </div>
              </div>

              {/* sign up form */}
              <div className="border-stroke w-full xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 md:p-12 xl:p-16">
                  <span className="mb-1.5 block font-medium text-secondary">
                    Start for free
                  </span>

                  <h2 className="mb-9 text-2xl font-bold text-black md:text-[33px]">
                    Create Your Account
                  </h2>

                  <form onSubmit={handleSubmit(handleSignUpSubmit)}>
                    <div className="mb-4">
                      <InputText
                        {...register("name")}
                        label="Name"
                        type="text"
                        error={errors.name}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <InputText
                        {...register("email")}
                        label="Email"
                        type="email"
                        error={errors.email}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <InputText
                        {...register("password")}
                        label="Password"
                        type={isShowPassword ? "password" : "text"}
                        error={errors.password}
                        placeholder="8 Characters, 1 Capital letter"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <InputText
                        {...register("confirmPassword", {
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                        label="Confirm Password"
                        type={isShowPassword ? "password" : "text"}
                        error={errors.confirmPassword}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                      >
                        <FiLogIn className="text-xl" />
                        Create account
                      </button>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="font-medium">
                        Already have an account?{" "}
                        <Link to="/auth/sign-in" className="text-primary">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
