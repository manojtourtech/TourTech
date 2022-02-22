import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './Styles';
import {s, vs, ms} from 'react-native-size-matters';
import MessagesNavigation from '../../Navigations/MessagesNavigation/MessagesNavigation';
import Notifications from '../Notifications/Notifications';
import HomeNavigation from '../../Navigations/HomeNavigation/HomeNavigation';
import SettingNavigation from '../../Navigations/SettingsNavigation/SettingNavigation';
import PatientsNavigation from '../../Navigations/PatientNavigation/PatientNavigation';
import {getProfileDetail} from '../../../../redux/actions';
import {getUnreadMessageCount} from '../../../../database/local_therapist_db';
import {connect} from 'react-redux';

import colors from '../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
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
          backgroundColor: colors.BackgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: s(65),
            height: vs(65),
            borderRadius: 65,
            backgroundColor: '#0491BC',
          }}>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Tab.Navigator
      initialRouteName="Post"
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
        component={SettingNavigation}
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
                  fontSize: ms(14),
                  fontWeight: 'bold',
                  marginTop: vs(10),
                }}>
                {reverseText('תיבה ףד')}
              </Text>
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
        name="Post"
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
              <Image
                source={require('../../../../assets/images/notification.png')}
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
                {reverseText('תוארתה')}
              </Text>
            </View>
          ),
        }}
        name="Noti"
        component={Notifications}
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
                source={require('../../../../assets/images/user.png')}
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
                {reverseText('םילפוטמ')}
              </Text>
            </View>
          ),
        }}
        name="Patients"
        component={PatientsNavigation}
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
