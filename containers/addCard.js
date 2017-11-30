import { connect } from 'react-redux'
import { addCard } from '../actions'
import addCardComponent from '../components/addCard'

const mapDispatchToProps = dispatch => {
  return {
    addCard: (question,answer,data) => {
      dispatch(addCard(question,answer,data.title))
    }
  }
}

export default addCardContainer = connect(
  null,
  mapDispatchToProps
)(addCardComponent)