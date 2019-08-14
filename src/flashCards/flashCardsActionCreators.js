import * as actionTypes from './flashCardsActionTypes';
import FlashCardsApi from './flashCardsApi';

export function fetchCards() {
    return function(dispatch) {
        const flashCardsApi = new FlashCardsApi();
        flashCardsApi.fetchCards().then(cards => 
        dispatch({
            type: actionTypes.FETCH_FLASHCARDS_SUCCESS,
            flashCards: cards
        })).catch(error =>
            alert(error)
        );
    }
}

export function fetchCardDetail(slug) {
    return function(dispatch) {
        const flashCardsApi = new FlashCardsApi();
        flashCardsApi.fetchCard(slug).then(card =>
        dispatch({
            type: actionTypes.FETCH_FLASHCARD_DETAIL_SUCCESS,
            flashCard: card
        })).catch(error =>
            alert(error)
        );
    }
}