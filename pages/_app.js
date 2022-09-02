import React from "react";
import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";

if (typeof window === "object") {
  // mark that the app was server-side rendered
  window.__WAS_SSR = true;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
