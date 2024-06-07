import React, { useState } from "react";
import styled from "styled-components";
const TaskInput = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 22px;
  gap: 5px;
  padding-bottom: 0;

  input {
    width: 100%;
    padding: 5px;
  }
  button {
    width: 30px;
    font-size: 1.5em;
    padding: 0;
  }
  i {
    font-size: 2.1em;
  }
`;

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleTask = () => {
    task === ""? window.alert("Task must be filled out.\nPlease, add some task...") : addTask(task);
    setTask("");
  };
  return (
    <TaskInput>
      <input
        type="text"
        placeholder="Add task..."
        value={task}
        onChange={({ target }) => setTask(target.value)}
        onKeyDown={({ key }) => key === "Enter" && handleTask()}
      />
      <i class="icon-plus-sign-alt" onClick={handleTask} />
    </TaskInput>
  );
};

export default AddTask;
