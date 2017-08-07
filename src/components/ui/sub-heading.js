import React from "react";

export default props =>
  <h2
    style={{
      lineHeight: "1.5",
      margin: "0 0 .5em",
      textAlign: "center",
      fontWeight: "300"
    }}
  >
    {props.children}
  </h2>;
