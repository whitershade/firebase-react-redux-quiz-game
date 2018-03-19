import database from './Firebase';
import { change, startSubmit } from 'redux-form';
import { getNextQuestion } from './Questions';

export const createItem = attributes => dispatch => {
  database.ref('/answers').push({ attributes });
}

export const chooseAnswer = (indexOfCurrentQuestion, question, correct) => (dispatch, getState) => {
  const { questions: { data: questions } } = getState();

  console.log(questions.length - 1, indexOfCurrentQuestion);
  console.log(indexOfCurrentQuestion, question, correct);
  dispatch(change('answers', `answers[${indexOfCurrentQuestion}].correct`, correct));
  dispatch(change('answers', `answers[${indexOfCurrentQuestion}].question`, question));

  if ((questions.length - 1) > indexOfCurrentQuestion) {
    dispatch(getNextQuestion());
  } else {
    // dispatch(startSubmit());
  }
}
