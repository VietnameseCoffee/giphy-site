import { RECEIVE_DETAILS } from '../actions/gif-actions';

const detailsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_DETAILS:
      return action.payload;
    default:
        return state;
  }
};
 export default detailsReducer;
