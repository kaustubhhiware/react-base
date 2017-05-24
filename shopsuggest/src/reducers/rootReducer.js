import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';

import collectionReducer from './collectionReducer';

const rootReducer = combineReducers(
  { collectionState: collectionReducer,
    routing: routerReducer
  });

export default rootReducer;
