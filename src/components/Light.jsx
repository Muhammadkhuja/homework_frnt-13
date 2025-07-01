import React from "react";

export default function Light({ theme }) {
  const backgroundColor = theme === "light" ? "#ffffff" : "#000000";
  const textColor = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          height: "100vh",
          width: "100%",
          padding: "15% 0px",
          textAlign: "center",
        }}>
      <div
        // style={{
        //   backgroundColor: backgroundColor,
        //   color: textColor,
        //   height: "100%",
        //   width: "100%",
        //   padding: "0px",
        //   textAlign: "center",
        // }}
      >
        <h1>{theme}</h1>
      </div>
    </div>
  );
}
