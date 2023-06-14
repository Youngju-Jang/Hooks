import "./styles.css";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const potato = useRef(); // == getElementById()
  setTimeout(() => potato.current.focus(), 5000);

  return (
    <div className="App">
      <input ref={potato} placeholder="la" />
    </div>
  );
}
