import { Navi } from "@/components/Navi";

import Head from "next/head";
import { useRouter } from "next/router";

export default function PostId() {
  const router = useRouter();
  //console.log(router.query);
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <Navi></Navi>
      <div>test{router.query.id}</div>
    </div>
  );
}
