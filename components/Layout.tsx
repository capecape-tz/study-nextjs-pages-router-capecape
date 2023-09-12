import { ReactNode } from "react";
import Head from "next/head";
type Props = {
  children: ReactNode;
};

export function Layout(props: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Next.jsで学ぶReact講座を学習中</title>
      </Head>
      <div>{props.children}</div>
    </>
  );
}
