import { useComments, useCommentsByPostId } from "@/hooks/useFetchArray";
import { usePost } from "@/hooks/usePost";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

type Props = {
  id: number | null;
};

export default function Post(props: Props) {
  const {
    data: post,
    error: postError,
    isLoading: postIsLoading,
  } = usePost(props.id);

  const postId = post !== undefined ? post.id : null;
  const postUserId = post !== undefined ? post.userId : null;

  const {
    data: comments,
    error: commentsError,
    isLoading: commentsIsLoading,
    isEmpty: commentsIsEmpty,
  } = useCommentsByPostId(postId); //useComments();

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useUser(postUserId);

  if (postIsLoading || userIsLoading || commentsIsEmpty) {
    return <div>ローディング中です</div>;
  }

  const error = postError || userError || commentsError;
  if (error) {
    return <div>{error}</div>;
  }

  if (post === undefined || user === undefined) {
    return <div>データは空です。</div>;
  }

  return (
    <div>
      {user?.name ? (
        <p>
          created by
          {user?.name}
          <a> </a>
          {user?.id}
        </p>
      ) : null}
      <h1 className="text-3xl font-bold pb-2">{post?.title}</h1>
      <p className="text-xl text-gray-700 pb-10">{post?.body}</p>
      <h2 className="text-xl font-bold">コメント一覧</h2>
      <ul className="space-y-2">
        {comments
          ? comments.map((comment) => {
              return (
                <li className="border-b pb-2 group" key={comment.id}>
                  <Link href={`/comments/${comment.id}`}>
                    <div className="block rounded group-hover:text-blue-500">
                      {comment.body}
                    </div>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
