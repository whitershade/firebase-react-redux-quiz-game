const initialState = {
  isShowCorrectAnswer: false
};

const AnswersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@ANSWERS/SHOW_CORRECT_ANSWER':
      return Object.assign({}, state, { isShowCorrectAnswer: true });

    case '@ANSWERS/HIDE_CORRECT_ANSWER':
      return Object.assign({}, state, { isShowCorrectAnswer: false });

    default:
      return state;
  }
};


export default AnswersReducer;
