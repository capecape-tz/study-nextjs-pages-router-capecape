import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

import { JsxElement } from "typescript";
import { ReactElement } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const page: string = "about";

  const codeComp: ReactElement = (
    <code className="font-mono font-bold">アバウトはpages/{page}</code>
  );

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline
        title="アバウトページ"
        page={page}
        description="アバウトページです。"
        codeComp={codeComp}
        onClick={(): void => {
          console.log("testです");
        }}
      />
      <Links />
      <Footer></Footer>
    </main>
  );
}
