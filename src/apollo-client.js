import ApolloClient from "apollo-boost";
import config from "src/config";

const apolloClient = new ApolloClient({
  uri: config.api.url,
  headers: {
    Authorization: `bearer ${config.api.token}`
  }
});

export default apolloClient;