import {put, takeLatest, all} from 'redux-saga/effects';
import axios from 'axios';

import {SHOW_LOADER, HIDE_LOADER} from '../actions/actionTypes';
import ApiConfig from '../../config';

/*****  FOR START NEW CHAT ******/

export function* sendAttachment(action) {
  try {
    let {
      photoData,
      session_id,
      recipientUserID,
      user_id,
      previewFile,
      subject,
      body,
      typeId,
      fileType,
    } = action.data;
    console.log('Data =======================', action.data);

    let filename = photoData.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    if (typeId == 2) {
      photoData = 'file://' + photoData;
    }

    var data = new FormData();
    data.append('files', {uri: photoData, name: filename, type});
    data.append('sessionId', session_id);
    data.append('typeID', typeId);
    data.append('recipientUserID', recipientUserID);
    data.append('subject', subject);
    data.append('Body', body);
    data.append('fileTypes', fileType);
    data.append('previewFiles', previewFile);

    fetch('http://147.234.84.37:3000/api/v1/message/sending_message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
      .then(response => response.json())
      .then(response => {
        console.log('RESPONSE messages ================>>>>>>>>>>>', response);
      })
      .catch(error => {
        console.log('error in upload image ================>>>>>>>>>>>', error);
      });
  } catch (error) {
    // update your UI to handle other errors
    console.log('Set Profile Pic Error =', error);
    yield put({type: HIDE_LOADER});
  }
}
