import {put, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';

import {SHOW_LOADER, HIDE_LOADER} from '../actions/actionTypes';
import config from '../../config';
import {updateMessageDeliveryStatus} from '../../database/realmdb';

/*****  FOR START NEW CHAT ******/

export function* sendMessage(action) {
  console.log('Action Send Message => ', action);
  try {
    const {typeID, sessionId, recipientUserID, subject, body, messageId} =
      action.data;

    console.log('Session Id =', sessionId);
    console.log('typeID =', typeID);
    console.log('recipientUserID =', recipientUserID);
    console.log('subject =', subject);
    console.log('body =', body);
    var sendMessageApi = axios.create({
      baseURL: config.BASE_URL + 'message/sending_message',
      timeout: 10000,
      headers: {'Content-Type': 'application/json'},
    });
    yield put({type: SHOW_LOADER});
    const response = yield sendMessageApi
      .post('', {
        typeID: typeID,
        sessionId: sessionId,
        recipientUserID: recipientUserID,
        subject: 'Subject',
        Body: body,
      })
      .then(res => res);
    console.log('Response => ', response);
    if (response.status === 200) {
      yield put({type: HIDE_LOADER});
      updateMessageDeliveryStatus(messageId);
    }
  } catch (error) {
    // update your UI to handle other errors
    console.log('Send Message =', error);
    yield put({type: HIDE_LOADER});
  }
}
