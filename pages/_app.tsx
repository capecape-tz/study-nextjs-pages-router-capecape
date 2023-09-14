import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";
import { SWRConfig } from "swr";
import { fetcher } from "@/utils/fetcher";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
