import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

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
    <div>
      <Header></Header>
      <h1>Next.jsで学ぶ</h1>
      <Main page="about"></Main>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}
