import React, { useEffect } from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Products from "../../components/Products";
import RecommendationSlider from "../../components/RecommendationSlider";
import Footer from "../../components/Footer";
import { axiosFetcher } from "../../utils/axiosFetcher";

const Home = () => {
  const checkVisitor = async () => {
    if (sessionStorage.getItem("checkVisitor")) {
      return;
    }

    try {
      await axiosFetcher.post("/UserVisited/insert");
      // console.log(res);
      sessionStorage.setItem("checkVisitor", "alreadyVisited");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkVisitor();
  }, []);

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
