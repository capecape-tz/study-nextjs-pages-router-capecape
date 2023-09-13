import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Comment } from "@/types/Comment";

export function useComment(id: number | null) {
  const { data, error, isLoading } = useSWR<Comment>(
    id ? `https://jsonplaceholder.typicode.com/comments/${id}` : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
}
