import {RSA} from 'react-native-rsa-native';

import {addMessage, saveBackgroundChat} from '../database/local_patient_db';
import {store} from '../../App';

export const addMessageToDb = remoteMessage => {
  if (parseInt(remoteMessage.data.typeID) == 1) {
    addMessage(
      remoteMessage.data.body,
      remoteMessage.data.title,
      remoteMessage.data.profilePic,
      parseInt(remoteMessage.data.recipientUserID),
      parseInt(remoteMessage.data.sendingUserID),
      parseInt(remoteMessage.data.typeID),
      parseInt(remoteMessage.data.typeID) != 1
        ? remoteMessage.data.filePath
        : '',
      remoteMessage.data.attachmentID,
      false,
      2,
    );

    saveBackgroundChat(
      remoteMessage.data.body,
      remoteMessage.data.title,
      remoteMessage.data.profilePic,
      parseInt(remoteMessage.data.sendingUserID),
      parseInt(remoteMessage.data.recipientUserID),
      parseInt(remoteMessage.data.typeID),
    );
  } else {
    addMessage(
      remoteMessage.data.body,
      remoteMessage.data.title,
      remoteMessage.data.profilePic,
      parseInt(remoteMessage.data.recipientUserID),
      parseInt(remoteMessage.data.sendingUserID),
      parseInt(remoteMessage.data.typeID),
      parseInt(remoteMessage.data.typeID) != 1
        ? remoteMessage.data.filePath
        : '',
      remoteMessage.data.attachmentID,
      false,
      2,
    );

    saveBackgroundChat(
      remoteMessage.data.body,
      remoteMessage.data.title,
      remoteMessage.data.profilePic,
      parseInt(remoteMessage.data.sendingUserID),
      parseInt(remoteMessage.data.recipientUserID),
      parseInt(remoteMessage.data.typeID),
    );
  }
};
