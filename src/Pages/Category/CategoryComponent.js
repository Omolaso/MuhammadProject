import React from "react";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const CategoryComponent = (props) => {
  const shuffledArray = shuffleArray(props?.categoryData);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="mobilePhoneHeading flex flex-row items-center justify-between">
        <div className="w-1/2">
          <h2 className="text-sky-950 text-xl title-font font-bold">
            {props.categoryHeader}
          </h2>
        </div>
        <div className="w-1/2 text-end">
          <Link
            to={props.categoryPage}
            className=" text-indigo-500 inline-flex items-center text-xl"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 w-full">
        {shuffledArray?.slice(0, 3)?.map((product, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-bold">
              {product?.site?.name}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product?.name}
            </h2>
            <p className="mt-1">
              {product?.price.charAt[0] === "$" ? " " : "$"}
              {product?.price}
            </p>
            <a
              href={product?.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
