import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectCountry, loadCountry} from '../actions/index';
import {Link} from 'react-router';

import CountryListItem from './country-list-item';

class CountryDetail extends Component {

  componentDidMount() {
    this.props.loadCountry(this.props.params.iso);
  }

  componentDidUpdate (prevProps) {

    let oldId = prevProps.params.iso;
    let newId = this.props.params.iso;
    if (newId !== oldId) {
      this.props.loadCountry(this.props.params.iso);
    }
  }

  renderNeighbours(neighbours) {
    if (!neighbours.length) {
      return;
    }
    return (
      <div className="neighbours">
          <ul>
            {neighbours.map((neighbour) => {
              return (
              <li key={neighbour.iso}>
                <CountryListItem country={neighbour} />
              </li>
              );})}
          </ul>
      </div>
    );
  }

  render() {
    const country = this.props.country;
    if (!country) {
      return <div>Loading...</div>;
    }

    return (
      <div className="country-detail">
        <img src={`/svg/${country.iso3.toLowerCase()}.svg`} alt="Flag" width="300" className="cover" />
        <div className="cf details">
          <h2 className="name">{country.name}</h2>
          <h2 className="capital">{country.capital}</h2>
        </div>
        {this.renderNeighbours(country.neighbours)}

        <Link to="/" className="back-link">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.country
  };
}

export default connect(mapStateToProps, {loadCountry, selectCountry})(CountryDetail);
