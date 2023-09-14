import { useComment } from "@/hooks/useComment";
import { usePost } from "@/hooks/usePost";
import Link from "next/link";

type Props = {
  id: number | null;
};

export function Comment(props: Props) {
  const { data: comment, error, isLoading } = useComment(props.id);
  const postId = comment !== undefined ? comment.postId : null;
  const {
    data: post,
    error: errorPost,
    isLoading: isLoadingPost,
  } = usePost(postId);

  if (isLoading || isLoadingPost) {
    return <div>ローディング中です</div>;
  }

  if (error || errorPost) {
    return <div>{error}</div>;
  }

  if (comment === undefined || post === undefined) {
    return <div>データは空です。</div>;
  }

  return (
    <div>
      <h1>
        <div>{comment?.id}</div>
        <div>{comment.postId}</div>
        {comment?.name}
      </h1>
      <p>{comment?.body}</p>
      <h2>元の記事</h2>
      <Link href={"/posts/" + post.id}>
        <p>
          {post.id} {post.title}
        </p>
        <p>{post.body}</p>
      </Link>
    </div>
  );
}
