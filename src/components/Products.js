import React from "react";
import bigProductImg from "../assets/img/bigProductImg.png";
import bigProductImg1 from "../assets/img/bigProductImg1.png";
import smallProduct1 from "../assets/img/smallProduct1.png";
import smallProduct2 from "../assets/img/smallProduct2.png";
import smallProduct3 from "../assets/img/smallProduct3.png";
import smallProduct4 from "../assets/img/smallProduct4.png";

const Products = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="canvas">
        <div className="circles">
          <div className="circle research"></div>
          <div className="circle design"></div>
        </div>
        <div className="overlay2"></div>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="w-full mb-6 lg:mb-0 text-center pb-8 relative z-10">
          <h1 className="sm:text-3xl lg:text-4xl text-2xl font-bold title-font mb-2 text-gray-900 uppercase ">
            Recents Products
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded mx-auto" />
        </div>
        <div className="flex flex-wrap md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={smallProduct1}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  Mobile Phones
                </h4>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={smallProduct2}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  LED TV
                </h4>
              </div>
            </div>
            <div className="md:p-2 p-1 w-full relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={bigProductImg}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  MacBook Air
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 ">
            <div className="md:p-2 p-1 w-full relative">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={bigProductImg1}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  Phones LED TV
                </h4>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={smallProduct3}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  MACBOOk
                </h4>
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={smallProduct4}
              />
              <div className="overlay">
                <h4 className="text-white  duration-300 absolute bottom-0 left-0 w-full text-center text-2xl font-medium uppercase ">
                  Mobile Phones
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
