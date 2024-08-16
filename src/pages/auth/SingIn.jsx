import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// internal imports
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import signInSvg from "../../assets/images/illustration-03.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import InputTextWithIcon from "../../components/common/InputTextWithIcon";
import useAuth from "../../hooks/useAuth";

const SingIn = () => {
  const { register, handleSubmit, handleSignInSubmit, errors } = useAuth();

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <div className="container_fluid">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="px-24 py-20 text-center">
                <Link className="mb-5 inline-block" to="/auth/sign-in">
                  <img src={logoDark} alt="Logo" />
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

            <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 md:p-12 xl:p-16">
                <span className="mb-1.5 block font-medium text-secondary">
                  Start for free
                </span>

                <h2 className="mb-9 text-2xl font-bold text-black md:text-[33px]">
                  Sign In to Admin
                </h2>

                <form onSubmit={handleSubmit(handleSignInSubmit)}>
                  <div className="mb-4">
                    <InputTextWithIcon
                      required
                      errors={errors}
                      minLength={8}
                      pattern={
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                      }
                      id={"email"}
                      icon={<FiMail />}
                      label={"Email"}
                      name={"email"}
                      register={register}
                      placeholder={"Enter your email"}
                    />
                  </div>

                  <div className="mb-4">
                    <InputTextWithIcon
                      required
                      errors={errors}
                      minLength={8}
                      maxLength={50}
                      pattern={
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
                      }
                      register={register}
                      id={"password"}
                      icon={<FiLock />}
                      label={"Password"}
                      name={"password"}
                      type={"password"}
                      placeholder={"6+ Characters, 1 Capital letter"}
                    />
                  </div>

                  <div className="mb-5">
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-2 w-full rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                    >
                      <FiLogIn className="text-xl" />
                      Sign In
                    </button>
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-stroke bg-gray-100 p-4 font-medium hover:bg-opacity-70"
                  >
                    <FcGoogle className="text-2xl" />
                    Sign in with Google
                  </button>

                  <div className="mt-6 text-center">
                    <p className="font-medium">
                      Don’t have any account?
                      <Link to={"/auth/sign-up"} className="text-primary">
                        Sign Up
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

export default SingIn;
