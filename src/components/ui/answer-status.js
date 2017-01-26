import React from 'react';
import { green500, red500 } from 'material-ui/styles/colors';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default ({ answer, selected, option }) => {
  // always show the correct answer
  if (selected && option.iso === answer.iso) {
    return <NavigationCheck color={green500} />;
  }

  // show if the selected answer was wrong
  if (selected && selected.iso === option.iso && selected.iso !== answer.iso) {
    return <NavigationClose color={red500} />;
  }

  return <span style={{width: '24px'}}/>;
};
