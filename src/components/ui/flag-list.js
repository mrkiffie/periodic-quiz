import React from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui';
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
