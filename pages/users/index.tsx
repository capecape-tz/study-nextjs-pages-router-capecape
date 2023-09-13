import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

import { ReactNode } from "react";
import Users from "@/components/Users";

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
    <>
      <Header></Header>
      <Users></Users>
    </>
  );
}
