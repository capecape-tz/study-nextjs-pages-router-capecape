import { useState, useEffect, useCallback } from "react";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error();
      }
      const json = await res.json();
      setPosts(json);
    } catch (e) {
      setError("エラーが発生したため、データの取得に失敗しました。");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");
  if (loading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (posts.length === 0) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {posts.map((post, pIndex) => {
        return (
          <li key={post.id}>
            {post.id}:{post.title}
          </li>
        );
      })}
    </ol>
  );
}
