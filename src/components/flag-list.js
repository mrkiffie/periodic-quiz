import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlagList } from './ui';

class FlagListIndex extends Component {
  render() {
    return (
      <FlagList countries={this.props.countries} />
    );
  }
}

export default connect(state => ({ countries: state.countries }))(FlagListIndex);
