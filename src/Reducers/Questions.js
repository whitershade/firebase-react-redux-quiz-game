import { mapKeys, omit } from 'lodash';

const initialState = {
  data: {},
  isLoading: false,
  isPushing: false,
};

const QuestionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@QUESTIONS/START_LOAD':
      return Object.assign({}, state, { isLoading: true });

    case '@QUESTIONS/START_PUSH':
      return Object.assign({}, state, { isPushing: true });

    case '@QUESTIONS/ADD_ITEMS':
      return Object.assign({}, state, {
        data: mapKeys(payload, 'id'),
        isLoading: false,
      });

    case '@QUESTIONS/REMOVE_ITEM':
      return Object.assign({}, state, {
        data: omit(state.data, payload),
        isPushing: false,
      });

    case '@QUESTIONS/ADD_ITEM': {
      return Object.assign({}, state, {
        data: { ...state.data, [payload.id]: payload },
        isLoading: false,
      });
    }

    case '@QUESTIONS/EDIT_ITEM': {
      return Object.assign({}, state, {
        data: {
          ...state.data,
          [payload.id]: Object.assign({}, state.data[payload.id], payload),
        },
        isPushing: false,
      });
    }

    default:
      return state;
  }
};

export default QuestionsReducer;
