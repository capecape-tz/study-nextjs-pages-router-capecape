import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { User } from "@/types/User";
import useSWRImmutable from "swr/immutable";
import { API_URL } from "@/utils/const";

export function useUser(id: number | null) {
  const { data, error, isLoading } = useSWRImmutable<User>(
    id ? `${API_URL}/users/${id}` : null
  );
  return {
    data,
    error,
    isLoading,
  };
}
