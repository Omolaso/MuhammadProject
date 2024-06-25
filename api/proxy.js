/* eslint-disable import/no-anonymous-default-export */
import { createProxyMiddleware } from "http-proxy-middleware";
import { projectBaseUrl } from "../src/utils/axiosFetcher";

export default function (req, res) {
  const proxy = createProxyMiddleware({
    target: projectBaseUrl,
    changeOrigin: true,
  });

  proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(`Request '${req.url}' is not proxied!`);
  });
}
