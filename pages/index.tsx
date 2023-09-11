import { Inter } from "next/font/google";
import { Navi } from "@/components/Navi";

import { ReactNode } from "react";
import Head from "next/head";
import Posts from "@/components/Posts";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  count: number;
  doubleCount: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (e: any) => void;
  handleAdd: () => void;
  page: string;
  children: ReactNode;
};

export default function Home(props: Props) {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Navi></Navi>
      <Posts></Posts>
    </div>
  );
}
