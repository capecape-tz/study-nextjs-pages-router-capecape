import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Comment } from "@/types/Comment";
import { Post } from "@/types/Post";
import { User } from "@/types/User";

const useFetch: <T>(url: string | null) => {
  data: T[];
  error: any;
  isLoading: boolean;
  isEmpty: boolean;
} = (url: string | null) => {
  const {
    data: p,
    error,
    isLoading,
  } = useSWR(url !== null ? url : null, fetcher);
  const data = p === undefined ? null : p;
  return { data: data, error, isLoading, isEmpty: data && data.length === 0 };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export function useComments() {
  return useFetch<Comment>(`${API_URL}/comments`);
}

export function useCommentsByPostId(postId: number | null) {
  return useFetch<Comment>(`${API_URL}/comments?postId=${postId}`);
}

export function usePosts() {
  return useFetch<Post>(`${API_URL}/posts`);
}

export function useUsers() {
  return useFetch<User>(`${API_URL}/users/`);
}
