import axios from "axios";
import { trackEvent } from "../utils/util";
import endpoints from "./Endpoints";

const axiosClient = axios.create({
  baseURL: endpoints.baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization:'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJlbnRlcnRhaW5tZW50LWRldi5lbmRwb2ludHMuaWNvbmljLXJ1bGVyLTM2MzcwMi5jbG91ZC5nb29nIiwiZXhwIjoxNjY5NzM4NzU2LCJpc3MiOiJlbnRlcnRhaW5tZW50LXJlZ2lzdHJ5QGljb25pYy1ydWxlci0zNjM3MDIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20ifQ.rMKHFA7ab62KQm9biqSqXGcUJv4my62Z_pYLdz7tGaJ-bxMK5rgdPUuGT7PVBkQbWhyKcVk91nB7ZNb3IMoZVKVhNML3uyfgrEDNjIH4rmjkycDfn14742l3nXqdHxeV1Ia4V1oJkYIFUIam1WaaXXbpy31g7ZkNcy_rTBs9h_bw3MUfPacStbs-bn8FY8fGGOY6Zd4WcL2T-IDDFtcVdgOX1nTjEOYxvBACNbf6veOR64ITL94JjxzalEpOxo_5055ZLo0XEJkc_U7v3K8BKMnoIRIHXjId30ZFWKZqWM9RhQphhoAgkxVpWUHanXojs-EE5l4zawmc1Gi7sLlD8w'
  },
  timeout:5000,
});

// axiosClient.interceptors.response.use(
//   function (response) {
//     const url = response.config.baseURL
//       ? response.config.baseURL + response.config.url
//       : response.config.url;
//     const properties = {
//       requestUrl: url,
//       requestHeader: response.config.headers,
//       requestBody: response.config.data,
//       responseBody: response.data,
//       responseCode: response.status,
//       HttpMethod: response.config.method,
//     };
//     trackEvent(url, properties);
//     return response;
//   },
//   function (error) {
//     const properties = {
//       responseHeader: error.request.responseHeaders,
//       responseUrl: error.request.responseURL,
//       requestHeader: error.request._headers,
//       // requestBody: error.request._response,
//       responseBody: error.request._response,
//       responseCode: error.request.status,
//       HttpMethod: error.request._method,
//     };
//     trackEvent(error.request.responseURL, properties);
//     throw error;
//   }
// );

export default axiosClient;
