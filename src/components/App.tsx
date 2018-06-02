import * as React from "react";
import { AppHeader } from "./AppHeader";

export const App: React.SFC<{}> = ({ children }) => (
  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
    <AppHeader />
    {children}
  </div>
);
