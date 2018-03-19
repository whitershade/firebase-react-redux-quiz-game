import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from '../../Components/Game/WizardFormSecondPage';
import { createItem, chooseAnswer } from '../../Actions/Answers';
import Selector from '../../Selectors/Pages/Questions';

const Form = reduxForm({
  form: 'answers', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  onSubmit: (values, dispatch) => {
    return dispatch(createItem(values));
  }
})(Component);

const mapDispatchToProps = dispatch => ({
  chooseAnswer: (...attrs) => () => dispatch(chooseAnswer(...attrs))
});


export default connect(Selector, mapDispatchToProps)(Form);
