import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// internal imports
import { FiLogIn } from "react-icons/fi";
import signInSvg from "../../assets/images/illustration-03.svg";
import logoDark from "../../assets/images/logo-dark.svg";
import InputText from "../../components/ui/InputText";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { register, handleSubmit, handleSignInSubmit, errors, isLoading } =
    useAuth();

  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <div className="flex min-h-screen items-center justify-center">
        <div className="container_fluid">
          <div className="border-stroke rounded-sm border bg-white shadow-md">
            <div className="flex flex-wrap items-center">
              <div className="border-stroke w-full xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 md:p-12 xl:p-16">
                  <span className="mb-1.5 block font-medium text-secondary">
                    Start for free
                  </span>

                  <h2 className="mb-9 text-2xl font-bold text-black md:text-[33px]">
                    Sign In to Your Account
                  </h2>

                  <form onSubmit={handleSubmit(handleSignInSubmit)}>
                    <div className="mb-4">
                      <InputText
                        {...register("email")}
                        label="Email"
                        type="email"
                        error={errors.email}
                        placeholder="Enter your email"
                        value = {'defaultsuperadmin@system.com'}
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <InputText
                        {...register("password")}
                        label="Password"
                        type="password"
                        error={errors.password}
                        placeholder="Enter your password"
                        value={'system404'}
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
                      >
                        <FiLogIn className="text-xl" />
                        {isLoading ? "Signing In..." : "Sign In"}
                      </button>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="font-medium">
                        Don’t have an account?{" "}
                        <Link to={"/auth/sign-up"} className="text-primary">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden w-full xl:block xl:w-1/2">
                <div className="px-24 py-20 text-center">
                  <Link className="mb-5 inline-block" to="/auth/sign-in">
                    <img src={logoDark} alt="Logo" />
                  </Link>

                  <p className="font-medium text-secondary 2xl:px-20">
                    Welcome back! Please enter your details to sign in.
                  </p>

                  <span className="mt-16 inline-block">
                    <img src={signInSvg} alt="illustration" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
