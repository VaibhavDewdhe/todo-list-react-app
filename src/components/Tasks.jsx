import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const TasksComponent = styled.ul`
  padding: 20px;
  margin: 0;
  padding-top: 0;

  .icon {
    width: 100%;
    // border: 1px solid black;
    height: 100px;
  }
`;

const Tasks = ({ tasks, changeHandler, removeTask }) => {
  return (
    <TasksComponent>
      {tasks.length > 0 ? (
        tasks.map((e, i) => (
          <Task key={e.id} {...{ changeHandler, i, e, removeTask }} />
        ))
      ) : (
        <div>
          <FontAwesomeIcon icon={faList} shake className="icon" />
          <center>List is Empty...</center>
          <center>
            Add some items above{" "}
            <FontAwesomeIcon icon={faHandPointUp} bounce className="fa-light" />
          </center>
        </div>
      )}
    </TasksComponent>
  );
};

export default Tasks;
