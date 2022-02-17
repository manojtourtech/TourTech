import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import LoginNavigation from './src/screens/Navigations/LoginNavigation/LoginNavigation';
import DrawerNavigation from './src/screens/Navigations/ContactsNavigation/DrawerNavigation';
import Home from './src/screens/Specific/Home/Home';
import messaging from '@react-native-firebase/messaging';
import createStore from './src/redux/reducers';

const {store, persistor} = createStore();

const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  // useEffect(() => {
  //   requestUserPermission();
  // }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     getFcmToken(); //<---- Add this
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log(fcmToken);
  //     // setToken(fcmToken);
  //     console.log('Your Firebase Token is:', fcmToken);
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="AuthNavigation"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="AuthNavigation" component={LoginNavigation} />
            <Stack.Screen name="HomeNavigation" component={DrawerNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </View> */}
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
});
