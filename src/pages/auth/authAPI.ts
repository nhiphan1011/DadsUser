import { gqlClient, wrapper } from "services/apolloService";

import { checkUserGraph, getNonceGraph, loginUserGraph, registerUserGraph } from "./authGraph";
import { IWeb3Token } from "./interface/redux";

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
        gqlClient.request(registerUserGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "registerUser",
      "mutation"
    );
  },
  // loginUser: (variables: IWeb3Token, requestHeaders?: any) => {
  //   return wrapper(
  //     (wrappedRequestHeader: any) =>
  //       gqlClient.request(loginUserGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
  //     "loginUser",
  //     "mutation"
  //   );
  // },
  getNonce: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlClient.request(getNonceGraph, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "getNonce",
      "mutation"
    );
  },
};

export default authAPI;
