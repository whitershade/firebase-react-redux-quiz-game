import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import questions from './Questions';
import answers from './Answers';

export default combineReducers({
  form,
  routing,
  answers,
  questions
});
