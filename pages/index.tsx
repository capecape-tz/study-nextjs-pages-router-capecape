import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
// import { Main } from "@/components/Main";
import { MouseEvent, useState, useCallback, useEffect } from "react";

import { MouseEventHandler, ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = "foo";

  const [cape, setCape] = useState("cape");
  const addCape = useCallback(() => {
    if (cape.length < 35) {
      setCape((cape) => cape + " cape");
    }
  }, [cape]);

  const [isShow, setIsShow] = useState(true);
  const toggleShow = useCallback(() => setIsShow((isShow) => !isShow), []);

  // const handleClick = (e: any) => {
  //   console.log(foo);
  // };
  const handleClick = useCallback(() => {
    console.log(foo, "callback");
  }, []);

  const page: string = "index";

  const codeComp: ReactElement = (
    <code className="font-mono font-bold">インデックスはpages/{page}</code>
  );

  //userEffectを試す。下記のようなdomへの直接アクセスは、あまりよくない。
  useEffect(() => {
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    //アンマウント時の処理をコールバック
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [myArray, setMyArray] = useState([1, 2, 3]);
  const addMyArray = useCallback(() => {
    setMyArray((prevMyArray) => {
      return [...prevMyArray, prevMyArray.length + 1];
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={handleClick} className="py-2 px-4">
        onClickテストのボタン
      </button>
      <button
        onClick={function (e) {
          window.location.reload();
        }}
      >
        リロードする！
      </button>
      <button onClick={addCape}>{cape}</button>
      <button
        className="flex bg-cyan-700 py-2 px-4 rounded-md text-white hover:bg-cyan-900"
        onClick={toggleShow}
      >
        pepeを{isShow ? <div>非表示に</div> : <div>表示</div>}する
      </button>
      {isShow ? <div>pepe</div> : null}
      <button onClick={addMyArray}>myArray更新</button>
      <ul>
        {myArray.map((item) => (
          <li key={item}>・{item}</li>
        ))}
      </ul>

      <Headline
        title="トップページ"
        page="index"
        codeComp={codeComp}
        onClick={() => alert("テストです")}
      ></Headline>
      <Links />
      <Footer></Footer>
      {/* <Main page="index" /> */}
    </main>
  );
}
