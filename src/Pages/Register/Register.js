import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValidationSchema } from "../../utils/formValidations";
import { axiosFetcher } from "../../utils/axiosFetcher";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import logo from "../../assets/img/logo.png";

const Register = () => {
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
    resolver: yupResolver(RegisterFormValidationSchema),
  });

  const handleRegisterUser = (data) => {
    setFormStatus(true);

    const payload = {
      name: data.name,
      username: data.userName,
      password: data.password,
      roleId: data.role,
    };

    axiosFetcher
      .post("/Account/sign-up", payload)
      .then((res) => {
        toast.success("Registration Successful. Please login in.");
        navigate("/Login");
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

      <section>
        <div className="font-[sans-serif] text-[#333] mt-4 p-4 relative">
          <div className="max-w-md w-full mx-auto relative z-50">
            <div className="text-center mb-8">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-48 inline-block" />
              </Link>
            </div>

            <div className="border border-gray-300 bg-white rounded-md p-8">
              <form
                onSubmit={handleSubmit(handleRegisterUser)}
                className="w-full"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold">Create an account</h3>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm block" htmlFor="name">
                      Name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        {...register("name")}
                        id="name"
                        placeholder="Enter name"
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4 absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle cx={10} cy={7} r={6} data-original="#000000" />
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <small className=" text-red-700">
                      {errors?.name?.message}
                    </small>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm block" htmlFor="userName">
                      Username
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        id="userName"
                        {...register("userName")}
                        placeholder="Enter username"
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4 absolute right-4"
                        viewBox="0 0 682.667 682.667"
                      >
                        <defs>
                          <clipPath id="a" clipPathUnits="userSpaceOnUse">
                            <path d="M0 512h512V0H0Z" data-original="#000000" />
                          </clipPath>
                        </defs>
                        <g
                          clipPath="url(#a)"
                          transform="matrix(1.33 0 0 -1.33 0 682.667)"
                        >
                          <path
                            fill="none"
                            strokeMiterlimit={10}
                            strokeWidth={40}
                            d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                            data-original="#000000"
                          />
                          <path
                            d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                            data-original="#000000"
                          />
                        </g>
                      </svg>
                    </div>
                    <small className="text-red-700">
                      {errors?.userName?.message}
                    </small>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-sm block" htmlFor="role">
                      Role
                    </label>
                    <select
                      {...register("role")}
                      id="role"
                      defaultValue={3}
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded outline-blue-500"
                    >
                      {/* <option value={1}>Admin</option> */}
                      <option value={2}>Vendor</option>
                      <option value={3}>Customer</option>
                    </select>

                    <small className="text-red-700">
                      {errors?.role?.message}
                    </small>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
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
                          <FontAwesomeIcon
                            className="text-gray-400"
                            icon={faEye}
                          />
                        )}
                      </button>
                    </div>
                    <small className=" text-red-700">
                      {errors?.password?.message}
                    </small>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                      I accept the{" "}
                      <Link
                        to={"/"}
                        className="text-blue-600 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="!mt-10">
                  <button
                    type="submit"
                    disabled={formStatus}
                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    {formStatus ? "Please wait..." : "Create an account"}
                  </button>
                </div>

                <p className="text-sm mt-6 text-center">
                  Already have an account?{" "}
                  <Link
                    to={"/Login"}
                    className="text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>

          <img
            src="https://readymadeui.com/bg-effect.svg"
            alt="placeholder"
            className="absolute inset-0 w-full h-full z-0 opacity-40"
          />
        </div>
      </section>
    </>
  );
};

export default Register;
