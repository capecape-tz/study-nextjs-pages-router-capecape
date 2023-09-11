import { Navi } from "./Navi";
import { ReactNode } from "react";

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
