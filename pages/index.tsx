import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const page: string = "index";

  const codeComp: ReactElement = (
    <code className="font-mono font-bold">インデックスはpages/{page}</code>
  );
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
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
