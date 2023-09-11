import { useEffect } from "react";

export const useBgLightYellow = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "yellow";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
