import axiosClient, { restClient } from "services/axiosClients";
import { gqlClient, wrapper } from "services/apolloService";

import { checkUserGraph, getNonceGraph, loginUserGraph, registerUserGraph, REGISTER_FORM } from "./authGraph";

import { NAuthAPI } from "./interface";

// const authWrapper =

const authAPI = {
  checkUser: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(checkUserGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "checkUser",
      "query"
    );
  },
  registerUser: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(
          registerUserGraph,
          {
            addInput: {
              ...variables,
            },
          },
          { ...requestHeaders, ...wrappedRequestHeader }
        ),
      "registerUser",
      "mutation"
    );
  },
  registerWithForm: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(
          REGISTER_FORM,
          {
            addInput: {
              ...variables,
            },
          },
          { ...requestHeaders, ...wrappedRequestHeader }
        ),
      "registerWithForm",
      "mutation"
    );
  },
  loginUser: (variables: NAuthAPI.ILogin, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(loginUserGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "loginUser",
      "mutation"
    );
  },
  getNonce: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(getNonceGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "getNonce",
      "mutation"
    );
  },

  getUserGoogle: () => {
    return restClient.get("/auth/google/url");
  },
};

export default authAPI;
