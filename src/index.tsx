import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";

import { Routes } from "./routes";
import { MainStore } from "./store/MainStore";

const mainStore = new MainStore();

console.log(mainStore);

const App = observer(() => (
  <Provider mainStore={mainStore}>
    <Routes />
  </Provider>
));

ReactDOM.render(<App />, document.getElementById("periodic-quiz"));
