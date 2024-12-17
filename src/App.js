import { useContext } from "react";
import "./App.css";
import TaskApp from "./components/TaskApp";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
      <div className={`App ${theme}`}>
        <h1>Hello Shubham sir</h1>
        <TaskApp />
      </div>
  );
}

export default App;
