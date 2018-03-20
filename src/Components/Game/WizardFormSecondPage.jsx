import React, { Component } from 'react'
import { isEmpty } from 'lodash';
import { Field } from 'redux-form'
import Input from '../Forms/Fields/Input';
import './styles.css';

class WizardFormSecondPage extends Component {
  render() {
    const { handleSubmit, question, indexOfCurrentQuestion, chooseAnswer, isShowCorrectAnswer, answers } = this.props;

    if(isEmpty(question)) return null;

    return (
      (
        <form onSubmit={handleSubmit}>
          <div>
            { question.attributes.question }
          </div>

          { answers.map(({ answer, isCorrect }) => (
            <label key={answer} className={ isShowCorrectAnswer ? isCorrect ? 'green' : 'red' : '' }>
              <Field
                name={`answers[${indexOfCurrentQuestion}].answer`}
                component={Input}
                type="radio"
                value={answer}
                onChange={chooseAnswer(indexOfCurrentQuestion, question.attributes.question, isCorrect)}
              />
              { answer }
            </label>)
          ) }

        </form>
      )
    )
  }
}

export default WizardFormSecondPage;
