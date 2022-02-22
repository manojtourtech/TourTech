import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MyPatients from '../../Specific/MyPatients/MyPatients';
import PatientsTab from '../../Specific/MyPatients/PatientsTab/PatientsTab';
import PatientTasks from '../../Specific/MyPatients/PatientsTab/PatientTasks'
import PatientMedicines from '../../Specific/MyPatients/PatientsTab/PatientMedicines'
import PatientQueues from '../../Specific/MyPatients/PatientsTab/PatientQueues';
import PatientMedicalInfo from '../../Specific/MyPatients/PatientMedicalInfo';
import MedicalTests from '../../Specific/MyPatients/MedicalTests';
import MedicalTesttest from '../../Specific/MyPatients/MedicalTest-Test';
import PrescriptionDrugs from '../../Specific/MyPatients/PrescriptionDrugs';
import PrescriptiondrugsDrugs from '../../Specific/MyPatients/PrescriptiondrugsDrugs';
import AddDrugs from '../../Specific/MyPatients/AddDrugs';
import MedicalStaff from '../../Specific/MyPatients/MedicalStaff';
import EditPatients from '../../Specific/MyPatients/EditPatients';
import EditPatientTwo from '../../Specific/MyPatients/EditPatientTwo';
import PatientMoodReport from '../../Specific/MyPatients/PatientMoodReport'
import PatientAllTasks from '../../Specific/MyPatients/PatientAllTasks';
import PatientAllTasksEdit from '../../Specific/MyPatients/PatientAllTasksEdit';
import PatientAllMedicines from '../../Specific/MyPatients/PatientAllMedicines';
import PatientAllMedicines_Med from '../../Specific/MyPatients/PatientAllMedicines_Med';
import PatientAllQueues from '../../Specific/MyPatients/PatientAllQueues';
import PatientAllQueuesEdit from '../../Specific/MyPatients/PatientAllQueuesEdit';
import PatientAllQueueLast from '../../Specific/MyPatients/PatientAllQueueLast';

const Stack = createStackNavigator();
const PatientsNavigation = ({ navigation }) => {


    return (

        
            <Stack.Navigator initialRouteName='MyPatients' screenOptions={{ headerShown: false, }}>
                <Stack.Screen name="MyPatients" component={MyPatients} />
                <Stack.Screen name="PatientsTab" component={PatientsTab} />
                <Stack.Screen name="PatientTasks" component={PatientTasks} />
                <Stack.Screen name="PatientMedicines" component={PatientMedicines} />                
                <Stack.Screen name="PatientQueues" component={PatientQueues} />
                <Stack.Screen name="PatientMedicalInfo" component={PatientMedicalInfo} />
                <Stack.Screen name="MedicalTests" component={MedicalTests} />
                <Stack.Screen name="MedicalTesttest" component={MedicalTesttest} />
                <Stack.Screen name="PrescriptionDrugs" component={PrescriptionDrugs} />
                <Stack.Screen name="PrescriptiondrugsDrugs" component={PrescriptiondrugsDrugs} />
                <Stack.Screen name="AddDrugs" component={AddDrugs} />
                <Stack.Screen name="MedicalStaff" component={MedicalStaff} />
                <Stack.Screen name="EditPatients" component={EditPatients} />
                <Stack.Screen name="EditPatientTwo" component={EditPatientTwo} />
                <Stack.Screen name="PatientMoodReport" component={PatientMoodReport} />
                <Stack.Screen name="PatientAllTasks" component={PatientAllTasks} />
                <Stack.Screen name="PatientAllTasksEdit" component={PatientAllTasksEdit} />
                <Stack.Screen name="PatientAllMedicines" component={PatientAllMedicines} />
                <Stack.Screen name="PatientAllMedicinesMed" component={PatientAllMedicines_Med} />
                <Stack.Screen name="PatientAllQueues" component={PatientAllQueues} />
                <Stack.Screen name="PatientAllQueuesEdit" component={PatientAllQueuesEdit} />
                <Stack.Screen name="PatientAllQueueLast" component={PatientAllQueueLast} />
            </Stack.Navigator>
        


    );
};

export default PatientsNavigation;