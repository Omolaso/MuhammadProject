import React from "react";
import { CardMedia } from "@mui/material";
import BannerPhones from "../assets/img/BannerPhones.png";

const Banner = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="lg:container mx-auto flex lg:flex-row flex-col items-center p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex-[0.7] flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl md:text-6xl text-3xl mb-4 font-bold text-white uppercase ">
            Before they sold out
            <br className="hidden lg:inline-block" />
            ready made gluten
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
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
