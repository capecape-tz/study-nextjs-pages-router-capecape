import Link from "next/link";

import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  naviText: string;
};
const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "top",
    naviText: "トップページ",
  },
  {
    href: "/posts",
    label: "Posts",
    naviText: "ポスト一覧",
  },
  {
    href: "/comments",
    label: "Comments",
    naviText: "コメント一覧",
  },
  {
    href: "/users",
    label: "Users",
    naviText: "ユーザ一覧",
  },
];

const ACTIVE_ROUTE = "inline-block px-4 py-2 text-xl text-gray-300";
const INACTIVE_ROUTE =
  "inline-block px-4 py-2 text-gray-500 focus:text-blue-500 text-xl hover:text-blue-500";

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="flex justify-center w-full p-2 border-b">
        {NAV_ITEMS.map((item) => (
          <Link href={item.href} key={item.href}>
            <div
              className={item.href === pathname ? ACTIVE_ROUTE : INACTIVE_ROUTE}
            >
              {item.naviText}
            </div>
          </Link>
        ))}
      </header>
      <div className="py-4"></div>
    </>
  );
}
