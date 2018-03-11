import { createStructuredSelector, createSelector } from 'reselect'

const questions = ({ questions: { data } }) => data;
const questionId = (state, { match: { params: { id } } }) => id;

const question = createSelector(
  [questions, questionId],
  (questions, questionId) => questions[questionId]
);


export default createStructuredSelector({
  questionId,
  question
});
