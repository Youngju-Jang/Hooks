import "./styles.css";
import { useEffect, useState, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};
export default function App() {
  const triggerNotif = useNotification("can i steal a kimchi?", {
    body: "i love kimchi",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
