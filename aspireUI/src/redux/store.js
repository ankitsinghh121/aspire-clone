import {createStore, combineReducers, applyMiddleware} from 'redux';
import dataReducer from './dataReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({data: dataReducer});

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunkMiddleware, logger),
);

export default store;
