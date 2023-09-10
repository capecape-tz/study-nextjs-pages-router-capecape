import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { HeadlinePropsChildren } from "@/components/HeadlinePropsChildren";

import { JsxElement } from "typescript";
import { ReactElement } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function about2() {
  const page: string = "about";

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <HeadlinePropsChildren
        title="アバウトページ"
        page={page}
        description="アバウトページです。"
      >
        <code className="font-mono font-bold">
          ページの名称をchildrenで渡す。pages/{page}
        </code>
      </HeadlinePropsChildren>
      <Links />
      <Footer></Footer>
    </main>
  );
}
