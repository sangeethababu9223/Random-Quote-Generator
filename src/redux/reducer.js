import _quotes from '../data/quotes';
import { combineReducers } from 'redux';
const PICK = 'PICK';

const quotes = (state=_quotes, action) => {
    if(action.type===PICK){
        return state;
    }else{
        return state;
    }
}
const rootReducer = combineReducers({quotes});
export default rootReducer;