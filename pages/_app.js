import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
// imported Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// imported Font Awesome Icons CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
