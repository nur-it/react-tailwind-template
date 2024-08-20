import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// internal imports
import { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiLogIn,
  FiMail,
  FiUser,
} from "react-icons/fi";
import signInSvg from "../../assets/images/illustration-03.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import InputTextWithIcon from "../../components/ui/InputTextWithIcon";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { register, handleSubmit, handleSignUpSubmit, errors, watch } =
    useAuth();

  // react hook
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className="container_fluid">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-24 py-20 text-center">
                <Link className="mb-5 inline-block" to="/auth/sign-up">
                  <img className="" src={logoDark} alt="Logo" />
                </Link>

                <p className="font-medium 2xl:px-20 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  suspendisse.
                </p>

                <span className="mt-16 inline-block">
                  <img src={signInSvg} alt="illustration" />
                </span>
              </div>
            </div>

            {/* sign up form  */}
            <div className="w-full border-stroke  xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 md:p-12 xl:p-16">
                <span className="mb-1.5 block font-medium text-secondary">
                  Start for free
                </span>

                <h2 className="mb-9 text-2xl font-bold text-black md:text-[32px]">
                  Sign Up to TailAdmin
                </h2>

                <form onSubmit={handleSubmit(handleSignUpSubmit)}>
                  <div className="mb-4">
                    <div className="mb-4">
                      <InputTextWithIcon
                        required
                        id={"name"}
                        name={"name"}
                        label={"Name"}
                        errors={errors}
                        icon={<FiUser />}
                        register={register}
                        placeholder={"Enter your full name"}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="mb-4">
                      <InputTextWithIcon
                        required
                        id={"email"}
                        type={"email"}
                        label={"Email"}
                        name={"email"}
                        errors={errors}
                        icon={<FiMail />}
                        register={register}
                        placeholder={"Enter your email"}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <InputTextWithIcon
                      required
                      id={"password"}
                      pattern={
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                      }
                      errors={errors}
                      icon={<FiLock />}
                      label={"Password"}
                      name={"password"}
                      type={"password"}
                      register={register}
                      placeholder={"8 Characters, 1 Capital letter"}
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="mb-2.5 block font-medium text-black"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <FiLock
                          className={`text-md ${
                            errors?.confirmPassword?.type === "required" ||
                            errors?.confirmPassword?.type === "validate"
                              ? "text-red-400"
                              : ""
                          }`}
                        />
                      </span>

                      <input
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                        type={isShowPassword ? "password" : "text"}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className={`w-full py-3 pl-12 pr-4 font-medium text-black rounded border ${
                          errors?.confirmPassword?.type === "required" ||
                          errors?.confirmPassword?.type === "validate"
                            ? "focus:border-red-400 border-red-400"
                            : "focus:border-primary border-stroke"
                        }  border-stroke focus-visible:outline-none`}
                      />

                      <button
                        type="button"
                        className={`absolute right-4 top-4 ${
                          errors?.confirmPassword?.type === "required" ||
                          errors?.confirmPassword?.type === "validate"
                            ? "text-red-400"
                            : ""
                        }`}
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        {isShowPassword ? <FiEyeOff /> : <FiEye />}
                      </button>

                      {(errors?.confirmPassword?.type === "required" ||
                        errors?.confirmPassword?.type === "validate") && (
                        <p className="text-red-400 mt-1">
                          {errors?.confirmPassword?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                    >
                      <FiLogIn className="text-xl" />
                      Create account
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 font-medium hover:bg-opacity-80 "
                  >
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_191_13499)">
                          <path
                            d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                            fill="#EB4335"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_191_13499">
                            <rect width="20" height="20" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Sign up with Google
                  </button>

                  <div className="mt-6 text-center">
                    <p className="font-medium">
                      Already have an account?
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
    </>
  );
};

export default SignUp;
