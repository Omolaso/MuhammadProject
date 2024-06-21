import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValidationSchema } from "../../utils/formValidations";
import { axiosFetcher } from "../../utils/axiosFetcher";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import loginsideImg from "../../assets/img/loginsideImg.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginFormValidationSchema),
  });

  const redirectUser = (res) => {
    res.data.model.roleId === 1
      ? navigate("/Admin")
      : res.data.model.roleId === 2
      ? navigate("/Vendor")
      : navigate("/CustomerDashboard");

    sessionStorage.setItem("loginID", res.data.model.loginId);
  };

  const handleLoginUser = (data) => {
    setFormStatus(true);

    const payload = {
      username: data.userName,
      password: data.password,
    };

    axiosFetcher
      .post("/Account/login", payload)
      .then((res) => {
        redirectUser(res);
        // console.log(res);
      })
      .catch((err) => {
        toast.error("An error occured");
        // console.log(err);
      })
      .finally(() => {
        setFormStatus(false);
        reset();
      });
  };

  return (
    <>
      <Header />
      <section className="bgImgLogin">
        {/* component */}
        <div className="bg-sky-100 flex justify-center items-center h-screen">
          {/* Left: Image */}
          <div className="w-1/2 h-screen hidden lg:block">
            <img
              src={loginsideImg}
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Login</h1>

            <form
              onSubmit={handleSubmit(handleLoginUser)}
              className="flex flex-col gap-2 w-full"
            >
              <div className="flex flex-col w-full">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("userName")}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
                <small className=" text-red-700">
                  {errors?.userName?.message}
                </small>
              </div>

              <div className="flex flex-col w-full">
                <label className="text-sm block" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:border-blue-500"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 bg-transparent focus:outline-none"
                  >
                    {showPassword ? (
                      <FontAwesomeIcon
                        className="text-gray-400"
                        icon={faEyeSlash}
                      />
                    ) : (
                      <FontAwesomeIcon className="text-gray-400" icon={faEye} />
                    )}
                  </button>
                </div>
                <small className=" text-red-700">
                  {errors?.password?.message}
                </small>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-500"
                />
                <label htmlFor="remember" className="text-gray-600 ml-2">
                  Remember Me
                </label>
              </div>
              {/* Forgot Password Link */}
              <div className="mb-6 text-blue-500">
                <Link to="/" className="hover:underline">
                  Forgot Password?
                </Link>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                disabled={formStatus}
                className="bg-yellow-300 hover:bg-yellow-500 text-white font-semibold rounded-md py-2 px-4 w-full transition-all "
              >
                {formStatus ? "Logging in..." : "Login"}
              </button>
            </form>
            {/* Sign up  Link */}
            <div className="mt-6 text-blue-500 text-center">
              <Link to={"/Register"} className="hover:underline">
                Sign up Here
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
