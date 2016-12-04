import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';

import AppContainer from './containers/appContainer';

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
  )
);

sagaMiddleware.run(sagas);

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

