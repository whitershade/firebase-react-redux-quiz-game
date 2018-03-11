import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';


export default class Question extends PureComponent {
  componentDidMount() {
    const { loadItem, questionId } = this.props;

    loadItem(questionId);
  }

  render() {
    const { question } = this.props;

    if (isEmpty(question)) return null;

    return (
      <div>
        <Link href="/questions" to="/questions">
          Questions
        </Link>
        <h1>Question</h1>
         <p>Question: {question.attributes.question}</p>
         <p>Correct answer: {question.attributes.correctAnswer}</p>
         <p>Incorrect answer: {question.attributes.incorrectAnswer}</p>
      </div>
    );
  }
}
