/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

import {updateUserStatus} from './src/database/local_patient_db';
import {addMessageToDb} from './src/utils/addMessageToDb';
import Setup from './Setup';

messaging().setBackgroundMessageHandler(remoteMessage => {
  console.log('Message handled in the background!!!!!!!!', remoteMessage);
  if (remoteMessage.data.type == 'chat') {
    addMessageToDb(remoteMessage);
  } else {
    if (
      remoteMessage.data.type == 'online' ||
      remoteMessage.data.type == 'offline'
    ) {
      updateUserStatus(
        parseInt(remoteMessage.data.sendingUserID),
        remoteMessage.data.type == 'online' ? true : false,
      );
    }
  }
});

AppRegistry.registerComponent(appName, () => Setup);
