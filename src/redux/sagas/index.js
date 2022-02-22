import {all, fork, takeEvery} from 'redux-saga/effects';

import {loginUser} from './SessionSaga';
import {getProfileDetail} from './GetProfileDetailSaga';
import {sendMessage} from './SendMessageSaga';
import {sendAttachment} from './SendAttachmentSaga';

import {
  LOGIN_USER,
  GET_PROFILE_DETAIL,
  SEND_MESSAGE,
  SEND_ATTACHMENT,
} from '../actions/actionTypes';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  //yield all([fork(REGISTER_NUMBER, registerActionWatcher)]);
  yield all([
    takeEvery(LOGIN_USER, loginUser),
    takeEvery(GET_PROFILE_DETAIL, getProfileDetail),
    takeEvery(SEND_MESSAGE, sendMessage),
    takeEvery(SEND_ATTACHMENT, sendAttachment),
  ]);
}
