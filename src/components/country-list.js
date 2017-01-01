import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCountry} from '../actions/index';
import CountryListItem from './country-list-item';

class CountryList extends Component {
  renderList() {
    if (!this.props.countries) {
      return <span></span>;
    }
    return this.props.countries.map(country => {
      return (
        <li key={country.iso}>
          <CountryListItem country={country} />
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries
  };
}

export default connect(mapStateToProps, {selectCountry})(CountryList);

