import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Text,
} from 'react-native';
import {Avatar, Title, Drawer} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import {RFValue} from 'react-native-responsive-fontsize';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {s, vs, ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import logoutAPI from '../services/logout';
('../services/logout');

import colors from '../theme/colors';
import {logout} from '../redux/actions';
import realm, {deleteAllChats} from '../database/local_patient_db';
import logout from '../services/logout';

const {width} = Dimensions.get('screen');

function reverseText(s) {
  return s.split('').reverse().join('');
}

const DrawerContent = props => {
  useEffect(() => {
    console.log('session_id_123', props.session_id);
  }, []);

  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModalVisibility = show => {
    setModalVisible(show);
  };

  const logoutCalled = async () => {
    console.log('called-------------:::::::');
    const response = await logoutAPI(props.session_id).catch(error => {
      console.log('eroorr---->', error);
    });
    console.log(response);
    // if (
    //   response?.status == 200 &&
    //   response?.data.message === 'User verified successfully.'
    // ) {

    //   props.otpVerify(true);
    //   if (props.userDetail?.appType === 'Patient') {
    //     navigation.replace('PatientNavigation');
    //   } else {
    //     navigation.replace('TherapistNavigation');
    //   }
    // } else {
    //   Toast.show({
    //     type: 'Error',
    //     text1: response.status,
    //     text2: response.status,
    //   });
    // }
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        onRequestClose={() => toggleModalVisibility(false)}
        transparent
        visible={isModalVisible}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <View style={{flex: 0.3, flexDirection: 'row'}}>
              <View style={{flex: 0.15, justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => toggleModalVisibility(false)}>
                  <IconAnt
                    style={{left: s(13)}}
                    name="close"
                    size={s(23)}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 0.85,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text1}>{reverseText('ןובשח יטרפ')}</Text>
              </View>
            </View>
            <View style={{flex: 0.35, flexDirection: 'row'}}>
              <View style={{flex: 0.78, justifyContent: 'center'}}>
                <Text style={styles.text2}>{reverseText('ילארשי לארשי')}</Text>
                <Text style={styles.text3}>{reverseText('רוטקוד')}</Text>
              </View>
              <View
                style={{
                  flex: 0.22,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  style={{right: 15}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                  }}
                  size={s(56)}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.35,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  toggleModalVisibility(false);
                  props.navigation.navigate('Settings');
                }}
                style={styles.button}>
                <Text style={styles.text4}>{reverseText('ןובשח תורדגה')}</Text>
                <Ionicons
                  name="settings-sharp"
                  color={colors.white}
                  size={s(18)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              marginLeft: s(50),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginBottom: vs(12),
                marginTop: vs(38),
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                }}
                size={s(76)}
              />

              <Title style={styles.title}>{reverseText('ילארשי לארשי')}</Title>
            </View>
            <TouchableOpacity
              onPress={() =>
                props.navigation.dispatch(DrawerActions.closeDrawer())
              }>
              <View
                style={{
                  alignItems: 'center',
                  marginLeft: s(17),
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                }}>
                <IconAnt name="close" size={s(21)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#D1D9DB',
            marginTop: vs(7),
            width: '94%',
            alignSelf: 'center',
          }}></View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <IconFont
                name="user-circle"
                color={colors.textColor}
                size={s(21)}
              />
            )}
            label={reverseText('ןובשח')}
            labelStyle={{
              fontSize: ms(15),
              fontWeight: 'bold',
              textAlign: 'left',
              color: colors.textColor,
            }}
            onPress={() => {
              props.navigation.navigate('SettingsTwo');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <Ionicons
                name="settings-sharp"
                color={colors.textColor}
                size={s(21)}
              />
            )}
            label={reverseText('תורדגה')}
            labelStyle={{
              fontSize: ms(15),
              fontWeight: 'bold',
              textAlign: 'left',
              color: colors.textColor,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer()),
                toggleModalVisibility(true);
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <IconSimple name="logout" color={'#F41032'} size={s(21)} />
            )}
            label={reverseText('קתנתהל')}
            labelStyle={{
              fontSize: ms(15),
              fontWeight: 'bold',
              textAlign: 'left',
              color: '#F41032',
            }}
            onPress={() => {
              deleteAllChats();
              logoutCalled();
              props.logout();
              props.navigation.dispatch(DrawerActions.closeDrawer());
              // props.navigation.replace('LogIn');

              props.navigation.dispatch(StackActions.replace('AuthNavigation'));
            }}
          />
        </Drawer.Section>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail?.sessionId,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: RFValue(16),
    marginTop: 10,
    fontWeight: 'bold',
    color: '#034B6C',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: ms(19),
    color: colors.primary,
    right: s(18),
  },
  text2: {
    fontWeight: 'bold',
    fontSize: ms(19),
    color: colors.textColor,
    right: s(13),
  },
  text3: {
    fontSize: ms(17),
    color: '#68777B',
    right: s(13),
  },
  text4: {
    fontSize: ms(14),
    color: colors.white,
    right: s(7),
  },
  drawerSection: {
    marginTop: vs(13),
  },

  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20202080',
  },
  modalView: {
    flex: 1,
    position: 'absolute',
    elevation: 5,
    height: vs(180),
    width: width * 0.93,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  button: {
    flexDirection: 'row',
    width: '93%',
    height: vs(35),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
