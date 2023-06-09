import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import store from "@/context/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CantaJuega Conmigo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-light w-full min-h-screen`}>
        <Navbar />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <Footer />
      </main>
    </>
  );
}

export default App;
