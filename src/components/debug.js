import React, { Component } from "react";
import { connect } from "react-redux";

class Debug extends Component {
  render() {
    const { debug } = this.props.state.settings;

    if (!debug) {
      return <div />;
    }

    return (
      <div>
        <pre>
          {JSON.stringify(this.props.state, null, 4)}
        </pre>
      </div>
    );
  }
}

export default connect(state => ({ state }))(Debug);
