import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-primary mb-4">
          Oops! The page you're looking for isn't here.
        </p>
        <Link to="/" className="text-primary underline">
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
