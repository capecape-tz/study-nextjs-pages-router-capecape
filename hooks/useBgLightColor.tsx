import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "yellow";
      }
      case "/about": {
        return "lightgreen";
      }
      default:
        return "cyan";
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);
};
