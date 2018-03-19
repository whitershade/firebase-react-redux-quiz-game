import { createSelector, createStructuredSelector } from 'reselect'


const questions = ({ questions: { data } }) => data;
const indexOfCurrentQuestion = ({ questions: { indexOfCurrentQuestion } }) => indexOfCurrentQuestion;


const question = createSelector(
  [questions, indexOfCurrentQuestion],
  (questions, indexOfCurrentQuestion) => questions[indexOfCurrentQuestion]
);


export default createStructuredSelector({ indexOfCurrentQuestion, question });
