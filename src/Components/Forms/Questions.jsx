import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from './Fields/Input';

export default class PostForm extends PureComponent {
  static required(value) {
    return value ? undefined : 'Required';
  }

  render() {
    const { constructor: { required }, props: { handleSubmit, id } } = this;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="question" component={Input} validate={required} />
        <Field name="correctAnswer" component={Input} validate={required} />
        <Field name="incorrectAnswer" component={Input} validate={required} />

        <button>Submit</button>
        <Link
          to={id ? `/questions/${id}` : '/questions'}
          href={id ? `/questions/${id}` : '/questions'}
        >
          Cancel
        </Link>
      </form>
    );
  }
}
