import React from "react";

export default ({ flag, large = false, onLoad }) => {
  const flagStyle = {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: large ? "45vh" : "4em",
    display: "block",
    margin: "0 auto"
  };

  return (
    <div style={{ width: "100%" }}>
      <img
        src={`/${flag.replace(/^\//, "")}`}
        alt="Flag"
        style={flagStyle}
        onLoad={onLoad}
      />
    </div>
  );
};
