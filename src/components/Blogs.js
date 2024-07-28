import React from "react";
import blogImage1 from "../assets/img/blogImage1.png";
import blogImage2 from "../assets/img/blogImage2.png";
import blogImage3 from "../assets/img/blogImage3.png";
import blogImage4 from "../assets/img/blogImage4.png";
const Blogs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mb-20 text-center">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-bold title-font mb-2 text-gray-900 uppercase">
              Latest Blogs
            </h1>
            <div className="h-1 w-20 bg-blue-500 rounded mx-auto" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={blogImage1}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Laptops
              </h2>
              <p className="leading-relaxed text-base">
                Portable and Affordable laptops
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={blogImage2}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                TVs
              </h2>
              <p className="leading-relaxed text-base">
                Varieties of smart TVs
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={blogImage3}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Smart Phones
              </h2>
              <p className="leading-relaxed text-base">
                Phones with extraordinary features
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={blogImage4}
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                MacBooks
              </h2>
              <p className="leading-relaxed text-base">Apple laptops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
