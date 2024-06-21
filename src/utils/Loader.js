import React from "react";
import { FiLoader } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[3rem]">
      <FiLoader className="animate-spin" />
    </div>
  );
};

export default Loader;
