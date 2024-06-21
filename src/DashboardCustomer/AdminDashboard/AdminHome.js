import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { useFetcher } from "../../utils/axiosFetcher";
import { toast } from "react-toastify";
import Loader from "../../utils/Loader";
import Charts from "../../components/Charts";

export const NoVisitedProducts = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[3rem]">
      <p>You haven't visited any products</p>
    </div>
  );
};

function AdminHome() {
  const loginID = sessionStorage.getItem("loginID");

  // PRODUCTS
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useFetcher("/Product/get-all");

  // CATEGORIES
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useFetcher("/Category/get-all");

  // USER VISITED PRODUCTS
  const {
    data: userVisitedProduct,
    isLoading: userVisitedProductLoading,
    error: userVisitedProductError,
  } = useFetcher(`/UserVisitedProduct/get-all?guid=${loginID}`);

  if (productsError) {
    return toast.error("An error occured while loading products");
  }
  if (categoriesError) {
    return toast.error("An error occured while loading categories");
  }
  if (userVisitedProductError) {
    return toast.error("An error occured");
  }

  return (
    <section className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          {productsLoading ? (
            <Loader />
          ) : (
            <h1>{products?.model?.totalItems || ""}</h1>
          )}
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          {categoriesLoading ? (
            <Loader />
          ) : (
            <h1>{categories?.model?.length || ""}</h1>
          )}
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
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
}

export default AdminHome;
