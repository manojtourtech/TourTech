import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import {s, vs, ms} from 'react-native-size-matters';

import styles from './Styles';
import colors from '../../../../theme/colors';
import MessagesNavigation from '../../Navigations/MessagesNavigation/MessagesNavigation';
import Notifications from '../Notifications/Notifications';
import Help from '../Help/Help';
import ScheduleNavigation from '../../Navigations/ScheduleNavigation/ScheduleNavigation';
import HomeNavigation from '../../Navigations/HomeNavigation/HomeNavigation';
import MyTherapists from '../MyTherapists/Mytherapists';
import {getProfileDetail} from '../../../../redux/actions';
import {getUnreadMessageCount} from '../../../../database/local_patient_db';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Tab = createBottomTabNavigator();
const Home = ({navigation, ...props}) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    props.getProfileDetail({
      session_id: props.session_id,
    });
  }, []);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      // const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);
      console.log(
        'Permission Granted =',
        granted['android.permission.READ_CONTACTS'],
      );
      if (granted['android.permission.READ_CONTACTS'] === 'granted') {
        //alert("You've access for the location");
        if (getAllUsersCount() == 0) {
          console.log('Loading Contacts');
          loadContacts();
        } else {
          console.log('Not Loading Contacts');
        }
      } else {
        alert("You don't have access for the contacts");
      }
    }
  };

  const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: vs(-12),
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: s(70),
          height: vs(70),
          borderRadius: 70,
          backgroundColor: colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: s(65),
            height: vs(65),
            borderRadius: 65,
            backgroundColor: '#EE455E',
          }}>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      initialRouteName="My Day"
      activeColor="#fff"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: vs(65),
          position: 'absolute',
          elevation: 0,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: vs(4),
              }}>
              <Image
                source={{
                  uri: 'https://cdn0.iconfinder.com/data/icons/typicons-2/24/contacts-512.png',
                }}
                resizeMode="contain"
                style={{
                  width: s(24),
                  height: vs(24),
                  tintColor: focused ? '#034B6C' : '#AEBDC1',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#034B6C' : '#AEBDC1',
                  fontSize: ms(12),
                  marginTop: vs(2),
                }}>
                {reverseText('רשק ישנא')}
              </Text>
            </View>
          ),
        }}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: vs(4),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../../../assets/images/chat.png')}
                  resizeMode="contain"
                  style={{
                    width: s(24),
                    height: vs(24),
                    tintColor: focused ? '#034B6C' : '#AEBDC1',
                  }}></Image>
                {getUnreadMessageCount() > 0 && (
                  <View style={styles.unread}>
                    <Text style={{color: colors.white, fontSize: 10}}>
                      {getUnreadMessageCount()}
                    </Text>
                  </View>
                )}
              </View>

              <Text
                style={{
                  color: focused ? '#034B6C' : '#AEBDC1',
                  fontSize: ms(12),
                  marginTop: vs(2),
                }}>
                {reverseText('תועדוה')}
              </Text>
            </View>
          ),
        }}
        name="Chat"
        component={MessagesNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: ms(16),
                  fontWeight: 'bold',
                  marginTop: vs(10),
                }}>
                {reverseText('הרזע')}
              </Text>
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        name="Post"
        component={Help}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: vs(4),
              }}>
              <Image
                source={{
                  uri: 'https://icon-library.com/images/clip-board-icon/clip-board-icon-1.jpg',
                }}
                resizeMode="contain"
                style={{
                  width: s(24),
                  height: vs(24),
                  tintColor: focused ? '#034B6C' : '#AEBDC1',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#034B6C' : '#AEBDC1',
                  fontSize: ms(12),
                  marginTop: vs(2),
                }}>
                {reverseText('ילש םויה')}
              </Text>
            </View>
          ),
        }}
        name="My Day"
        component={ScheduleNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: vs(3),
              }}>
              <Image
                source={{
                  uri: 'https://static.thenounproject.com/png/2507703-200.png',
                }}
                resizeMode="contain"
                style={{
                  width: s(26),
                  height: vs(26),
                  tintColor: focused ? '#034B6C' : '#AEBDC1',
                }}></Image>
              <Text
                style={{
                  color: focused ? '#034B6C' : '#AEBDC1',
                  fontSize: ms(12),
                  marginTop: vs(1),
                }}>
                {reverseText('ילש םילפטמ')}
              </Text>
            </View>
          ),
        }}
        name="Patients"
        component={MyTherapists}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail.sessionId,
});

const mapDispatchToProps = {
  getProfileDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
