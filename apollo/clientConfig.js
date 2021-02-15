import { InMemoryCache } from "apollo-cache-inmemory";
export default function (context) {
  return {
    httpLinkOptions: {
      uri: "https://hasura-tutorial1.herokuapp.com/v1/graphql",
      credentials: "same-origin",
    },
    // cache: new InMemoryCache(),
    // wsEndpoint: "ws://hasura-tutorial1.herokuapp.com/v1/graphql",
    context,
  };
}
