/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import Theme from './components/ui/theme';
import reduxThunk from 'redux-thunk'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider muiTheme={Theme}>
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
