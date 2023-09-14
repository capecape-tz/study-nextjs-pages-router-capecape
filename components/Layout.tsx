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
      <div className="flex flex-col items-center m-0 max-w-full min-h-screen px-2">
        {props.children}
      </div>
    </>
  );
}
