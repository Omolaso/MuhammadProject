import React from "react";
import { toast } from "react-toastify";
import { useFetcher } from "../../utils/axiosFetcher";
import Loader from "../../utils/Loader";
import CategoryComponent from "./CategoryComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryBanner from "../../assets/img/categoryBannerImg.png";

const Category = () => {
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useFetcher("/Product/get-all");

  const allProducts = products?.model?.data;

  if (productsError) {
    return toast.error("An error occured while loading products");
  }

  const graphicCard = allProducts?.filter(
    (products) => products?.category?.name?.toLowerCase() === "graphic card"
  );
  const laptop = allProducts?.filter(
    (products) => products?.category?.name?.toLowerCase() === "laptop"
  );
  const mobilePhones = allProducts?.filter(
    (products) => products?.category?.name?.toLowerCase() === "mobile"
  );
  const smartWatch = allProducts?.filter(
    (products) => products?.category?.name?.toLowerCase() === "smart watch"
  );
  const gpu = allProducts?.filter(
    (products) => products?.category?.name?.toLowerCase() === "gpu"
  );

  return (
    <>
      <Header />
      <section className="text-gray-600 body-font bg-gradient-to-r from-slate-500 to-gray-900 py-24">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col flex-wrap items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl md:text-6xl text-3xl mb-4 font-bold text-white uppercase ">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed w-1/2 text-lg text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-gray-700 border-2 border-gray-700 py-2 px-6 focus:outline-none hover:border-yellow-300 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={CategoryBanner}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-sky-100">
        <div className="container px-5 py-24 mx-auto">
          {productsLoading ? (
            <Loader />
          ) : (
            <CategoryComponent
              categoryHeader={"Mobile Phone"}
              categoryPage={"/Category/mobile-phones"}
              categoryData={mobilePhones}
            />
          )}
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {productsLoading ? (
            <Loader />
          ) : (
            <CategoryComponent
              categoryHeader={"Graphic Card"}
              categoryPage={"/Category/graphic-card"}
              categoryData={graphicCard}
            />
          )}
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-sky-100">
        <div className="container px-5 py-24 mx-auto">
          {productsLoading ? (
            <Loader />
          ) : (
            <CategoryComponent
              categoryHeader={"Laptops"}
              categoryPage={"/Category/laptops"}
              categoryData={laptop}
            />
          )}
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {productsLoading ? (
            <Loader />
          ) : (
            <CategoryComponent
              categoryHeader={"Smart Watch"}
              categoryPage={"/Category/smart-watch"}
              categoryData={smartWatch}
            />
          )}
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-sky-100">
        <div className="container px-5 py-24 mx-auto">
          {productsLoading ? (
            <Loader />
          ) : (
            <CategoryComponent
              categoryHeader={"GPU"}
              categoryPage={"/Category/gpu"}
              categoryData={gpu}
            />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Category;
