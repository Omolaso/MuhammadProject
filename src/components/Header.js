import React from "react";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    toast.success("You've been logged out");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-wrap p-5 text-gray-600 body-font relative z-10">
      <Link
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img className="w-52" src={logo} alt="logo" />
      </Link>

      <nav className="flex flex-row items-center justify-center flex-wrap gap-4 text-base">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/Category" className="hover:text-yellow-400">
          Categories
        </Link>

        <Link to="/About" className="hover:text-yellow-400">
          About Us
        </Link>
        <Link to="/Blog" className="hover:text-yellow-400">
          Blog
        </Link>
        <Link to="/Contact" className="hover:text-yellow-400">
          Contact Us
        </Link>
      </nav>

      {!sessionStorage.getItem("loginID") ? (
        <div className="flex flex-row gap-4">
          <Link
            to="/Register"
            className="inline-flex items-center border-2 border-yellow-300 py-1 px-3 focus:outline-none hover:bg-sky-300 rounded text-base mt-4 md:mt-0 transition-all"
          >
            Register
          </Link>

          <button
            className="bg-sky-300 py-1 px-3 focus:outline-none  border-2 border-sky-300 hover:border-yellow-300  rounded text-base
     mt-4 md:mt-0 signBtnHover relative"
          >
            Sign In
            <div className="signOptions">
              <ul>
                <li className="py-1">
                  <Link to="/Login">as Vendor</Link>
                </li>
                <li className="py-1">
                  <Link to="/Login">as Customer</Link>
                </li>
                <li className="py-1">
                  <Link to="/Login">as Admin</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleLogout()}
          className="font-500 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
