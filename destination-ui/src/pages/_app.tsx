import {
  ChakraProvider,
  ColorModeProvider,
  useWhyDidYouUpdate,
} from "@chakra-ui/react";

import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import Layout from "../components/Layout";
import theme from "../styles/theme";

function DestinationApp({ Component, pageProps }) {
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/api/graphql",
    credentials: "same-origin",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default DestinationApp;
