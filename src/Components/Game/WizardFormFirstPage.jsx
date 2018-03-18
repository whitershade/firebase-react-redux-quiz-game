import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../Forms/Fields/Input';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      FIRST PAGE

      <Field
        name="firstName"
        type="text"
        component={Input}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={Input}
        label="Last Name"
      />
      <Field
        name="company"
        type="text"
        component={Input}
        label="company"
      />
      <Field
        name="email"
        type="text"
        component={Input}
        label="email"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default WizardFormFirstPage;
