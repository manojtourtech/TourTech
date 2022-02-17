import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Pressable,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DrawerActions} from '@react-navigation/native';
import {Badge, Icon} from 'react-native-elements';
import {Card, Avatar} from 'react-native-paper';
import {ms, s, vs} from 'react-native-size-matters';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {colors} from '../../../assets/colors/colors';
import HomeTasks from '../../Specific/Home/HomeTasks/HomeTasks';
import HomeMedicines from '../../Specific/Home/HomeMedicines/HomeMedicines';
import HomeQueues from '../../Specific/Home/HomeQueues/HomeQueues';
import CustomTabs from './CustomTabs';
import RecordingModal from '../../../components/RecordingModal';

const Tab = createMaterialTopTabNavigator();

const tabData = [
  {
    id: 1,
    tabName: 'םירות',
  },
  {
    id: 2,
    tabName: 'תופורתה',
  },
  {
    id: 3,
    tabName: 'םוי רדס',
  },
];

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const MyScheduleNavigation = ({navigation}) => {
  const [mood, setMood] = useState(0);
  const [visible, setVisible] = useState(false);
  const [recordModal, setRecordModal] = useState(false);

  const recordModalVisibility = show => {
    setRecordModal(show);
  };

  return (
    <>
      <View style={styles.topView}>
        <View
          style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View
              style={{
                height: s(38),
                width: s(38),
                backgroundColor: '#E6EEF4',
                borderRadius: 38,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconEnt name="menu" size={s(22)} color={colors.textColor} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.Text1}>{reverseText('ילש םויה')}</Text>
        </View>
        <View
          style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <View
              style={{
                height: s(38),
                width: s(38),
                backgroundColor: '#E6EEF4',
                borderRadius: 38,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconIon
                name="ios-notifications-sharp"
                size={s(22)}
                color={colors.textColor}
              />
              <Badge
                badgeStyle={{width: 25, height: 25, borderRadius: 25}}
                value="12"
                status="error"
                containerStyle={styles.badgeStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topView2}>
        <View
          style={{
            height: 45,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: '#A7B9D01A',
          }}>
          <Text style={styles.Text2}>
            {reverseText('ןושאר םוי')}
            {'29/6/2021'}
          </Text>
        </View>
      </View>
      {visible ? (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: vs(20), margin: 15}}>
            <Text style={styles.Text3}>{reverseText('ילארשי לארשי םולש')}</Text>
            <View
              style={{
                flexDirection: 'row-reverse',
                marginTop: vs(30),
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                size={s(45)}
              />
              <View
                style={{
                  height: 50,
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                  backgroundColor: '#E6EEF4',
                  right: s(-10),
                }}>
                <Text style={styles.Text2}>
                  {reverseText('?םויה שיגרמ התא ךיא')}
                </Text>
              </View>
            </View>

            <Card style={styles.card1}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(10),
                  marginVertical: vs(14),
                }}>
                <Text style={styles.Text4}>{reverseText('חור בצמ רחב')}</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: vs(15),
                  }}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.outerCircle,
                        {backgroundColor: mood == 1 ? '#3599b9' : '#ffffff'},
                      ]}>
                      <Pressable onPress={() => setMood(1)}>
                        <Image
                          source={require('../../../assets/images/1.1.png')}
                          style={{height: 42, width: 42}}
                        />
                      </Pressable>
                    </View>
                    <Text style={styles.Text5}>{reverseText('הלוח')}</Text>
                  </View>

                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.outerCircle,
                        {backgroundColor: mood == 2 ? '#3599b9' : '#ffffff'},
                      ]}>
                      <Pressable onPress={() => setMood(2)}>
                        <Image
                          source={require('../../../assets/images/2.2.png')}
                          style={{height: 42, width: 42}}
                        />
                      </Pressable>
                    </View>
                    <Text style={styles.Text5}>{reverseText('הלוח')}</Text>
                  </View>

                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.outerCircle,
                        {backgroundColor: mood == 3 ? '#3599b9' : '#ffffff'},
                      ]}>
                      <Pressable onPress={() => setMood(3)}>
                        <Image
                          source={require('../../../assets/images/3.png')}
                          style={{height: 42, width: 42}}
                        />
                      </Pressable>
                    </View>
                    <Text style={styles.Text5}>{reverseText('הלוח')}</Text>
                  </View>

                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.outerCircle,
                        {backgroundColor: mood == 4 ? '#3599b9' : '#ffffff'},
                      ]}>
                      <Pressable onPress={() => setMood(4)}>
                        <Image
                          source={require('../../../assets/images/4.png')}
                          style={{height: 42, width: 42}}
                        />
                      </Pressable>
                    </View>
                    <Text style={styles.Text5}>{reverseText('הלוח')}</Text>
                  </View>

                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.outerCircle,
                        {backgroundColor: mood == 5 ? '#3599b9' : '#ffffff'},
                      ]}>
                      <Pressable onPress={() => setMood(5)}>
                        <Image
                          source={require('../../../assets/images/5.png')}
                          style={{height: 42, width: 42}}
                        />
                      </Pressable>
                    </View>
                    <Text style={styles.Text5}>{reverseText('הלוח')}</Text>
                  </View>
                </View>
              </View>
            </Card>
            <Text
              style={[styles.Text2, {alignSelf: 'center', marginTop: vs(30)}]}>
              {reverseText('תילוק העדוה ףסוה')}
            </Text>
            <Pressable onPress={() => setRecordModal(true)}>
              <View
                style={{
                  height: s(50),
                  width: s(50),
                  borderRadius: 50,
                  elevation: 4,
                  marginTop: vs(30),
                  backgroundColor: '#E6EEF4',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconFont5
                  name="microphone"
                  size={s(20)}
                  color={colors.PrimaryColor}
                />
              </View>
            </Pressable>

            <TouchableOpacity style={styles.button1}>
              <Text style={styles.Text6}>{reverseText('בושמ חלש')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <Tab.Navigator
          initialRouteName="HomeTasks"
          tabBar={props => <CustomTabs {...props} tabData={tabData} />}>
          <Tab.Screen name="HomeQueues" component={HomeQueues} />
          <Tab.Screen name="HomeMedicines" component={HomeMedicines} />
          <Tab.Screen name="HomeTasks" component={HomeTasks} />
        </Tab.Navigator>
      )}
      <Modal
        visible={recordModal}
        animationType="slide"
        transparent
        presentationStyle="overFullScreen"
        onRequestClose={recordModalVisibility}>
        <RecordingModal closeModal={recordModalVisibility} />
      </Modal>
    </>
  );
};

// const Stack = createStackNavigator();
// const MyScheduleNavigation = ({navigation}) => {
//     return (
//             <Stack.Navigator initialRouteName='MainHome' screenOptions={{ headerShown: false, }}>
//                 <Stack.Screen name="HomeTasks" component={HomeTasks} />
//                 <Stack.Screen name="HomeMedicines" component={HomeMedicines} />
//                 <Stack.Screen name="HomeQueues" component={HomeQueues} />
//             </Stack.Navigator>
//     );
// };

export default MyScheduleNavigation;
