import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import deck from '../components/deck'

const mapStateToProps = state => {
  return {
    decks: state.decks,
  }
}

const VisibleTodoList = connect(
  mapStateToProps
)(deck)

export default VisibleTodoList