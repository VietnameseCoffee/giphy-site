import { combineReducers } from 'redux';
import gifsReducer from './gifs-reducer';
import detailsReducer from './details-reducer';



const rootReducer = combineReducers({
  gifsReducer,
  detailsReducer
});

export default rootReducer;
