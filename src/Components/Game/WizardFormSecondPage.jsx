import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../Forms/Fields/Input';


const WizardFormSecondPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      SECOND PAGE

      <button type="submit">
         Submit
      </button>
    </form>
  )
}


export default WizardFormSecondPage;
