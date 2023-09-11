import { useState, useEffect, useCallback } from "react";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

type State = {
  data: Post[];
  loading: boolean;
  error: string | null;
};

export default function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error();
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (e) {
      setState((prevState) => {
        return {
          ...prevState,
          error: "エラーが発生したため、データの取得に失敗しました。",
          loading: false,
        };
      });
      // setError("エラーが発生したため、データの取得に失敗しました。");
      //} finally {
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");
  if (state.loading) {
    return <div>ローディング中です</div>;
  }

  if (state.error) {
    return <div>{state.error}</div>;
  }

  if (state.data.length === 0) {
    return <div>データは空です。</div>;
  }

  return (
    <ol>
      {state.data.map((post, pIndex) => {
        return (
          <li key={post.id}>
            {post.id}:{post.title}
          </li>
        );
      })}
    </ol>
  );
}
