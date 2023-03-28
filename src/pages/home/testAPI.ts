import axios, { AxiosResponse } from "axios";

// import { gqlClient, wrapper } from "@services/apolloService";
// import axiosClient from "@services/axiosClients";

// import { getAllPostQuery, GET_CATEGORIES, GET_POSTS_BYCATE, GET_POST_BY_ID } from "./newsGraph";
// import { INews } from "./interface/newsInterface";

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type VARIBLES = Exact<{ [key: string]: never }>;

const NewsAPI = {
//   newslist: (variables?: any, requestHeaders?: any) => {
//     return wrapper(
//       (wrappedRequestHeader: any) =>
//         gqlClient.request(getAllPostQuery, variables, { ...requestHeaders, ...wrappedRequestHeader }),
//       "getPostList",
//       "query"
//     );
//   },
//   newsDetail: (variables?: any, requestHeaders?: any) => {
//     return wrapper(
//       (wrappedRequestHeader: any) =>
//         gqlClient.request(GET_POST_BY_ID, variables, { ...requestHeaders, ...wrappedRequestHeader }),
//       "getDetail",
//       "query"
//     );
//   },
//   newsCategories: (variables?: any, requestHeaders?: any) => {
//     return wrapper(
//       (wrappedRequestHeader: any) =>
//         gqlClient.request(GET_CATEGORIES, variables, { ...requestHeaders, ...wrappedRequestHeader }),
//       "getCategories",
//       "query"
//     );
//   },
//   newsByCateId: (variables: any, requestHeaders?: any) => {
//     return wrapper(
//       (wrappedRequestHeader: any) =>
//         gqlClient.request(GET_POSTS_BYCATE, variables, { ...requestHeaders, ...wrappedRequestHeader }),
//       "getPostByCateId",
//       "query"
//     );
//   },
};



export default NewsAPI;
