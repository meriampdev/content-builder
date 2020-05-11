import { SET_CURRENT_ELEMENT, SET_COLLECTIONS } from './types';

const initialState = {
  current_element: null,
  styles: null,
  collection: [{ id: 0 }]
};

const elementReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ELEMENT:
      return { ...state, 
        current_element: { ...action.payload, styles: action.styles}, 
        styles: action.styles
      }
    case SET_COLLECTIONS:
      return { ...state, collection: action.payload }
    default:
      return state;
  }
}

export default elementReducer;
