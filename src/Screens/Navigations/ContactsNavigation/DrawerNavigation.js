import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactsNavigation from './ContactsNavigation';
import DrawerContent from '../../../components/DrawerComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Drawer.Screen name="Main" component={ContactsNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
