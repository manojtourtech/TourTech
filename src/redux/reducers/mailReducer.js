import {
  ADD_TO,
  ADD_CC,
  ADD_BCC,
  REMOVE_TO,
  REMOVE_CC,
  REMOVE_BCC,
  SEND_TYPE,
  CLEAN,
} from "../actions/actionTypes";
const initialState = {
  to: [],
  cc: [],
  bcc: [],
  sendTypeSelected: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO:
      return { ...state, to: [...state.to, action.address] };
    case ADD_CC:
      return { ...state, cc: [...state.cc, action.address] };
    case ADD_BCC:
      return { ...state, bcc: [...state.bcc, action.address] };
    case REMOVE_TO:
      return {
        ...state,
        to: [...state.to.filter((item) => item !== action.address)],
      };
    case REMOVE_CC:
      return {
        ...state,
        cc: [...state.cc.filter((item) => item !== action.address)],
      };
    case REMOVE_BCC:
      return {
        ...state,
        bcc: [...state.bcc.filter((item) => item !== action.address)],
      };

    case CLEAN:
      return {
        ...state,
        to: [],
        cc: [],
        bcc: [],
      };
    case SEND_TYPE:
      return { ...state, sendTypeSelected: action.sendType };
    default:
      return state;
  }
};

export default reducer;
