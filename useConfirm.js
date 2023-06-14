import "./styles.css";
import { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}
