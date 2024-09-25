import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
const Parent = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h2> HOC Component </h2>
      <div style={{ margin: "10px" }}>
        <ChildA />
      </div>

      <ChildB />
    </div>
  );
};

export default Parent;
