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
      <h1 className="text-3xl font-bold">{comment.body}</h1>
      <div>
        Created by {comment.name} ({comment.email})
      </div>
      <h2 className="text-xl font-bold pt-4">元の記事</h2>
      <Link href={"/posts/" + post.id}>
        <p className="text-lg hover:text-blue-500">{post.body}</p>
      </Link>
    </div>
  );
}
