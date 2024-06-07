import { useContext } from "react";
import "./App.css";
import TaskApp from "./components/TaskApp";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const {theme} = useContext(ThemeContext)
  return (
      <div className={`App ${theme}`}>
        <TaskApp />
      </div>
  );
}

export default App;
