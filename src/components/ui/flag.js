import React from 'react';

export default ({ iso3, large = false }) => {
  const flagStyle = {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: large ? '50vh' : '4em',
    display: 'block',
  };

  return (
    <div>
      <img
        src={`/svg/${iso3.toLowerCase()}.svg`}
        alt="Flag"
        style={flagStyle}
      />
    </div>
  );
};
