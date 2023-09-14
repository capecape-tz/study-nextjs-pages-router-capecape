import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import User from "@/components/User";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;

  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const user = await fetch(API_URL);
  const data = await user.json();

  return {
    props: {
      fallback: {
        [API_URL]: data,
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
