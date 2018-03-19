import { connect } from 'react-redux';
import Component from '../../Components/Game';
import { loadItems } from '../../Actions/Questions';
import { setInitialNumberOfCorrectAnswers } from '../../Actions/Answers';


const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadItems()),
  setInitialNumberOfCorrectAnswers: () => dispatch(setInitialNumberOfCorrectAnswers())
});


export default connect(null, mapDispatchToProps)(Component);
