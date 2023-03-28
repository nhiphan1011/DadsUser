import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const link = createHttpLink({
  uri: "https://sv-user.dadsnetwork.co/gql/v1",
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

export default client;
