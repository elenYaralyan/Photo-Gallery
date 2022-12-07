import RootRouter from "./routes/RootRouter";
import "./App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
}

export default App;
