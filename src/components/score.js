import React from 'react';

export default ({ score, count }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      fontWeight: '300',

    }}
  >
    {score}/{count} - {`${((100 * (score / count) || 0).toFixed(2))}%`}
  </div>
  );
