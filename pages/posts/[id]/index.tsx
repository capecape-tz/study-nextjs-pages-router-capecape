import { Header } from "@/components/Header";
import Post from "@/components/Post";
import { useRouter } from "next/router";

export default function PostId() {
  const router = useRouter();
  const id: number | null = Number(router.query.id)
    ? Number(router.query.id)
    : null;

  return (
    <div>
      <Header></Header>
      <Post id={id}></Post>
    </div>
  );
}
