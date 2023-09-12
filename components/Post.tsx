import { usePost } from "@/hooks/usePost";

export default function Post() {
  const { post, user, error, isLoading } = usePost();

  console.log("aaa");
  if (isLoading) {
    return <div>ローディング中です</div>;
  }

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
