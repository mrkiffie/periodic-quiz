import React from 'react';
import { green500, red500 } from 'material-ui/styles/colors';
import { NavigationCheck, NavigationClose } from 'material-ui/svg-icons';

export default ({ answer, selected, option }) => {
  // always show the correct answer
  if (selected && option.iso === answer.iso) {
    return (
      <span style={{ float: 'right' }} >
        <NavigationCheck color={green500} />
      </span>
    );
  }

  // show if the selected answer was wrong
  if (selected && selected.iso === option.iso && selected.iso !== answer.iso) {
    return (
      <span style={{ float: 'right' }}>
        <NavigationClose color={red500} />
      </span>
    );
  }

  return <span />;
};
