import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AppBar} from 'material-ui';
import Navigation from './navigation';
import {toggleMenu} from '../actions';
import Score from './score';

class AppHeader extends Component {

  render() {

    const {quiz, settings, menu} = this.props;
    return (
      <div>
        <AppBar
          title="Flag Quiz"
          onLeftIconButtonTouchTap={() => this.props.toggleMenu(true)}
          iconElementRight={settings.score ? <Score {...quiz} /> : <span />}
        />
        <Navigation
          open={menu.open}
          toggleMenu={this.props.toggleMenu}
        />
      </div>
    );
  }
}

export default connect(state => ({menu: state.menu, settings: state.settings, quiz: state.quiz}), {toggleMenu})(AppHeader);
