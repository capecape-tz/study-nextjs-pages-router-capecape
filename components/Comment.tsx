import { useComment } from "@/hooks/useComment";

type Props = {
  id: number | null;
};

export function Comment(props: Props) {
  const { data: comment, error, isLoading } = useComment(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (comment === undefined) {
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
    </div>
  );
}
