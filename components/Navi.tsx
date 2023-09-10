import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "text-gray-100 bg-gray-700";
const INACTIVE_ROUTE = "text-gray-500 hover:text-gray-300 hover:bg-gray-700";

export function Navi() {
  const pathname = usePathname();
  return (
    <ul>
      <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        <Link href="/">トップへ移動する</Link>
      </li>
      <li className={pathname === "/about" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
        <Link href="/about">aboutへ移動する</Link>
      </li>

      <li
        className={
          pathname === "/aboutPropsChildren" ? ACTIVE_ROUTE : INACTIVE_ROUTE
        }
      >
        <Link href="/aboutPropsChildren">about2へ移動する</Link>
      </li>
    </ul>
  );
}
