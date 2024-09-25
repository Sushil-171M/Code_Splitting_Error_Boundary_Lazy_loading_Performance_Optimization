import React, { useState } from "react";

const ChildB = () => {
  const [count, setCount] = useState(0);

  const clickHanlder = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <button type="click" onClick={clickHanlder}>
      CLick Me B : {count}
    </button>
  );
};

export default ChildB;
