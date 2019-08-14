import * as actionTypes from './flashCardsActionTypes';

export default function flashCardsReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.FETCH_FLASHCARDS_SUCCESS:
            return {
                cards: action.flashCards
            };
        case actionTypes.FETCH_FLASHCARD_DETAIL_SUCCESS:
            return { ...state, currentCard: action.flashCard};
        default:
            return state;
    }
}