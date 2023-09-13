import { useUser } from "@/hooks/useUser";

type Props = {
  id: number | null;
};

export default function User(props: Props) {
  const { data: user, error, isLoading } = useUser(props.id);

  if (isLoading) {
    return <div>ローディング中です</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (user === undefined) {
    return <div>データは空です。</div>;
  }

  return (
    <div>
      <h1>
        <div>{user?.id}</div>

        {user?.name}
      </h1>
      <p>{user?.company.name}</p>
    </div>
  );
}
