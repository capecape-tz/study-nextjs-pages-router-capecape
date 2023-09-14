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
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              {comment.id}:{comment.postId}:{comment.name}:{comment.email}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
