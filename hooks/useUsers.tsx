import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { User } from "@/types/User";

export function useUsers() {
  const { data, error, isLoading } = useSWR<User[]>(
    `https://jsonplaceholder.typicode.com/users/`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
}
