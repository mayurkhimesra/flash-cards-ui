import { combineReducers } from 'redux';
import flashCards from '../flashCards/flashCardsReducer';

const rootReducer = combineReducers({
    flashCards
});

export default rootReducer;