import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsPersonUp,
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

  // USERS
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useFetcher("/Account/get-users");

  //VISITORS
  const {
    data: visitors,
    isLoading: visitorsLoading,
    error: visitorsError,
  } = useFetcher("/UserVisited/get-all");

  if (productsError) {
    return toast.error("An error occured while loading products");
  }
  if (categoriesError) {
    return toast.error("An error occured while loading categories");
  }
  if (usersError) {
    return toast.error("An error occured while loading users");
  }
  if (visitorsError) {
    return toast.error("An error occured while loading users");
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
          {usersLoading ? <Loader /> : <h1>{users?.model?.length || ""}</h1>}
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>VISITORS</h3>
            <BsPersonUp className="card_icon" />
          </div>
          {visitorsLoading ? (
            <Loader />
          ) : (
            <h1>{visitors?.model?.length || ""}</h1>
          )}
        </div>
      </div>

      <Charts />
    </section>
  );
}

export default AdminHome;
