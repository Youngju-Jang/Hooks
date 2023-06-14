import "./styles.css";
import { useEffect, useState, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    //넘겨받은 인자가 함수인가
    return;
  }
  const handle = (event) => {
    // 어떤 조건에서 함수를 실행시킬 것인가
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore(); // 조건맞을때만 전달받은 함수 실행시킴
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
export default function App() {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}
