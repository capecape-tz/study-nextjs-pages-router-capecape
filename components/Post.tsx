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

  const postUserId = post !== undefined ? post.userId : null;

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useUser(postUserId);

  console.log("aaa");
  if (postIsLoading || userIsLoading) {
    return <div>ローディング中です</div>;
  }

  const error = postError || userError;
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
    </div>
  );
}
