import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

const dataIntial = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

export const setStorage = () => {
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dataIntial))
}
export function getDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

export function getDeck (id) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then(decks => JSON.parse(decks)[id])
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export function addCardToDeck (title, card) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const decks = JSON.parse(results)
            const deckNew = {
                ...decks,
                [title]: {
                    title: title,
                    questions: [...decks[title].questions, card]
                }
            }
            AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deckNew))
        })
}
// export async function removeDeckAS(key) {
//   try {
//     const results = await AsyncStorage.getItem(DECK_STORAGE_KEY);
//     const data = JSON.parse(results);
//     data[key] = undefined;
//     delete data[key];
//     AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
//   } catch (err) {
//     console.log(err);
//   }
// }