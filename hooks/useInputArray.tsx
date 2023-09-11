import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: any) => {
    if (e.target.value.length > 5) {
      alert("5文字いないにして");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在している");
        return prevArray;
      }
      if (text.trim().length === 0) {
        alert("入力なしは追加できません");
        return prevArray;
      }
      return [text, ...prevArray];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
