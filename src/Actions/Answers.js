import database from './Firebase';
import { change, submit } from 'redux-form';
import { getNextQuestion } from './Questions';

const showCorrectAnswer = () => ({
  type: '@ANSWERS/SHOW_CORRECT_ANSWER'
})

const hideCorrectAnswer = () => ({
  type: '@ANSWERS/HIDE_CORRECT_ANSWER'
})

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
  const { questions: { data: questions } } = getState();

  dispatch(change('answers', `answers[${indexOfCurrentQuestion}].isCorrect`, correct));
  dispatch(change('answers', `answers[${indexOfCurrentQuestion}].question`, question));
  dispatch(handleNumberOfCorrectAnswers(correct));

  dispatch(showCorrectAnswer());
  setTimeout(() => {
    dispatch(hideCorrectAnswer());

    if ((questions.length - 1) > indexOfCurrentQuestion) {
      dispatch(getNextQuestion());
    } else {
      dispatch(submit('answers'));
    }
  }, 1000);
}
