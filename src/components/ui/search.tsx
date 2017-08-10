import React from "react";
import TextField from "material-ui/TextField";

export const Search = ({ value, onChange }) =>
  <TextField
    value={value}
    onChange={onChange}
    id="search"
    hintText="type to search"
    fullWidth={true}
    style={{ background: "#fff", overflow: "hidden" }}
    inputStyle={{ padding: "0 .5em" }}
    hintStyle={{ padding: "0 .5em" }}
    underlineStyle={{ position: "absolute", bottom: 0 }}
    underlineFocusStyle={{ position: "absolute", bottom: 0 }}
  />;
