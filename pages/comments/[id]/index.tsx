import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { Comment } from "@/components/Comment";

export default function PostId() {
  const router = useRouter();
  const id: number | null = Number(router.query.id)
    ? Number(router.query.id)
    : null;

  return (
    <div>
      <Header></Header>
      <Comment id={id}></Comment>
    </div>
  );
}
