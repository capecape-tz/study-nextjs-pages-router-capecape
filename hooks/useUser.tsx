import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { User } from "@/types/User";

export function useUser(id: number | null) {
  const { data, error, isLoading } = useSWR<User>(
    id ? `https://jsonplaceholder.typicode.com/users/${id}` : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
}
