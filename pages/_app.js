import React from "react";
import Head from "next/head";
import RootLayout from "../components/layout/Layout";
import "../globals.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AI GPT APP</title>
        <link rel="icon" href="/botImage.png" />
      </Head>
      <RootLayout className="bg-gradient-to-br from-yellow-200 to-green-400">
        {" "}
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
};

export default MyApp;
