import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";
import Charts from "../../components/Charts";
import { NoVisitedProducts } from "../AdminDashboard/AdminHome";
import { useFetcher } from "../../utils/axiosFetcher";
import { toast } from "react-toastify";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const loginID = sessionStorage.getItem("loginID");

  // CATEGORIES
  const { data: categories } = useFetcher("/Category/get-all");

  // USER VISITED PRODUCTS
  const {
    data: userVisitedProduct,
    isLoading: userVisitedProductLoading,
    error: userVisitedProductError,
  } = useFetcher(`/UserVisitedProduct/get-all?guid=${loginID}`);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  if (userVisitedProductError) {
    return toast.error("An error occured");
  }
  return (
    <section className="flex flex-col justify-between p-4 bg-[#1d2634] min-h-screen w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="main-title">
          <h3 className="font-500 text-gray-100">DASHBOARD</h3>
        </div>

        <button
          onClick={() => handleLogout()}
          className="font-500 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        >
          Logout
        </button>
      </div>

      <div className="w-full my-auto">
        {userVisitedProductLoading ? (
          <Loader />
        ) : !userVisitedProductLoading &&
          userVisitedProduct?.model?.length < 1 ? (
          <NoVisitedProducts />
        ) : (
          <Charts
            categories={categories}
            userVisitedProduct={userVisitedProduct}
          />
        )}
      </div>
    </section>
  );
};

export default CustomerDashboard;
