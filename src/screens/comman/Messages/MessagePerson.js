import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {connect} from 'react-redux';

import MessageInputBox from './compoments/MessageInputBox';
import colors from '../../../theme/colors';
import styles from './Styles';
import {getProfileDetail, sendMessage} from '../../../redux/actions';
import realm, {getMessageById} from '../../../database/local_patient_db';
import MessageItem from './MessageItem';
import Modal from 'react-native-modal';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MessagePerson = ({navigation, route, ...props}) => {
  const flatlistRef = useRef();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(route);
    // Get Chat list from DB
    const data = getMessageById(route.params.recipientId);
    const chat = [...data].reverse();
    setMessages(chat);
  }, []);

  // Get All Message From Db
  useEffect(() => {
    realm.addListener('change', (obj, changes) => {
      const data = getMessageById(route.params.recipientId);
      const chat = [...data].reverse();

      setMessages(chat);
    });

    return () => {
      realm.removeListener;
    };
  }, []);

  // Render flatlist item
  const renderMessageItem = ({item, index}) => (
    <MessageItem
      item={item}
      index={index}
      nav={navigation}
      senderId={props.profileDetail.ID}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.inner}>
        <View
          style={[
            styles.topView,
            {
              elevation: 0,
              borderBottomWidth: 0.6,
              borderBottomColor: colors.borderColor,
            },
          ]}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
              size={s(45)}
            />
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{route?.params?.displayName}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
                <IconAnt name="right" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView2}>
          <View style={{flex: 1, flexDirection: 'row', margin: s(5)}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <View
                  style={[styles.circularView, {backgroundColor: '#6B449C'}]}>
                  <IconFontAwe
                    name="video-camera"
                    size={s(17)}
                    color={colors.white}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.Text9}>{reverseText('ואדיו תחיש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity>
                <View
                  style={[styles.circularView, {backgroundColor: '#1F61AE'}]}>
                  <IconIon name="call" size={s(17)} color={colors.white} />
                </View>
              </TouchableOpacity>
              <Text style={styles.Text9}>{reverseText('תילוק החיש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.circularView, {backgroundColor: '#2F950B'}]}>
                <IconIon
                  name="md-chatbubble-ellipses-sharp"
                  size={s(17)}
                  color={colors.white}
                />
              </View>
              <Text style={styles.Text9}>{reverseText('העדוה תחילש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.circularView, {backgroundColor: '#E98830'}]}>
                <IconM
                  name="mobile-friendly"
                  size={s(16)}
                  color={colors.white}
                />
              </View>
              <Text style={styles.Text9}>{reverseText('ינופלט גויח')}</Text>
            </View>
          </View>
        </View>

        {/* TOP END */}

        {/* CHAT */}

        <View style={{flex: 1, padding: 2}}>
          {/* MSG1 */}
          <FlatList
            ref={flatlistRef}
            data={messages}
            renderItem={renderMessageItem}
            inverted
          />
        </View>

        {/* BottomView */}
        <MessageInputBox route={route} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail.sessionId,
  profileDetail: state.user.profileDetail,
});

const mapDispatchToProps = {
  getProfileDetail,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePerson);
