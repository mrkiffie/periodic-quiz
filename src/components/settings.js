import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from 'material-ui/List/ListItem';
import Toggle from 'material-ui/Toggle';
import { toggleScore } from '../actions';

class Settings extends Component {

  render() {
    const {score} = this.props;

    return (
      <div>
        <ListItem
            primaryText="Settings"
            tabIndex={open ? 0 : -1}
            primaryTogglesNestedList
            nestedItems={[
              <ListItem
                key="toggle-score"
                primaryText="Toggle Score"
                rightToggle={<Toggle
                  toggled={score}
                  onToggle={() => this.props.toggleScore()}
                />}
              />,
            ]}
          />
      </div>
    );
  }
}

export default connect(state => state.settings, { toggleScore })(Settings);
