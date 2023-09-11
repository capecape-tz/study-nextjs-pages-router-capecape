import { useState, useCallback } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);
  return { count, isShow, handleClick, handleDisplay };
};
