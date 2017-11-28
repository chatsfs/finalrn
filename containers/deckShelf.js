import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import deckShelf from '../components/deckShelf'

const mapStateToProps = state => {
  return {
    decks: state.decks
  }
}

const VisibleTodoList = connect(
  mapStateToProps
)(deckShelf)

export default VisibleTodoList