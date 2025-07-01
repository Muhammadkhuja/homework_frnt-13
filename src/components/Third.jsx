import React, { useContext } from "react";
import { MyContext } from "./ContextApi";

const Third = () => {
  console.log("Third re-render");
  const { title, count } = useContext(MyContext);
  return (
    <div>
      <h1>Third: {title}</h1>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default Third;
