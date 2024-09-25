import React, { lazy, Suspense } from "react";
import ChildA from "./ChildA";

const ChildB = lazy(() => import("./ChildB"));
const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <div>
        <ChildA />
        <Suspense
          fallback={<h2 style={{ backgroundColor: "blue" }}> ....Loading </h2>}
        >
          <ChildB />
        </Suspense>
      </div>
    </div>
  );
};

export default Parent;
