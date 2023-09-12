import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/utils/fetcher";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export function usePost() {
  const router = useRouter();
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = useSWR<Post>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useSWR<User>(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post.userId}`
      : null,
    fetcher
  );
  return {
    post,
    user,
    error: postError || userError,
    isLoading: postIsLoading || userIsLoading,
  };
}
