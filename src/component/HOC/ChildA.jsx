import React, { useState } from "react";

const ChildA = () => {
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <button type="click" onClick={clickHanlder}>
      CLick Me A : {count}
    </button>
  );
};

export default ChildA;
