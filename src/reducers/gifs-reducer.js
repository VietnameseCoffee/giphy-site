import { RECEIVE_GIFS } from '../actions/gif-actions';

const gifsReducer = (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_GIFS:
      return action.payload;
    default:
        return state;
  }
};
 export default gifsReducer;
