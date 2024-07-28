import React from "react";
import { CardMedia } from "@mui/material";
import BannerPhones from "../assets/img/BannerPhones.png";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="lg:container mx-auto flex lg:flex-row flex-col items-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex-[0.7] flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl md:text-6xl text-3xl mb-4 font-bold text-white uppercase ">
            Smart Solutions for Modern Living
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white">
            Place orders for smart products
          </p>
        </div>

        <div className="flex-1 w-full max-w-full md:max-w-[30rem]">
          <CardMedia src={BannerPhones} component={"img"} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
