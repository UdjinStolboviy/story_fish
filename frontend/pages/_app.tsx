import type { AppProps } from "next/app";

//import { Provider } from "react-redux";

//import { store } from "@/store";

import { RootStoreProvider } from "../providers/RootStoreProvider";
import { NextPage } from "next";

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <Component {...pageProps} />;
    </RootStoreProvider>
  );
}

export default MyApp;
