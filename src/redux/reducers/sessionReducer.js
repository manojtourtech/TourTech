import {
  REGISTER_NUMBER_RESPONSE,
  OTP_VERIFY,
  LOG_OUT,
} from '../actions/actionTypes';
const initialState = {
  otpVerifyDone: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NUMBER_RESPONSE:
      return {...state, data: action.json.data};
    case OTP_VERIFY:
      return {...state, otpVerifyDone: action.status};
    case LOG_OUT:
      return {...state, otpVerifyDone: false};
    default:
      return state;
  }
};

export default reducer;
