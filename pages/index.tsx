import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { RefreshButton } from "@/components/RefreshButton";

import { ReactNode } from "react";
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
  children: ReactNode;
};

export default function Index(props: Props) {
  return (
    <>
      <Header></Header>
      <h1 className="text-xl">Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIをいろいろたたいてみるよ！</p>
      <RefreshButton></RefreshButton>
    </>
  );
}
