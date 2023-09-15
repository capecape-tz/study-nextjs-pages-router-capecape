import Link from "next/link";
import { useComments } from "@/hooks/useFetchArray";

export function Comments() {
  const { data, error, isLoading, isEmpty } = useComments();

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
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li className="border-b pb-2 group" key={comment.id}>
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              <div className="block rounded group-hover:text-blue-500">
                {comment.body}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
