import React from 'react';
import Link from 'react-router/lib/Link';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Flag from './flag';

export default ({ countries = [] }) => (
  <List
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}
  >
    {countries.map(country => (
      <ListItem
        key={country.iso}
        containerElement={<Link to={`/countries/${country.iso}`} />}
      >
        <Flag flag={country.flag} />
      </ListItem>
    ))}
  </List>
);
