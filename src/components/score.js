import React from 'react';
export default ({score, count}) => {
  return (
        <div>
        {score}/{count} - {`${((10000 * (score / count)|0) /100)}%`}
        </div>
  );
};