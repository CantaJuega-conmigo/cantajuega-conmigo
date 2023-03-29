import Navbar from "@/components/global/Navbar";
import { wrapper } from "@/context/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CantaJuega Conmigo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-white w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default wrapper.withRedux(App);
