import "./styles.css";
import { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick); // 전달받은 함수 실행함
    }
    return () => {
      // unmount시 remove필요
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }; // unmount시 실행되는거
  }, []);
  return element; // = useRef(); (useEffect가 같이 실행되는)
};
export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
