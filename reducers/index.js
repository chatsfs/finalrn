import { RECEIVE_DECKS, ADD_CARD,ADD_DECK } from '../actions'
const defaultState = {
    decks: {
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
}
function decks(state = defaultState, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            let mutated = {...state, decks: {...state.decks}};
            mutated.decks[action.deck] = {
                title: action.deck,
                questions: [],
            }
            return mutated
        case ADD_CARD:
            return{
                ...state,
                ...state[action.deck].card
            }
        default:
            return state
    }
}

export default decks