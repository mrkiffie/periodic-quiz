import React from "react";

export default props =>
  <div
    style={{
      margin: "1em",
      display: "flex",
      justifyContent: "center",
      ...props.style
    }}
  >
    {props.children}
  </div>;
