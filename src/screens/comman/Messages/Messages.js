import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import styled from 'styled-components';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BodyView from './compoments/BodyView';
import colors from '../../../theme/colors';
import styles from './Styles';
import realm, {
  getAllChat,
  setUnReadMessageCount,
  deleteChats,
} from '../../../database/local_patient_db';
import {
  getProfileDetail,
  selectUserForChat,
} from '../../../redux/actions/index';

const ProfileImageView = styled.View`
  width: 52px
  height: 52px
  border-radius: 26px;
  overflow: hidden
  border-color: ${colors.primary}
  border-width: 1px
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 48px
  height: 48px
  border-radius: 24px;
  overflow: hidden
  resize-mode: cover;
  justify-content: center;
  align-items: center;
`;

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Messages = ({navigation, ...props}) => {
  const [text, setText] = useState('');
  const [btnColor, setBtnColor] = useState(0);
  const [chatListData, setChatListData] = useState([]);

  useEffect(() => {
    console.log('Session ID ===', props.session_id);
    const data = getAllChat();
    console.log('All Chat Data ===============>', data);
    setChatListData(data);
  }, []);

  useEffect(() => {
    realm.addListener('change', (obj, changes) => {
      const data = getAllChat();
      // const chat = [...data].reverse();
      setChatListData(data);
    });

    return () => {
      realm.removeListener;
    };
  }, []);

  const onPressItem = item => {
    console.log('Message ===', item);
    setUnReadMessageCount(item.recipientId);
    props.selectUserForChat(item);
    navigation.navigate('MessagePerson', {
      recipientId: parseInt(item.recipientId),
      displayName: item.displayName,
    });
  };

  console.log(chatListData);
  const renderItem = ({item}) => {
    //swipe right to delete
    const swipeRight = (progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-30, 0],
        outputRange: [1, 0.5],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View style={styles.animationContainer}>
          <Animated.View style={[styles.animationView, {transform: [{scale}]}]}>
            <TouchableOpacity onPress={() => deleteChats(item)}>
              <Ionicons
                name="archive"
                size={30}
                color={colors.white}
                style={{marginLeft: 7}}
              />
              <Animated.Text style={{color: colors.white}}>
                Archive
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      );
    };

    return (
      <Swipeable renderRightActions={swipeRight} rightThreshold={-30}>
        <TouchableOpacity
          onPress={() => {
            onPressItem(item);
          }}>
          <View style={[styles.listView, {marginTop: vs(20)}]}>
            <View style={{flex: 0.79, flexDirection: 'column'}}>
              <View
                style={{
                  flex: 1.5,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}>
                <Text style={styles.Text2}>
                  {reverseText(item.displayName)}
                </Text>
                <BodyView lastMessage={item} />
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <IconAnt name="left" size={s(22)} color={'#AEBDC1'} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 0.8,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <TouchableOpacity></TouchableOpacity>
                  {/* <Text style={styles.Text3}>{reverseText(item.subject)}</Text> */}
                </View>
              </View>
              <View
                style={{
                  flex: 1.5,
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                <Text style={styles.Text4}>{reverseText(item.sentTime)}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.21,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <ProfileImageView>
                <ProfileImage source={{uri: item.picturePath}} />
              </ProfileImageView>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  const itemSeperatorComponent = () => {
    return (
      <View
        style={{
          borderWidth: 0.6,
          borderColor: '#D1D9DB',
          width: '94%',
          alignSelf: 'center',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {/*********************************************/}
        <View style={styles.topView}>
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
                <IconEnt name="menu" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('ילש םויה')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
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
                  containerStyle={styles.badgeStyle2}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView3}>
          <View
            style={{
              height: 45,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: '#A7B9D01A',
            }}>
            <Text style={{fontSize: ms(19), color: colors.primary}}>
              {reverseText('ןושאר םוי')}
              {'29/6/2021'}
            </Text>
          </View>
        </View>
        <View style={styles.topView1}>
          <View style={styles.InputBox}>
            <View style={{flex: 0.9, justifyContent: 'center'}}>
              <TextInput
                onChangeText={text => setText(text)}
                placeholder={reverseText('םישנא וא תועדוה שפח')}
                style={styles.Input}
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchMessage')}>
                <IconIon
                  name="search-outline"
                  size={s(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {text.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              height: vs(40),
              width: '94%',
              alignSelf: 'center',
              borderWidth: 0.4,
              borderRadius: 10,
              borderColor: colors.borderColor,
              marginTop: 20,
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[
                  styles.Attachement,
                  {
                    backgroundColor:
                      btnColor == 1 ? colors.primary : colors.white,
                  },
                ]}
                onPress={() => setBtnColor(1)}>
                <Text
                  style={[
                    styles.Text6,
                    {
                      color: btnColor == 1 ? colors.white : colors.textColor,
                    },
                  ]}>
                  {reverseText('םיפרוצמ םיצבק')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
              <TouchableOpacity
                style={[
                  styles.Attachement,
                  {
                    backgroundColor:
                      btnColor == 0 ? colors.primary : colors.white,
                  },
                ]}
                onPress={() => setBtnColor(0)}>
                <Text
                  style={[
                    styles.Text6,
                    {
                      color: btnColor == 0 ? colors.white : colors.textColor,
                    },
                  ]}>
                  {reverseText('תועדוה')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {/*********************************************/}
        <View
          style={{
            width: '94%',
            marginTop: vs(15),
            height: vs(400),
            alignSelf: 'center',
          }}>
          {/* LIST START */}
          <FlatList
            data={chatListData}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeperatorComponent}
            showsVerticalScrollIndicator={false}
          />
          {/* LISTVIEW */}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  profileDetail: state.user.profileDetail,
  session_id: state.session.userDetail.sessionId,
});

const mapDispatchToProps = {
  getProfileDetail,
  selectUserForChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
