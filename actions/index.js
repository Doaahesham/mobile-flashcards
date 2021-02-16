import { getDecks, removeDeckAS, saveDeckTitle } from '../utils/apiHelpers'
import { addCardToDeck} from '../utils/apiHelpers'
  
export const GET_DECKS = 'GET_DECKS' 
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
// export const REMOVE_DECK = 'REMOVE_DECK';

export function rDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function createDeck(title) {
    return {
        type: ADD_DECK,
        title
    }
}

export function createCard (title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        title,
        card,
    }
}
// export function removeDeck(id) {
//   return {
//     type: REMOVE_DECK,
//     id,
//   }
// }

export const handleReceiveDecks = () => dispatch => (
    getDecks().then(data => {
        dispatch(rDecks(data))
    })
)

export const handleCreateDeck = (title) => dispatch => (
    saveDeckTitle(title).then(() => {
        dispatch(createDeck(title))
    })
)

export function handleCreateCard(title, card) {
    return (dispatch) => {
        return addCardToDeck(title, card).then(() => {
            dispatch(createCard(title, card))
        })
    }
}
// export function handleD(id) {
//     console.log("ahoooooooooooooooo");
//     console.log(`el id = ${id}`);
//     return (dispatch) => {
//         return removeDeckAS(id).then(() => {
//             dispatch(removeDeck(id))
//         })
//     }
// }
