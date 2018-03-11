import { createStructuredSelector } from 'reselect'

const questions = ({ questions: { data } }) => data;

export default createStructuredSelector({ questions });
