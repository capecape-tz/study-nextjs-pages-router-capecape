import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

import { ReactNode } from "react";
import Users from "@/components/Users";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  //ユーザー情報の取得
  const USERS_API_URL = "https://jsonplaceholder.typicode.com/users";
  const users = await fetch(USERS_API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usersData,
      },
    },
  };
};

export default function UsersPage(props: any) {
  const fallback = props;
  return (
    <>
      <SWRConfig value={{ fallback: fallback }}>
        <Header></Header>
        <Users></Users>
      </SWRConfig>
    </>
  );
}
