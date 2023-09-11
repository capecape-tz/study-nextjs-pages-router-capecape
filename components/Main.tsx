import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { ReactNode, useState, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

type Item = {
  id: number;
  itemHref: string;
  itemTitle: string;
  itemDescription: string;
};

const INIT_ITEMS: Item[] = [
  {
    id: 0,
    itemHref:
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    itemTitle: "ドキュメント!  ",
    itemDescription: "ドキュメントです!!",
  },
  {
    id: 1,
    itemHref:
      "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    itemTitle: "学習 ",
    itemDescription:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    id: 2,
    itemHref:
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    itemTitle: "Templates",
    itemDescription:
      "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  {
    id: 3,
    itemHref:
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    itemTitle: "Deploy ",
    itemDescription:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

type Props = {
  page: string;
  children?: ReactNode;
};

export function Main(props: Props) {
  const [items, setItems] = useState<Item[]>(INIT_ITEMS);
  const handleReduce = useCallback(() => {
    setItems((items) => {
      return items.filter((item, index) => 0 !== index);
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline page={props.page} handleReduce={handleReduce}>
        <code className="flex min-h-screen flex-col items-center justify-between p-24">
          {items.length}
        </code>
      </Headline>
      <Links items={items} handleReduce={handleReduce} />
      <div>アイテムの数：{items.length}</div>
    </main>
  );
}
