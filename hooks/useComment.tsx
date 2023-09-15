import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Comment } from "@/types/Comment";
import { API_URL } from "@/utils/const";

export function useComment(id: number | null) {
  const { data, error, isLoading } = useSWR<Comment>(
    id ? `${API_URL}/comments/${id}` : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
}
