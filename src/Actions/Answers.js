import database from './Firebase';
import { change, submit } from 'redux-form';
import { getNextQuestion } from './Questions';

export const createItem = attributes => dispatch => {
  database
    .ref('/answers')
    .push({ attributes })
    .then(() => console.log('done'));
}

export const setInitialNumberOfCorrectAnswers = () => dispatch => {
  dispatch(change('answers', 'numberOfCorrectAnwsers', 0));
}

const handleNumberOfCorrectAnswers = (correct) => (dispatch, getState) => {
  const { form: { answers: { values: { numberOfCorrectAnwsers  } } } } = getState();

  if (correct) dispatch(change('answers', 'numberOfCorrectAnwsers', numberOfCorrectAnwsers + 1));
}

export const chooseAnswer = (indexOfCurrentQuestion, question, correct) => (dispatch, getState) => {
  const { questions: { data: questions }, form: { answers: { values: { numberOfCorrectAnwsers  } } } } = getState();

  Promise.all([
      dispatch(change('answers', `answers[${indexOfCurrentQuestion}].isCorrect`, correct)),
      dispatch(change('answers', `answers[${indexOfCurrentQuestion}].question`, question)),
      dispatch(handleNumberOfCorrectAnswers(correct))
    ])
    .then(() => {
      if ((questions.length - 1) > indexOfCurrentQuestion) {
        dispatch(getNextQuestion());
      } else {
        dispatch(submit('answers'));
      }
    });
}
