import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import { toast } from "react-toastify";
import { useFetcher, axiosFetcher } from "../../../utils/axiosFetcher";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Loader from "../../../utils/Loader";

export const NoData = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[3rem]">
      <p>No data available</p>
    </div>
  );
};

const SubCategoryComponent = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 0,
    searchedProductName: "",
  });

  const currentPage = searchParams.get("page");
  const searchedProductName = searchParams.get("searchedProductName");

  const {
    data: product,
    error,
    isLoading,
  } = useFetcher(
    `/Product/get-all?categoryId=${
      props?.categoryId
    }&page=${currentPage}&pageSize=${15}`
  );

  const handlePageChange = (event, value) => {
    setSearchParams(
      (prevParam) => {
        prevParam.set("page", `${value}`);
        return prevParam;
      },
      { replace: true }
    );
  };

  const SearchProduct = async () => {
    if (!searchedProductName) {
      toast.error("Search input cannot be empty");
      return;
    }

    try {
      const res = await axiosFetcher.get(
        `/Product/get-all?name=${searchedProductName}&page=${currentPage}&pageSize=${10}`
      );
      const searchedResponse = await res.data;
      setAllProducts(searchedResponse);

      setSearchParams(
        (prevParam) => {
          prevParam.set("page", `${searchedResponse?.model?.page}`);
          prevParam.set("row", `${10}`);
          return prevParam;
        },
        { replace: true }
      );
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    setAllProducts(product);
  }, [product]);

  if (error) {
    toast.error("An error occured");
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : !isLoading && product?.model?.data?.length < 1 ? (
        <NoData />
      ) : (
        <section className="flex flex-col items-center w-full text-gray-600 min-h-[50vh] md:min-h-[70vh]">
          <div className="container mx-auto flex flex-col items-center p-5 w-full">
            <div className="flex flex-row items-center justify-between gap-3 flex-wrap w-full">
              <h2 className="flex-1 text-sky-950 text-xl title-font font-bold">
                {props.productHeader}
              </h2>

              <div className="flex flex-row items-stretch gap-1">
                <input
                  value={searchedProductName || ""}
                  onChange={(e) =>
                    setSearchParams(
                      (prevParam) => {
                        prevParam.set("searchedProductName", e.target.value);
                        return prevParam;
                      },
                      { replace: true }
                    )
                  }
                  placeholder="Search by name"
                  className="p-2 bg-transparent border border-gray-400 text-black outline-0 rounded"
                />
                <button
                  type="button"
                  onClick={() => SearchProduct()}
                  className="inline-flex text-white-700 bg-gray-400 border-0 text-sky-950 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Search
                </button>
              </div>
            </div>

            {allProducts?.model?.data?.length < 1 && <NoData />}

            <div className="flex flex-col gap-4 w-full">
              {allProducts?.model?.data?.map((item, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-bold">
                    {item?.site?.name}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item?.name}
                  </h2>
                  <p className="mt-1">
                    {item?.price.charAt[0] === "$" ? " " : "$"}
                    {item?.price}
                  </p>
                  <a
                    href={item?.link}
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

          {product?.model?.data?.length > 0 && (
            <Pagination
              count={allProducts?.model?.totalPages}
              page={Number(currentPage)}
              onChange={handlePageChange}
            />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default SubCategoryComponent;
