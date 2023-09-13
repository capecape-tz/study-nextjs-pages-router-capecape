import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Post } from "@/types/Post";

export function usePost(id: number | null) {
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR<Post>(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  };
}
