import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCountry, loadCountry } from '../actions/index';
import { Flag, FlagList, Container, Heading, SubHeading } from './ui';

class CountryDetail extends Component {

  componentDidMount() {
    this.props.loadCountry(this.props.params.iso);
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.params.iso;
    const newId = this.props.params.iso;
    if (newId !== oldId) {
      this.props.loadCountry(this.props.params.iso);
    }
  }

  render() {
    const country = this.props.country;
    if (!country) {
      return <div />;
    }

    return (
      <div>
        <Container>
          <Flag flag={country.flag} large />
        </Container>
        <Heading>{country.name}</Heading>
        <SubHeading>{country.capital}</SubHeading>

        <FlagList countries={country.neighbours} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.country,
  };
}

export default connect(mapStateToProps, { loadCountry, selectCountry })(CountryDetail);
