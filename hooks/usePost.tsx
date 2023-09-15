import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Post } from "@/types/Post";
import { API_URL } from "@/utils/const";

export function usePost(id: number | null) {
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR<Post>(id ? `${API_URL}/posts/${id}` : null, fetcher);

  return {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  };
}
