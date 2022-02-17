import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Messages from '../../Specific/Messages/Messages';
import SearchMessage from '../../Specific/Messages/SearchMessages';
import SearchAttachment from '../../Specific/Messages/SearchAttachments';
const Stack = createStackNavigator();
const MessageNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="SearchMessage" component={SearchMessage} />
      <Stack.Screen name="SearchAttachment" component={SearchAttachment} />
    </Stack.Navigator>
  );
};

export default MessageNavigation;
