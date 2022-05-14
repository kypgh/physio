import "/styles/generic.css";
import Head from "next/head";
import DefaultLayout from "../components/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demetris Ioannou</title>
        <link rel="shortcut icon" href="/images/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
