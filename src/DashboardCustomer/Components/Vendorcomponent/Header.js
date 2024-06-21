import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header className="text-gray-600 body-font relative z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-52" src={logo} alt="" />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/Vendor" className="mr-5 hover:text-yellow-400">
            Home
          </Link>
          <Link to="/Voucher" className="mr-5 hover:text-yellow-400">
            Discount Voucher
          </Link>
          {/* <Link to="/Category" className="mr-5 hover:text-yellow-400">
            Categories
          </Link>

          <Link to="/About" className="mr-5 hover:text-yellow-400">
            About Us
          </Link>
          <Link to="/Blog" className="mr-5 hover:text-yellow-400">
            Blog
          </Link>
          <Link to="/Contact" className="mr-5 hover:text-yellow-400">
            Contact Us
          </Link> */}
          {/* <form action="" className="formSearch">
            <input
              className="searchInp"
              type="search"
              placeholder="Search here ..."
            />
            <FontAwesomeIcon className="fa" icon={faSearch} />
          </form> */}
        </nav>
        <div>
          {/* <Link
            to="/Register"
            className="inline-flex items-center  border-2 border-yellow-300 py-1 px-3 focus:outline-none hover:bg-sky-300 rounded text-base mt-4 md:mt-0 transition-all"
          >
            Register
          </Link> */}
          <button
            type="button"
            onClick={() => handleLogout()}
            className="bg-sky-300 py-1 px-3 focus:outline-none  border-2 border-sky-300 hover:border-yellow-300  rounded text-base mt-4 md:mt-0 ml-4 signBtnHover relative"
          >
            Logout
            {/* <div className="signOptions">
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
            </div> */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
