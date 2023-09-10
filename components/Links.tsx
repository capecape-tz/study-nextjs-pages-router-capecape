import Image from "next/image";
import { Inter } from "next/font/google";
import { List } from "postcss/lib/list";

type Item = {
  id: number;
  itemHref: string;
  itemTitle: string;
  itemDescription: string;
};

const items: Array<Item> = [
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

export function Links() {
  // console.log(items);

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <div key={item.itemHref}>
              <a
                href={item.itemHref}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  ■ {item.itemTitle}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  {item.itemDescription}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
