import { useReducer, useEffect, useCallback } from "react";

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

type Action = {
  type: "end" | "error" | null;
  data: Post[];
  error: string | null;
};

const initialState: State = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: {
      throw new Error("action typeがありませんでした");
    }
  }
};

export default function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error();
      }
      const json = await res.json();
      dispatch({ type: "end", data: json, error: null });
    } catch (e) {
      dispatch({
        type: "error",
        data: [],
        error: "エラーが発生したため、データの取得に失敗しました。",
      });
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
