import { GET_DECKS, CREATE_DECK, ADD_CARD_TO_DECK, REMOVE_DECK } from '../actions/index'

export default function reducer (state = {}, action) {
    switch (action.type) {
        case GET_DECKS:
            if(action.decks) {
                return {
                    ...state,
                    ...JSON.parse(action.decks)
                }
            } else return {}
        case CREATE_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }
         case REMOVE_DECK:
               const { id } = action;
      // return ({ [id]: value, ...remainingDecks } = state);
               const { [id]: value, ...remainingDecks } = state;
      // console.log(remainingDecks);
              return {remainingDecks}

        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.title]: {
                    title : action.title,
                    questions: [...state[action.title].questions, action.card]
                }
            }
        default:
            return state
    }
}