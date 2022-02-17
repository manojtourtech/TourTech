import {
  SAVE_MESSAGE,
  GET_MESSAGE_LIST,
  DELETE_MESSAGE,
} from '../actions/actionTypes';
const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE:
      return {
        messages: [...state.messages, action.data],
      };
    case GET_MESSAGE_LIST:
      return {
        messages: state.messages,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
