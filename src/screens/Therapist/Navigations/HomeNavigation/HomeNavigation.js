import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from '../../Specific/Home/HomeTabs/HomeTabs';
import HomeTasks from '../../Specific/Home/HomeTasks/HomeTasks';
import HomeTasksTask from '../../Specific/Home/HomeTasks/HomeTaskTab/HomeTasks_Task';
import HomeTaskTwo from '../../Specific/Home/HomeTasks/HomeTaskTab/HomeTaskTwo';
import AddNewTask from '../../Specific/Home/HomeTasks/AddNewTask/AddNewTask';
import HomeTaskTab from '../../Specific/Home/HomeTasks/HomeTaskTab/HomeTaskTab';
import HomeMedicines from '../../Specific/Home/HomeMedicines/HomeMedicines';
import HomeQueue from '../../Specific/Home/HomeQueues/HomeQueues';
import HomeMedicinesMed from '../../Specific/Home/HomeMedicines/HomeMedicines_Med';

import ProductDetail from '../../Specific/Home/HomeMedicines/ProductDetailView';
import HomeQueueQueue from '../../Specific/Home/HomeQueues/Queues_Queue';


const Stack = createStackNavigator();
const HomeNavigation = ({ navigation }) => {


    return (
        <Stack.Navigator initialRouteName='HomeTabs' screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="HomeTasks" component={HomeTasks} />
            <Stack.Screen name="AddNewTask" component={AddNewTask} />
            <Stack.Screen name="HomeMedicines" component={HomeMedicines} />
            <Stack.Screen name="Homequeue" component={HomeQueue} />
            <Stack.Screen name="HomeTaskTab" component={HomeTaskTab} />
            <Stack.Screen name="HomeTaksTask" component={HomeTasksTask} />
            <Stack.Screen name="HomeTaskTwo" component={HomeTaskTwo} />
            <Stack.Screen name="HomeMedicinesMed" component={HomeMedicinesMed} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="HomeQueuesQueue" component={HomeQueueQueue} />

        </Stack.Navigator>



    );
};

export default HomeNavigation;