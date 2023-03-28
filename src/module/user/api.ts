import { gqlClient, gqlPrivateClient, wrapper } from "services/apolloService";

import { MUTATION_INFO_USERS } from "module/user";

export const USER_API = {
  submitUserr: (variables?: any, requestHeaders?: any) => {
    return wrapper(
      (wrappedRequestHeader: any) =>
        gqlPrivateClient.request(MUTATION_INFO_USERS, variables, { ...requestHeaders, ...wrappedRequestHeader }),
      "submitUser",
      "mutation"
    );
  },
};
