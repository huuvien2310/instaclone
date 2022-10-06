import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const headers = { "x-hasura-admin-secret": "T3MyXdKn0U931SOymgDWBVPBkdtThQ14lLk5M6wtjtC7CZWrMieCmHiEAXcQWAK4" };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://light-fox-58.hasura.app/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
