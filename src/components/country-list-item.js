import React from 'react';
import {Link} from 'react-router';

export default ({country}) => {
  return (
    <div>
      <Link to={`/countries/${country.iso}`}>
        <img src={`/svg/${country.iso3.toLowerCase()}.svg`} alt={`Flag of ${country.name}`} width="300" />
      </Link>
    </div>
  );
};