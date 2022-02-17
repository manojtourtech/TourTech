import {all, fork, takeEvery} from 'redux-saga/effects';

import {registerNumber, registerUser} from './SessionSaga';
import {getProfileDetail} from './GetProfileDetailSaga';
import {sendMessage} from './SendMessageSaga';

import {
  REGISTER_NUMBER,
  GET_PROFILE_DETAIL,
  SEND_MESSAGE,
} from '../actions/actionTypes';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  //yield all([fork(REGISTER_NUMBER, registerActionWatcher)]);
  yield all([
    takeEvery(REGISTER_NUMBER, registerNumber),
    takeEvery(GET_PROFILE_DETAIL, getProfileDetail),
    takeEvery(SEND_MESSAGE, sendMessage),
  ]);
}
