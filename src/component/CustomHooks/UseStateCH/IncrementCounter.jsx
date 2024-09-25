import React, { useState } from "react";
import useCounter from "./useCounter";

const IncrementCounter = () => {
  const [count, incrementHandle] = useCounter(0);

  return (
    <>
      <h3>Increment Counter :: {count}</h3>
      <button type="click" onClick={incrementHandle}>
        Increment
      </button>
    </>
  );
};

export default IncrementCounter;
