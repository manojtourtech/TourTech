import React from 'react';
import { View, } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Splash from '../../General/Splash/Splash'
import Login from '../../General/Login/Login'
import OTP from '../../General/OTP/OTP'

const Stack = createStackNavigator();

const LoginNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="OTP" component={OTP} />
        </Stack.Navigator>
    );
};

export default LoginNavigation;