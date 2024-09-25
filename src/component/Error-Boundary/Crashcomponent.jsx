import React, { useState } from "react";
const Crashcomponent = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Application Crashed");
  }

  const crashHandler = () => {
    setCrash(!crash);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3> Implementing Error Boundaries</h3>
      <button onClick={crashHandler}>Crash Karo</button>
    </div>
  );
};

export default Crashcomponent;
