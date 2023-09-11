import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightYellow } from "@/hooks/useBgLightYellow";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightYellow();
  return <Component {...pageProps} {...counter} {...inputArray} />;
}
