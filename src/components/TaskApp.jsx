import React, { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
// import allTasks from "../data/tasks.json";
import styled from "styled-components";
import { v4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";

const MainApp = styled.div`
  border: 1px solid ${({ $isLight }) => ($isLight ? "black" : "white")};
  border-radius: 10px;
  margin: 10px;
  box-sizing: border-box;
  width: 350px;
  display: flex;
  flex-direction: column;
  display: block;
  position: relative;

  #tasks {
    height: 400px;
    max-height: 50vh;
    overflow: auto;
  }
`;

const TaskApp = () => {
  const { isLight } = useContext(ThemeContext);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("vaibhav_dewdhe_todo_list")) || []
  );

  const unique = (text) => {
    return text.toLocaleLowerCase().replace(/[\s_-]/g, "");
  };
  const addTask = (task) =>
    tasks.some((e) => unique(e.text) === unique(task))
      ? window.alert("Task already exists.")
      : updateList([
          ...tasks,
          {
            id: v4(),
            text: task,
            done: false,
            count: 1,
          },
        ]);

  const updateList = (newList) => {
    localStorage.setItem("vaibhav_dewdhe_todo_list", JSON.stringify(newList));
    setTasks(newList);
  };
  const changeHandler = (task) =>
    updateList(tasks.map((e) => (e.id === task.id ? task : e)));

  const removeTask = (id) => updateList(tasks.filter((e) => e.id !== id));
  console.log("isLight", isLight);
  return (
    <MainApp $isLight={isLight}>
      <div id="fixed">
        <TaskHeader
          remaining={tasks.filter((e) => !e.done).length}
          total={tasks.length}
        />
        <AddTask {...{ addTask }} />
      </div>
      <div id="tasks">
        {<Tasks {...{ tasks, changeHandler, removeTask }} />}
      </div>
    </MainApp>
  );
};

export default TaskApp;
