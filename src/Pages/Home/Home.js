import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Products from "../../components/Products";
import RecommendationSlider from "../../components/RecommendationSlider";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Blogs />
      <RecommendationSlider />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
