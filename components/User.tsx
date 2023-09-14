import { usePosts } from "@/hooks/useFetchArray";
import { useUser } from "@/hooks/useUser";

type Props = {
  id: number | null;
};

export default function User(props: Props) {
  const { data: user, error, isLoading } = useUser(props.id);

  const {
    data: posts,
    error: errorPosts,
    isLoading: isLoadingPosts,
    isEmpty: isEmptyPosts,
  } = usePosts();

  if (isLoading || isLoadingPosts) {
    return <div>ローディング中です</div>;
  }

  if (error || errorPosts) {
    return <div>{error}</div>;
  }

  if (user === undefined || posts === undefined) {
    return <div>データは空です。</div>;
  }

  return (
    <>
      <div>
        <h1>
          ユーザー情報
          <div>{user?.id}</div>
          {user?.name}
        </h1>
        <p>{user?.company.name}</p>
      </div>
      <h2>投稿</h2>
      <ul>
        {posts
          ?.filter((post) => {
            return post.userId === user.id;
          })
          .map((post) => {
            return (
              <>
                <li key={post.id}>
                  <div>{post.id}</div>
                  <div>{post.body}</div>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
