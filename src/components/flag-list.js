import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';
import {List, AutoSizer} from 'react-virtualized';
import ListItem from 'material-ui/List/ListItem';
import Flag from './ui/flag';
import {Search} from './ui/search';

import {setSearchTerm} from '../actions';

class FlagListIndex extends Component {

  constructor(props) {
    super(props);
    this.rowRenderer = this.rowRenderer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  rowRenderer({key, index, style}) {
    const {filteredCountries = []} = this.props.search;
    const country = filteredCountries[index];

    if (!country) {
      return null;
    }

    return (
      <ListItem
        containerElement={<Link to={`/countries/${country.iso}`} />}
        key={key}
        style={style}
      >
        <div style={{textAlign: 'center', marginBottom: '.5em'}}>
          {country.name}, {country.capital}
        </div>
        <Flag flag={country.flag} />
      </ListItem>
    )
  }

  onChange(e, term) {
    this.props.setSearchTerm(term);
  }

  render() {
    const {term, filteredCountries} = this.props.search;
    return (
      <div style={{position: 'absolute', top: 64, left: 0, right: 0, bottom: 0}}>
        <Search value={term} onChange={this.onChange}/>
        <div style={{position: 'absolute', top: 48, left: 0, right: 0, bottom: 0}}>
          <AutoSizer>
            {({height, width}) => (
              <List
                width={width}
                height={height}
                rowCount={filteredCountries.length}
                rowHeight={120}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default connect(state => ({search: state.search}), {setSearchTerm})(FlagListIndex);
