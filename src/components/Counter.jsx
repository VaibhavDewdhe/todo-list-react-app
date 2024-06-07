import React from "react";
import styled from "styled-components";

const CounterDiv = styled.div`
  // border: 1px solid black;
  width: 80px;
  display: flex;
  justify-content: space-between;

  span {
    text-align: center;
  }
  
`;

const Counter = ({ count, handleCount }) => {
  return (
    <CounterDiv>
      <i class="icon-plus-sign" onClick={() => handleCount(count + 1)}/>
      <span>{count}</span>
      <i class="icon-minus-sign"
        disabled={count <= 1}
        onClick={() => count > 1 && handleCount(count - 1)}
      />
    </CounterDiv>
  );
};

export default Counter;
