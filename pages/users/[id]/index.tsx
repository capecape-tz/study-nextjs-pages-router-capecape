import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import User from "@/components/User";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  //ユーザー情報の取得
  const USER_API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(USER_API_URL);
  const userData = await user.json();
  //ユーザーの投稿の取得
  const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";
  const posts = await fetch(USER_API_URL);
  const postsData = await posts.json();

  return {
    props: {
      fallback: {
        [USER_API_URL]: userData,
        [POSTS_API_URL]: postsData,
      },
    },
  };
};

const UserId = (props: any) => {
  const { fallback } = props;
  const router = useRouter();
  const id: number | null = Number(router.query.id)
    ? Number(router.query.id)
    : null;

  return (
    <SWRConfig value={{ fallback }}>
      <Header></Header>
      <User id={id}></User>
    </SWRConfig>
  );
};

export default UserId;
