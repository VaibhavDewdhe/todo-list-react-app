import React, { useContext } from "react";
import Counter from "./Counter";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
const TaskField = styled.li`
  list-style: none;

  .parent {
    display: flex;
    // border: 1px solid black;
    margin: 2px;
    padding: 5px;
    justify-content: space-between;
    background-color: ${({ $index, $isLight }) =>
      $index % 2 === 0
        ? $isLight
          ? "#A0DEFF"
          : "#655"
        : $isLight
        ? "#FFF9D0"
        : "#255"};
  }
  #itm {
    width: 60%;
    // border: 1px solid red;
  }
  #itm span {
    margin-left: 5px;
    text-decoration: ${({ $checked }) => $checked && "line-through"};
  }
  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0;
    border: 1px solid red;
    background-color: yellow;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }
  input[type="checkbox"]:checked {
    appearance: auto;
    clip-path: circle(50% at 50% 50%);
  }
  div:hover {
    cursor: pointer;
  }

  .icon-remove {
    display: none;
  }
  .parent:hover {
    border: 2px solid ${({ $isLight }) => ($isLight ? "green" : "white")};
  }
  .parent:hover .icon-remove {
    display: block;
    margin-right: 40px;
  }
`;

const Task = ({ e, changeHandler, removeTask, i }) => {
  const { isLight } = useContext(ThemeContext);
  const updatedTask = () => {
    const newTask = { ...e, done: !e.done };
    changeHandler(newTask);
  };

  const handleCount = (count) => {
    const newTask = { ...e, count: count };
    changeHandler(newTask);
  };
  return (
    <TaskField $index={i} $checked={e.done} $isLight={isLight}>
      <div className="parent">
        <div id="itm" onClick={updatedTask}>
          <input type="checkbox" checked={e.done} onChange={updatedTask} />
          <span>{e.text}</span>
        </div>
        <i class="icon-remove" onClick={() => removeTask(e.id)} />
        <Counter count={e.count} {...{ handleCount }} />
      </div>
    </TaskField>
  );
};

export default Task;
