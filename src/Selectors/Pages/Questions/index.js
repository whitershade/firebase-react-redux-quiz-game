import { createSelector, createStructuredSelector } from 'reselect'
import { shuffle } from 'lodash';

const questions = ({ questions: { data } }) => data;
const indexOfCurrentQuestion = ({ questions: { indexOfCurrentQuestion } }) => indexOfCurrentQuestion;
const isShowCorrectAnswer = ({ answers: { isShowCorrectAnswer } }) => isShowCorrectAnswer;


const question = createSelector(
  [questions, indexOfCurrentQuestion],
  (questions, indexOfCurrentQuestion) => questions[indexOfCurrentQuestion]
);

const answers = createSelector(
  [question],
  (question) => {
    const correctAnswers = question.attributes.correctAnswers.map((answer) => ({ answer, isCorrect: true }));
    const incorrectAnswers = question.attributes.incorrectAnswers.map((answer) => ({ answer, isCorrect: false }));

    return shuffle([...correctAnswers, ...incorrectAnswers]);
  }
);


export default createStructuredSelector({ indexOfCurrentQuestion, question, isShowCorrectAnswer, answers });
