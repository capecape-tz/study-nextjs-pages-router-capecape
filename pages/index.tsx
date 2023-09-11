import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Navi } from "@/components/Navi";

import { useState, useEffect, useCallback, ReactNode } from "react";
import Head from "next/head";
import { resolveAny } from "dns/promises";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  count: number;
  doubleCount: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (e: any) => void;
  handleAdd: () => void;
  page: string;
  children: ReactNode;
};

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export default function Home(props: Props) {
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

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Navi></Navi>
      {loading ? (
        <div>ローディング中です</div>
      ) : error ? (
        <div>{error}</div>
      ) : posts.length > 0 ? (
        <ol>
          {posts.map((post, pIndex) => {
            return (
              <li key={post.id}>
                {post.id}:{post.title}
              </li>
            );
          })}
        </ol>
      ) : (
        <div>データは空です。</div>
      )}
    </div>
  );
}
