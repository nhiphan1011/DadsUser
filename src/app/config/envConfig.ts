const development = process!.env.NODE_ENV !== "production";

export const ENV_CONFIG = {
  apiURL: development ? process!.env.REACT_APP_API_URL_PRODUCTION : process!.env.REACT_APP_API_URL_DEVELOPMENT,
  restURL: process.env.REACT_APP_API_URL_REST,
};

// export const APOLLO_LINK = "https://news-api.dadsnetwork.co/gql/v1";
