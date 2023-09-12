import Link from "next/link";
import { usePosts } from "@/hooks/usePosts";

export default function Posts() {
  const { data, error, isLoading } = usePosts();

  console.log("aaa");
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (data === undefined) {
    console.log("test");
    console.log(data);
    return <div>データは空です。</div>;
  }
  console.log("test2");
  console.log(data);

  return (
    <ol>
      {data.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id}:{post.title}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
