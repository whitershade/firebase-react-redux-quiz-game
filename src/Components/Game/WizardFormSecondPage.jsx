import React, { Component } from 'react'
import { isEmpty } from 'lodash';
import { Field } from 'redux-form'
import Input from '../Forms/Fields/Input';

class WizardFormSecondPage extends Component {
  render() {
    const { handleSubmit, question, indexOfCurrentQuestion, chooseAnswer } = this.props;

    if(isEmpty(question)) return null;

    return (
      (
        <form onSubmit={handleSubmit}>
          <div>
            { question.attributes.question }
          </div>

          { question.attributes.correctAnswers.map((answer, index)  => (
            <label key={answer}>
              <Field
                name={`answers[${indexOfCurrentQuestion}].answer`} component={Input} type="radio" value={answer} onChange={chooseAnswer(indexOfCurrentQuestion, question.attributes.question, true)}/>
              { answer }
            </label>)
          ) }
          { question.attributes.incorrectAnswers.map((answer, index) => (
            <label key={index}>
              <Field
                name={`answers[${indexOfCurrentQuestion}].answer`}
                component={Input}
                type="radio"
                value={answer}
                onChange={chooseAnswer(indexOfCurrentQuestion, question.attributes.question, false)}/>
              { answer }
            </label>)
          ) }
          <br />
          <button type="submit">
             Submit
          </button>
        </form>
      )
    )
  }
}

export default WizardFormSecondPage;
