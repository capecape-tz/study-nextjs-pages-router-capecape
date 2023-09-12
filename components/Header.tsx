import Link from "next/link";
import { usePathname } from "next/navigation";

// const ACTIVE_ROUTE = "";
// const INACTIVE_ROUTE = "";

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
    naviText: "Postへ移動する",
  },
];

const ACTIVE_ROUTE = "px-4 py-2 text-gray-300";
const INACTIVE_ROUTE = "px-4 py-2 text-gray-500 hover:text-indigo-800";

export function Header() {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex justify-normal  bg-gray-100 shadow-md">
        <div className="flex justify-center  w-80">
          {NAV_ITEMS.map((item) => (
            <Link href={item.href} key={item.href}>
              <div
                className={
                  pathname === item.href ? ACTIVE_ROUTE : INACTIVE_ROUTE
                }
              >
                {item.naviText}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-4"></div>
    </div>
  );
}
