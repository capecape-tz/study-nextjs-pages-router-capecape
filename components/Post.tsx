import { useComments, useCommentsByPostId } from "@/hooks/useFetchArray";
import { usePost } from "@/hooks/usePost";
import { useUser } from "@/hooks/useUser";

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
      <h1>
        <div>{post?.id}</div>

        {post?.title}
      </h1>
      <p>{post?.body}</p>
      {user?.name ? (
        <h1>
          created by
          <div>
            {user?.name}
            <a> </a>
            {user?.id}
          </div>
        </h1>
      ) : null}
      <div>--------------------- *** comments *** ---------------------</div>
      <ul>
        {comments
          ? comments
              .filter((comment) => {
                return comment.postId === postId;
              })
              .map((comment) => {
                return (
                  <>
                    <li key={comment.id}>
                      <div>{comment.id}</div>
                      <h1>
                        {comment.name} :{comment.email}
                      </h1>
                      <p>{comment.body}</p>
                    </li>
                  </>
                );
              })
          : null}
      </ul>
    </div>
  );
}
