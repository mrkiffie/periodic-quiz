import React, {Component} from 'react';
import AppHeader from './app-header';
import Debug from './debug';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        {this.props.children}
        <Debug />
      </div>
    );
  }
}

