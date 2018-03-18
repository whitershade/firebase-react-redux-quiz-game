import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from '../../Components/Game/WizardFormSecondPage';
import { createItem } from '../../Actions/Answers';


const Form = reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  onSubmit: (values, dispatch) => {
    return dispatch(createItem(values));
  }
})(Component);


export default Form;
