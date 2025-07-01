import React, { useContext } from "react";
import { MyContext } from "./ContextApi";
import Third from "./Third";

const Second = () => {
  console.log("second re-render");
  const { setCount } = useContext(MyContext);
  return (
    <div>
      <h1>Second text</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <Third/>
    </div>
  );
};

export default Second;
