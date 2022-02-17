import React from 'react';
import { View} from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ContactsTab from '../../Specific/Home/Home'
import IncomingCall from '../../Specific/VideoCall/IncomingCall/IncomingCall'
import OutgoingCall from '../../Specific/VideoCall/OutgoingCall/OutgoingCall'
import ThreeMembers from '../../Specific/VideoCall/OutgoingCall/ThreeMembers';
import ThreeMembersTwo from '../../Specific/VideoCall/OutgoingCall/ThreeMembers-2';
import FourMembers from '../../Specific/VideoCall/OutgoingCall/FourMembers';
import IncomingVoice from '../../Specific/VoipCall/IncomingCall/IncomingCall'
import TwoMembersVoice from '../../Specific/VoipCall/OutgoingCall/TwoMembersVoice';
import ThreeMembersVoice from '../../Specific/VoipCall/OutgoingCall/ThreeMembersVoice';
import FourMembersVoice from '../../Specific/VoipCall/OutgoingCall/FourMembersVoice';
import SOSCall from '../../Specific/VoipCall/OutgoingCall/SOSCall';
import MessagePerson from '../../Specific/Messages/MessagePerson'
const Stack = createStackNavigator();
const ContactsNavigation = ({ navigation }) => {


    return (

        
            <Stack.Navigator initialRouteName='ContactTab' screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="ContactTab" component={ContactsTab} />
                <Stack.Screen name="Incoming" component={IncomingCall} />
                <Stack.Screen name="Outgoing" component={OutgoingCall} />
                <Stack.Screen name="Three" component={ThreeMembers} />
                <Stack.Screen name="Three2" component={ThreeMembersTwo} />
                <Stack.Screen name="Four" component={FourMembers} />
                <Stack.Screen name="IncomingVoip" component={IncomingVoice} />
                <Stack.Screen name="TwoMembersVoice" component={TwoMembersVoice} />
                <Stack.Screen name="ThreeMembersVoice" component={ThreeMembersVoice} />
                <Stack.Screen name="FourMembersVoice" component={FourMembersVoice} />
                <Stack.Screen name="SOSCall" component={SOSCall} />
                <Stack.Screen name="MessagePerson" component={MessagePerson} />
            </Stack.Navigator>
       

    );
};

export default ContactsNavigation;