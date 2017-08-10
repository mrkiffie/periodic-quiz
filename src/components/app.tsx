import React, { Component } from "react";
import AppHeader from "./app-header";
import Debug from "./debug";

export default class App extends Component {
  render() {
    return (
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <AppHeader />
        {this.props.children}
        <Debug />
      </div>
    );
  }
}
