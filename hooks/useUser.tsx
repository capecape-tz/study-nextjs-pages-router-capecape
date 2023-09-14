import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { User } from "@/types/User";
import useSWRImmutable from "swr/immutable";

export function useUser(id: number | null) {
  const { data, error, isLoading } = useSWRImmutable<User>(
    id ? `https://jsonplaceholder.typicode.com/users/${id}` : null
  );
  return {
    data,
    error,
    isLoading,
  };
}
