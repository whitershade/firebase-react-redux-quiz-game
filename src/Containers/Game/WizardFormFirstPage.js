import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from '../../Components/Game/WizardFormFirstPage';
import { createItem } from '../../Actions/Answers';


const Form = reduxForm({
  form: 'answers', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(Component);


export default Form;
