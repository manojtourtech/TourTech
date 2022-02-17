/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

import { addMessage, saveBackgroundChat } from './src/database/realmdb';
import Setup from './Setup';

messaging().setBackgroundMessageHandler(remoteMessage => {
    console.log('Message handled in the background!!!!!!!!', remoteMessage);
    addMessage(
        remoteMessage.data.body,
        remoteMessage.data.title,
        '',
        parseInt(remoteMessage.data.recipientUserID),
        parseInt(remoteMessage.data.sendingUserID),
        new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        remoteMessage.data.subject,
        parseInt(remoteMessage.data.typeID),
        parseInt(remoteMessage.data.typeID) != 1 ? remoteMessage.data.filePath : '',
        remoteMessage.data.attachmentID,
    );

    saveBackgroundChat(
        remoteMessage.data.body,
        remoteMessage.data.title,
        '',
        parseInt(remoteMessage.data.sendingUserID),
        parseInt(remoteMessage.data.recipientUserID),
        new Date().toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }),
        remoteMessage.data.subject,
        parseInt(remoteMessage.data.typeID),
    );
});

AppRegistry.registerComponent(appName, () => Setup);
