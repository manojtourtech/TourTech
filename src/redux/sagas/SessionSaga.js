import {put, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';

import ApiConfig from '../../config';

import {
  LOGIN_USER_RESPONSE,
  LOGIN_USER_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  LOGIN_USER_DETAILS,
} from '../actions/actionTypes';

/*****  FOR USER LOGIN ******/

// appType: 'Therapist',

export function* loginUser(action) {
  console.log('Action body=> ', action.body);
  try {
    const {nav, phoneNumber, phonePrefix, deviceToken, deviceType} =
      action.body;
    var register = axios.create({
      baseURL: ApiConfig.BASE_URL,
      timeout: 10000,
      headers: {'Content-Type': 'application/json'},
    });
    yield put({type: SHOW_LOADER});
    const response = yield register
      .post(ApiConfig.LOGIN, {
        phoneNumber: phoneNumber,
        phonePrefix: phonePrefix,
        deviceToken: deviceToken,
        deviceType: deviceType,
        publicKey: '',
      })
      .then(res => res);

    console.log('Response login==============> ', response.data);
    if (response.status === 200) {
      yield put({type: LOGIN_USER_RESPONSE, json: response.data});
      yield put({type: HIDE_LOADER});
      nav.replace('OTP');
    }
  } catch (error) {
    // update your UI to handle other errors
    console.log(error);
    yield put({type: LOGIN_USER_ERROR, json: error});
    yield put({type: HIDE_LOADER});
  }
}
