import { connect } from 'react-redux'
import { addDeck } from '../actions'
import AddDeck from '../components/addDeck'

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: text => {
      dispatch(addDeck(text))
    }
  }
}

export default VisibleTodoList = connect(
  null,
  mapDispatchToProps
)(AddDeck)