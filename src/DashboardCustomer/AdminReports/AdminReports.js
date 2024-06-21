import React from "react";
import Charts from "../../components/Charts";
import Loader from "../../utils/Loader";
import { useFetcher } from "../../utils/axiosFetcher";
import { NoVisitedProducts } from "../AdminDashboard/AdminHome";
import { toast } from "react-toastify";

const AdminReports = () => {
  const loginID = sessionStorage.getItem("loginID");

  // USER VISITED PRODUCTS
  const {
    data: userVisitedProduct,
    isLoading: userVisitedProductLoading,
    error: userVisitedProductError,
  } = useFetcher(`/UserVisitedProduct/get-all?guid=${loginID}`);

  // CATEGORIES
  const { data: categories } = useFetcher("/Category/get-all");

  if (userVisitedProductError) {
    return toast.error("An error occured");
  }

  return (
    <section className="main-container flex flex-col gap-4 w-full">
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        <h3>Reports</h3>
      </div>

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
    </section>
  );
};

export default AdminReports;
