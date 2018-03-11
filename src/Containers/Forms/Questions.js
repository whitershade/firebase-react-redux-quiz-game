import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from '../../Components/Forms/Questions';
import { createItem } from '../../Actions/Questions';

const Form = reduxForm({
  form: 'questions',
  onSubmit: (values, dispatch, { isEditForm, editId }) => {
    // if (isEditForm) {
    //   return dispatch(actions.patchItem(editId, values));
    // }
    return dispatch(createItem(values));
  }
})(Component);


export default Form;
