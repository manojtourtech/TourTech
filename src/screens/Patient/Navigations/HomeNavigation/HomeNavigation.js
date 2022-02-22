import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

// import Login from '../../../comman/Login/Login';
import Contacts from '../../../comman/Contacts/Contact';
import Settings from '../../Specific/Account/Settings';
import SettingsTwo from '../../Specific/Account/SettingsTwo';
import AddNew from '../../../comman/Contacts/AddNew';

const Stack = createStackNavigator();

const SettingNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="AddNew" component={AddNew} />
      <Stack.Screen name="SettingsTwo" component={SettingsTwo} />
      {/* <Stack.Screen name="LogIn" component={Login} /> */}
    </Stack.Navigator>
  );
};

export default SettingNavigation;
