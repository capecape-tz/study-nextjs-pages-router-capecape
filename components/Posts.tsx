import Link from "next/link";
import { usePosts } from "@/hooks/useFetchArray";

export default function Posts() {
  const { data, error, isLoading, isEmpty } = usePosts();

  console.log("aaa");
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
    <ul className="space-y-4">
      {data.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="group">
              <h1 className="text-xl font-bold group-hover:text-blue-500">
                {post.title}
              </h1>
              <p className="text-lg text-gray-500 group-hover:text-blue-300">
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
