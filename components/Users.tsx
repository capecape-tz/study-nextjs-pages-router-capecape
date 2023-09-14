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
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.id}:{user.name}:{user.email}:{user.phone}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
