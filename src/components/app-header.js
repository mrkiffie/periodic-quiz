import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import Navigation from './navigation';
import { toggleMenu } from '../actions';

class AppHeader extends Component {

  render() {
    return (
      <div>
        <AppBar
          title="Flag Quiz"
          onLeftIconButtonTouchTap={() => this.props.toggleMenu(true)}
        />
        <Navigation open={this.props.open} toggleMenu={this.props.toggleMenu} />
      </div>
    );
  }
}

export default connect(state => ({ ...state.menu }), { toggleMenu })(AppHeader);
