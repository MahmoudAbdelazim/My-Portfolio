import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../public/css/styles.css";
import { useEffect } from "react";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Mahmoud Abdelazim</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
