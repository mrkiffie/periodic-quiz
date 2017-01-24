import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue600, lightBlue700, deepOrange800 } from 'material-ui/styles/colors';

export default getMuiTheme({
  palette: {
    primary1Color: lightBlue600,
    primary2Color: lightBlue700,
    accent1Color: deepOrange800,
  },
  appBar: {
    titleFontWeight: 300,
  },
});
