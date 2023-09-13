import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import User from "@/components/User";

export default function PostId() {
  const router = useRouter();
  const id: number | null = Number(router.query.id)
    ? Number(router.query.id)
    : null;

  return (
    <div>
      <Header></Header>
      <User id={id}></User>
    </div>
  );
}
