import useSWR from "swr";
import axios from "axios";

export const projectBaseUrl = process.env.REACT_APP_BASE_URL;

export const axiosFetcher = axios.create({
  baseURL: encodeURI(projectBaseUrl),
});

export const fetcher = (url) => axiosFetcher.get(url).then((res) => res.data);

export const useFetcher = (path) => {
  const { data, error, isLoading } = useSWR(path, fetcher, {
    refreshInterval: 2000,
  });

  return {
    data,
    isLoading,
    error,
  };
};
