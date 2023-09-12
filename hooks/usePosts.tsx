import useSWR from "swr";
import { Post } from "@/hooks/usePost";
import { fetcher } from "@/utils/fetcher";

export function usePosts() {
  const { data, error, isLoading } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  return { data, error, isLoading };
}
