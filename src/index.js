/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import Theme from './components/ui/theme';
import reduxThunk from 'redux-thunk';
import localForage from 'localforage';

import reducers, {whitelist} from './reducers';

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(reduxThunk),
    autoRehydrate(),
  )
)

localForage.config({
    name        : 'flag-quiz',
    version     : 1.0,
    storeName   : 'flagquiz'
});

persistStore(store, {storage: localForage, whitelist})

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={Theme}>
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
