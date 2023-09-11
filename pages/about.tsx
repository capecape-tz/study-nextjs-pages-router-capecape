import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

import { ReactElement, ReactNode, useState, useCallback } from "react";
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

export default function About(props: Props) {
  const { count, doubleCount, isShow, handleClick, handleDisplay } = props;
  const { text, array, handleChange, handleAdd } = props;

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={handleClick}>count:{count}</button>
      <h1>{doubleCount}</h1>
      <button onClick={handleDisplay}>
        display:{isShow ? <>表示</> : <>非表示</>}
      </button>
      {isShow ? <div>OK:{count}</div> : null}
      <input type="text" value={text} onChange={handleChange}></input>
      <button onClick={handleAdd}> addする</button>
      <ul>
        {array.map((item) => {
          return <ol key={item}>{item}</ol>;
        })}
      </ul>

      <Main page="about"></Main>
      <button onClick={() => window.location.reload()}>Refresh</button>
      <Footer></Footer>
    </main>
  );
}
