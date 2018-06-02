import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";

import { Routes } from "./routes";
import { FlagQuizStore } from "./store/FlagQuizStore";

const flagQuizStore = new FlagQuizStore();

const App = observer(() => (
  <Provider flagQuizStore={flagQuizStore}>
    <Routes />
  </Provider>
));

ReactDOM.render(<App />, document.getElementById("flag-quiz"));
