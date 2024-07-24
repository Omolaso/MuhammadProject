import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { toast } from "react-toastify";
import Loader from "../../utils/Loader";
import { axiosFetcher, useFetcher } from "../../utils/axiosFetcher";
import { shuffleArray } from "../../Pages/Category/CategoryComponent";

const AdminProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 0,
    row: 10,
    searchedProductName: "",
  });

  const currentPage = searchParams.get("page");
  const rowsPerPage = searchParams.get("row");
  const searchedProductName = searchParams.get("searchedProductName");

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useFetcher(
    `/Product/get-all?page=${Number(currentPage)}&pageSize=${Number(
      rowsPerPage
    )}`
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

  const handleChangeRowsPerPage = (event) => {
    setSearchParams(
      (prevParam) => {
        prevParam.set("row", `${parseInt(event.target.value, 10)}`);
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
        `/Product/get-all?name=${searchedProductName}&page=${currentPage}&pageSize=${rowsPerPage}`
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
    const shuffledArray = shuffleArray(products?.model?.data);

    setAllProducts(shuffledArray);
  }, [products]);

  if (productsError) {
    return toast.error("An error occured while loading products");
  }

  return (
    <section className="main-container flex flex-col gap-4 w-full min-h-screen">
      <div className="flex flex-row items-center justify-between gap-3 flex-wrap">
        <h3>PRODUCTS</h3>
        <div className="flex flex-row items-stretch gap-3 h-8 bg-transparent duration-500 ease-linear">
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
            className="p-2 bg-transparent border border-white outline-0"
          />
          <button type="button" onClick={() => SearchProduct()}>
            Search
          </button>
        </div>
      </div>

      {productsLoading ? (
        <Loader />
      ) : (
        <div className="flex-1 flex flex-col justify-between w-full">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="data table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="center">Product Name</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Site Name</TableCell>
                  <TableCell align="center">Redirection Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allProducts?.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product?.category?.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="whitespace-nowrap max-w-4 text-ellipsis overflow-hidden"
                    >
                      {product?.name}
                    </TableCell>
                    <TableCell align="center">${product?.price}</TableCell>
                    <TableCell align="center">{product?.site?.name}</TableCell>
                    <TableCell align="center">
                      <a
                        href={product?.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Here
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={products?.model?.totalPages || 0}
            page={Number(currentPage)}
            rowsPerPage={Number(rowsPerPage)}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ color: "white" }}
          />
        </div>
      )}
    </section>
  );
};

export default AdminProducts;
