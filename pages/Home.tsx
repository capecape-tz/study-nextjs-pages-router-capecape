import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { inter } from ".";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Headline title="トップページ" page="index" />
      <Links />
      <Footer></Footer>
    </main>
  );
}
