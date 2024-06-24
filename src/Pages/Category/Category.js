import React from "react";
import { CardMedia } from "@mui/material";
import { useFetcher } from "../../utils/axiosFetcher";
import Loader from "../../utils/Loader";
import CategoryComponent from "./CategoryComponent";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryBanner from "../../assets/img/categoryBannerImg.png";

const Category = () => {
  const loginID = sessionStorage.getItem("loginID");

  const { data: products, isLoading: productsLoading } =
    useFetcher("/Product/get-all");

  const allProducts = products?.model?.data;

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

      <section className="flex flex-col gap-4 md:gap-8 text-gray-600 bg-sky-100 body-font">
        <div className="lg:container mx-auto flex lg:flex-row flex-col items-center p-4 bg-gradient-to-r from-slate-500 to-gray-900">
          <div className="flex-[0.7] flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl md:text-6xl text-3xl mb-4 font-bold text-white uppercase ">
              Before they sold out
              <br className="hidden lg:inline-block" />
              ready made gluten
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>

          <div className="flex-1 w-full max-w-full md:max-w-[30rem]">
            <CardMedia src={CategoryBanner} component={"img"} alt="laptop" />
          </div>
        </div>

        {loginID ? (
          <>
            <div className="text-gray-600 body-font py-4">
              <div className="container px-5 mx-auto">
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
            </div>

            <div className="text-gray-600 body-font py-4">
              <div className="container px-5 mx-auto">
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
            </div>

            <div className="text-gray-600 body-font py-4 ">
              <div className="container px-5 mx-auto">
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
            </div>

            <div className="text-gray-600 body-font py-4">
              <div className="container px-5 mx-auto">
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
            </div>

            <div className="text-gray-600 body-font py-4">
              <div className="container px-5 mx-auto">
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
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full py-4">
            <h3>Please login to view products</h3>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Category;
