import useSWR from "swr";
import { Comment } from "@/types/Comment";
import { fetcher } from "@/utils/fetcher";

export function useComments() {
  const { data, error, isLoading } = useSWR<Comment[]>(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return { data, error, isLoading };
}
