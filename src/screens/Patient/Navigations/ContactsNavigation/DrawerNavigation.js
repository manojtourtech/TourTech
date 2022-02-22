import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ContactsNavigation from './ContactsNavigation';
import DrawerContent from '../../../../components/DrawerComponent';

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
