import { usePosts } from "@/hooks/useFetchArray";
import { useUser } from "@/hooks/useUser";
import Link from "next/link";

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
    <div>
      <h1 className="font-bold text-3xl pb-4">{user?.name}</h1>
      <h2 className="text-xl font-bold">詳細</h2>
      <ul className="list-inside list-disc">
        <li>アカウント名：{user?.username}</li>
        <li>メール：{user?.email}</li>
        <li>電話番号：{user?.phone}</li>
        <li>Webサイト：{user?.website}</li>
        <li>住所：{user?.address.city}</li>
        <li>勤務先：{user?.company.name}</li>
      </ul>
      <h2 className="text-xl font-bold pt-4">投稿</h2>
      <ul className="space-y-4">
        {posts
          ? posts
              .filter((post) => {
                return post.userId === user.id;
              })
              .map((post) => {
                return (
                  <li key={post.id}>
                    <Link href={`/posts/${post.id}`} className="group">
                      <h1 className="text-xl font-bold group-hover:text-blue-500">
                        {post.title}
                      </h1>
                      <p className="text-lg text-gray-500 group-hover:text-blue-300">
                        {post.body}
                      </p>
                    </Link>
                  </li>
                );
              })
          : null}
      </ul>
    </div>
  );
}
