import Sidebar from "./components/Sidebar/sidebar";
import Todo from "./components/Todo/todo";
import MobileSidebar from "./components/Sidebar/mobilesidebar";
import { containerStyles } from "./assets/styles/container.css";
import { useState, useEffect } from "react";

import "./App.css";
import "./Style.css"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <div className={containerStyles({
        display: "flex",
        direction: "row",
        alignItems: "center",
        bkground: "second",
        padding: "default",
        gap: "small",
        height: "default"
      })}>
        <Todo />
        {isMobile ? <MobileSidebar /> : null}
        <Sidebar />
      </div>
  );
}

export default App;
