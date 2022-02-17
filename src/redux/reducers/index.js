import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';

import {persistConfig} from '../config/persistConfig';

import mail from './mailReducer';
import user from './userReducer';
import session from './sessionReducer';
import loader from './loaderReducer';
import messages from './messagesReducer';

export default () => {
  const rootReducer = combineReducers({
    mail,
    user,
    session,
    loader,
    messages,
  });

  const middleware = [];
  const enhancers = [];

  if (__DEV__) {
    middleware.push(createLogger({collapsed: true}));
  }

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);
  return {
    store,
    persistor,
  };
};
