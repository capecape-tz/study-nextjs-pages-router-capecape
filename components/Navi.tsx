import Link from "next/link";
import { usePathname } from "next/navigation";

// const ACTIVE_ROUTE = "";
// const INACTIVE_ROUTE = "";

const ACTIVE_ROUTE = "px-4 py-4 text-gray-100 bg-gray-500";
const INACTIVE_ROUTE =
  "px-4 py-4 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

export function Navi() {
  const pathname = usePathname();
  return (
    <ul className="bg-red-100 border-8 border-red-900">
      <Link href="/">
        <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          トップへ移動する
        </li>
      </Link>

      <Link href="/about">
        <li className={pathname === "/about" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          aboutへ移動する
        </li>
      </Link>

      <Link href="/about2">
        <li className={pathname === "/about2" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
          aboutの2へ移動する
        </li>
      </Link>
    </ul>
  );
}
