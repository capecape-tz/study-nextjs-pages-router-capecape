import Link from "next/link";
import { useUsers } from "@/hooks/useFetchArray";

export default function Users() {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (isEmpty) {
    console.log("test");
    console.log(data);
    return <div>データは空です。</div>;
  }
  console.log("test2");
  console.log(data);

  return (
    <ul className="grid grid-cols-2 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <div className="block p-2 shadow rounded hover:bg-gray-100">
                <h1 className="text-xl font-bold">{user.name}</h1>
                <div className="text-lg truncate">{user.email}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
