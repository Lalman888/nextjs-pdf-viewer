import "../styles/globals.css";
import type { AppProps } from "next/app";
import DismissableToast from "@components/toast/DismissableToast";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
