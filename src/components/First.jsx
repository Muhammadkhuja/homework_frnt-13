import React from "react";
import Second from "./Second";

const First = () => {
  console.log("test re-render");
  return (
    <div>
      <h1>Test</h1>
      <Second />
    </div>
  );
};

export default First;
