import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { counter } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, sagaMiddleware];

const rootReducer = combineReducers({
  counter,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
