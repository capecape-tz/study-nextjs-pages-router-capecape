import useSWR from "swr";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    return []; //エラーのときは空データにしている。
  }
  const json = await response.json();
  return json;
};

export function usePosts() {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return { data, error, isLoading };
}
