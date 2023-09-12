import Link from "next/link";
import { usePathname } from "next/navigation";

// const ACTIVE_ROUTE = "";
// const INACTIVE_ROUTE = "";

const ACTIVE_ROUTE = "px-4 py-4 text-gray-100 bg-gray-500";
const INACTIVE_ROUTE =
  "px-4 py-4 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

type NavItem = {
  href: string;
  label: string;
  naviText: string;
};
const NAV_ITEMS: NavItem[] = [
  {
    href: "/posts",
    label: "Posts",
    naviText: "Postへ移動する",
  },
  {
    href: "/",
    label: "top",
    naviText: "トップページへ移動する",
  },
];

export function Navi() {
  const pathname = usePathname();
  return (
    <ul className="bg-red-100 border-8 border-red-900">
      {NAV_ITEMS.map((item) => (
        <Link href={item.href} key={item.href}>
          <li
            className={pathname === item.href ? ACTIVE_ROUTE : INACTIVE_ROUTE}
          >
            {item.naviText}
          </li>
        </Link>
      ))}

      {/* <Link href="/posts">
        <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          トップへ移動する
        </li>
      </Link>

      <Link href="/about">
        <li className={pathname === "/about" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          aboutへ移動する
        </li>
      </Link> */}
    </ul>
  );
}
