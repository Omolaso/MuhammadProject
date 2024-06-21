import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetcher } from "../utils/axiosFetcher";
import { toast } from "react-toastify";
import Loader from "../utils/Loader";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 350 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const DemoPaper = styled(Paper)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const RecommendationSlider = () => {
  const loginID = sessionStorage.getItem("loginID");

  const {
    data: recommendations,
    isLoading: recommendationsLoading,
    error: recommendationsError,
  } = useFetcher("/Product/get-recommendations");

  const allRecommendations = recommendations?.model;

  if (recommendationsError) {
    return toast.error("An error occured while loading products");
  }

  return (
    <section className="text-gray-600 body-font bg-sky-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mb-20 text-center">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl lg:text-4xl text-2xl font-bold title-font mb-2 text-gray-900 uppercase">
              Product Recommendations
            </h1>
            <div className="h-1 w-20 bg-blue-500 rounded mx-auto" />
          </div>
        </div>

        {recommendationsLoading ? (
          <Loader />
        ) : (
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            containerClass="container-with-dots"
            dotListClass=""
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            className="w-full py-4 min-h-full"
          >
            {allRecommendations?.map((item, index) => (
              <DemoPaper
                key={index}
                className="flex flex-col items-start justify-center gap-3 leading-relaxed mx-4"
              >
                <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {item?.site?.name}
                </h2>
                <h3 className="text-lg text-gray-900 font-medium title-font">
                  {item?.category?.name}
                </h3>
                <p className="text-base text-left">{item?.name}</p>
                <p>
                  {item?.price.charAt[0] === "$" ? " " : "$"}
                  {item?.price}
                </p>
                {loginID && (
                  <a
                    href={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Here
                  </a>
                )}
              </DemoPaper>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default RecommendationSlider;
