import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

import { Comments } from "@/components/Comments";
import { SWRConfig } from "swr";
import { API_URL } from "@/utils/const";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  //ユーザー情報の取得
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

export default function Home(props: any) {
  const { fallback } = props;
  return (
    <SWRConfig value={{ fallback: fallback }}>
      <Header></Header>
      <Comments></Comments>
    </SWRConfig>
  );
}
