import {LOGIN_USER_RESPONSE, OTP_VERIFY, LOG_OUT} from '../actions/actionTypes';
const initialState = {
  otpVerifyDone: false,
  userDetail: {},
};

const reducer = (state = initialState, action) => {
  console.log('session reducer ==', action);
  switch (action.type) {
    case LOGIN_USER_RESPONSE:
      return {...state, userDetail: action.json};
    case OTP_VERIFY:
      return {...state, otpVerifyDone: action.status};
    case LOG_OUT:
      return {...state, otpVerifyDone: false, userDetail: {}};
    default:
      return state;
  }
};

export default reducer;
