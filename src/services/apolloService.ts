import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";

import { ENV_CONFIG } from "app/config/envConfig";

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

export const gqlClient = new GraphQLClient(ENV_CONFIG.apiURL as string);
export const gqlPrivateClient = new GraphQLClient(ENV_CONFIG.apiURL as string, {
  headers: {
    authorization: `Bearer ${Cookies.get("br_tk")}`,
  },
});
// export const gqlClient = new GraphQLClient("https://sv-user.dadsnetwork.co/gql/v1");

export const wrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
