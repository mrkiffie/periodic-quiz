import React from 'react';

export default ({ flag, large = false, onLoad }) => {
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
        src={flag}
        alt="Flag"
        style={flagStyle}
        onLoad={onLoad}
      />
    </div>
  );
};
