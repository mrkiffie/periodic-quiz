import React, {Component} from 'react';
import AppHeader from './app-header';
import Debug from './debug';

export default class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', flex: '1'}}>
        <AppHeader />
        {this.props.children}
        <Debug />
      </div>
    );
  }
}
