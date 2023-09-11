import Image from "next/image";
import { ReactElement } from "react";
import { Navi } from "./Navi";
import { useState, ReactNode } from "react";

type Props = {
  page: string;
  handleReduce: () => void;
  children: ReactNode;
};

export function Headline(props: Props) {
  return (
    <>
      <Navi></Navi>
      <button onClick={props.handleReduce}>減らす（HeadLine!!!）</button>
    </>
  );
}
