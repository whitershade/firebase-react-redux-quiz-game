const initialState = {
  data: [],
  isLoading: false,
  isPushing: false,
  indexOfCurrentQuestion: 0
};

const QuestionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@QUESTIONS/START_LOAD':
      return Object.assign({}, state, { isLoading: true });

    case '@QUESTIONS/START_PUSH':
      return Object.assign({}, state, { isPushing: true });

    case '@QUESTIONS/NEXT_QUESTION':
      return Object.assign({}, state, { indexOfCurrentQuestion: state.indexOfCurrentQuestion + 1 });

    case '@QUESTIONS/ADD_ITEMS':
      return Object.assign({}, state, {
        data: payload,
        isLoading: false,
      });

    default:
      return state;
  }
};

export default QuestionsReducer;
