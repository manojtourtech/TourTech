// In App.js in a new project

import React, { useEffect } from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage'

export {
    firebase,
    messaging
};

const Device_token = '@save_age'

const Setup = () => {

    const setupCloudMessaging = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
            getFcmToken(); //<---- Add this
            console.log('Authorization status:', authStatus);
        }
    };

    const getFcmToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log(fcmToken);
            // setToken(fcmToken);
            AsyncStorage.setItem(
                'FCM_Token',
                fcmToken
            );
            console.log('Your Firebase Token is:', fcmToken);
        } else {
            console.log('Failed', 'No token received');
        }
    };

    useEffect(() => {
        setupCloudMessaging();

        // It will trigger when app was in background
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
            //alert(JSON.stringify(remoteMessage));
        });

        // It will trigger when app was in quit mode
        messaging().getInitialNotification(remoteMessage => {
            console.log('Message handled in the quit mode', remoteMessage);
            // alert(JSON.stringify(remoteMessage));
        });

        // If App is in foreground mode
        messaging().onMessage(remoteMessage => {
            console.log('Message handled in the foreground!', remoteMessage);
            // alert(JSON.stringify(remoteMessage));
        });
    }, []);
    return <App />;
};

export default Setup;