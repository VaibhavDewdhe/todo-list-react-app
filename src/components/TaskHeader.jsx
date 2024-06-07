import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  background-color: #202020;
  ${({$isLight})=>$isLight&&"background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);"}
  border-radius: 10px 10px 0 0;
  padding: 10px;

  h1 {
    margin: 0;
  }
  #icon {
    cursor: pointer;
  }
`;

const TaskHeader = ({ remaining, total }) => {
  const {isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <Header $isLight={isLight}>
      <span id="icon" onClick={toggleTheme}>
        Theme: {isLight?<FontAwesomeIcon icon={faSun} spin/>:<FontAwesomeIcon icon={faMoon}/>}
      </span>
      <h1>Todo List</h1>
      <span>
        You have <b>{remaining}</b> of <b>{total}</b> tasks remaining
      </span>
    </Header>
  );
};

export default TaskHeader;
