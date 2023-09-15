import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { Comment as CommentConponent } from "@/components/Comment";
import { SWRConfig } from "swr";
import { Comment } from "@/types/Comment";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData: Comment[] = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

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
