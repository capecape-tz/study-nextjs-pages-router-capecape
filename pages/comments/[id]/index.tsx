import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { Comment as CommentConponent } from "@/components/Comment";
import { SWRConfig } from "swr";
import { Comment } from "@/types/Comment";
import { API_URL } from "@/utils/const";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=5`);
  const commentsData: Comment[] = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  if (!comment.ok) {
    return {
      notFound: true,
    };
  }
  const commentData = await comment.json();

  console.log(`/comment/${id}がSG化されました。`);

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

export default function PostId(props: any) {
  const { fallback } = props;
  const router = useRouter();
  const id: number | null = Number(router.query.id)
    ? Number(router.query.id)
    : null;

  return (
    <div>
      <Header></Header>
      <SWRConfig value={{ fallback: fallback }}>
        <CommentConponent id={id}></CommentConponent>
      </SWRConfig>
    </div>
  );
}
