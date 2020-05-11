import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import element from './element/reducer'

const rootReducer = combineReducers({
  element: element
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;
