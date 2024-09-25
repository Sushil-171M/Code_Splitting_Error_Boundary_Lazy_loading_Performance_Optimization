import React, { useState } from "react";
import useCounter from "./useCounter";

const HoverCounter = () => {
  const [count, incrementHandle] = useCounter(0);

  return (
    <>
      <h3>Hover Counter :: {count}</h3>
      <button type="click" onMouseOver={incrementHandle}>
        Hover
      </button>
    </>
  );
};

export default HoverCounter;
