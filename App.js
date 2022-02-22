import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, I18nManager} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import LoginNavigation from './src/screens/comman/LoginNavigation';
import PatientDrawerNavigation from './src/screens/Patient/Navigations/ContactsNavigation/DrawerNavigation';
import TherapistDrawerNavigation from './src/screens/Therapist/Navigations/ContactsNavigation/DrawerNavigation';
import createStore from './src/redux/reducers';

const {store, persistor} = createStore();

const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="AuthNavigation"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="AuthNavigation" component={LoginNavigation} />
            <Stack.Screen
              name="PatientNavigation"
              component={PatientDrawerNavigation}
            />
            <Stack.Screen
              name="TherapistNavigation"
              component={TherapistDrawerNavigation}
            />
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
