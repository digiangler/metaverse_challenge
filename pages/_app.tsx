import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  const app = process.env.NEXT_PUBLIC_APP_ID as string;
  const url = process.env.NEXT_PUBLIC_SERVER_URL as string;

  return (
    <MoralisProvider appId={app} serverUrl={url}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
