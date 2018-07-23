import * as React from "react";
import { Router } from "@reach/router";
import { App } from "./components/App";
import { ElementSearchList } from "./components/ElementSearchList";
import { ElementDetail } from "./components/ElementDetail";
import { Quiz } from "./components/Quiz";
import { About } from "./components/About";

export const Routes = () => (
  <App>
    <Router>
      <Quiz path="/" />
      <Quiz path="/element-quiz" />
      <About path="/about" />
      <ElementSearchList path="/search" />
      <ElementDetail path="/elements/:symbol" />
    </Router>
  </App>
);
