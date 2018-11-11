// import { RECEIVE_CURRENT_USER,  } from '../actions/session_actions';


const gifsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "RECEIVE_GIFS": // import variable
      return action.payload;
    default:
        return state;
  }
};
 export default gifsReducer;
