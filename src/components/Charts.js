import React, { Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { toast } from "react-toastify";
import { useFetcher } from "../utils/axiosFetcher";
import { NoVisitedProducts } from "../DashboardCustomer/AdminDashboard/AdminHome";
import Loader from "../utils/Loader";

const Charts = () => {
  const loginID = sessionStorage.getItem("loginID");

  // USER VISITED PRODUCTS
  const {
    data: userVisitedProduct,
    isLoading: userVisitedProductLoading,
    error: userVisitedProductError,
  } = useFetcher(`/UserVisitedProduct/get-all?guid=${loginID}`);

  // USER VISITED PRODUCTS CHART-DATA
  const userVisitedChartData = new Map();

  userVisitedProduct?.model?.map((item) => {
    const keyword = item?.category?.name;

    if (userVisitedChartData.has(keyword)) {
      return userVisitedChartData.set(
        keyword,
        userVisitedChartData.get(keyword) + 1
      );
    }

    return userVisitedChartData.set(keyword, 1);
  });

  const userVisitedProductChartData = Array.from(
    userVisitedChartData,
    ([keyword, count]) => ({
      visitedProduct: keyword,
      count: count,
    })
  );

  // USER VISITED WEBSITE CHART-DATA
  const userSiteChartData = new Map();

  userVisitedProduct?.model?.map((item) => {
    const keyword = item?.site?.name;

    if (userSiteChartData.has(keyword)) {
      return userSiteChartData.set(keyword, userSiteChartData.get(keyword) + 1);
    }

    return userSiteChartData.set(keyword, 1);
  });

  const userVisitedSiteChartData = Array.from(
    userSiteChartData,
    ([keyword, count]) => ({
      visitedProduct: keyword,
      count: count,
    })
  );

  // USER SEARCHED PRODUCTS
  const {
    data: userProductSearch,
    isLoading: userProductSearchLoading,
    error: userProductSearchError,
  } = useFetcher("/ProductSearch/get-all");

  // USER SEARCHED PRODUCTS CHART-DATA
  const userSearchedChartData = new Map();

  userProductSearch?.model?.map((item) => {
    const keyword = item?.searchedKeyword;

    if (userSearchedChartData.has(keyword)) {
      return userSearchedChartData.set(
        keyword,
        userSearchedChartData.get(keyword) + 1
      );
    }

    return userSearchedChartData.set(keyword, 1);
  });

  const userSearchedProductChartData = Array.from(
    userSearchedChartData,
    ([keyword, count]) => ({
      searchedKeyword: keyword,
      count: count,
    })
  );

  if (userProductSearchError) {
    return toast.error("An error occured");
  }

  if (userVisitedProductError) {
    return toast.error("An error occured");
  }

  return (
    <div className="charts">
      <Fragment>
        {userProductSearchLoading ? (
          <Loader />
        ) : !userProductSearchLoading &&
          userProductSearch?.model?.length < 1 ? (
          <NoVisitedProducts />
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-center">USER SEARCHED PRODUCTS</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={userSearchedProductChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="searchedKeyword" />
                <YAxis />
                <Tooltip shared={false} trigger="click" />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </Fragment>

      <Fragment>
        {userVisitedProductLoading ? (
          <Loader />
        ) : !userVisitedProductLoading &&
          userVisitedProduct?.model?.length < 1 ? (
          <NoVisitedProducts />
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-center">USER VISITED PRODUCTS</h2>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={userVisitedProductChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="visitedProduct" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </Fragment>

      <Fragment>
        {userVisitedProductLoading ? (
          <Loader />
        ) : !userVisitedProductLoading &&
          userVisitedProduct?.model?.length < 1 ? (
          <NoVisitedProducts />
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="text-center">USER VISITED SITES</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={userVisitedSiteChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="visitedProduct" />
                <YAxis />
                <Tooltip shared={false} trigger="click" />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </Fragment>
    </div>
  );
};

export default Charts;
