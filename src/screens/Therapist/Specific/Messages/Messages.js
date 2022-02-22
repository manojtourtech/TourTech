import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import {Avatar} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {connect} from 'react-redux';
import BodyView from './compoments/BodyView';
import colors from '../../../../theme/colors';
import styles from './Styles';
import realm, {
  getAllChat,
  setUnReadMessageCount,
} from '../../../../database/local_therapist_db';
import {
  getProfileDetail,
  selectUserForChat,
} from '../../../../redux/actions/index';

const ProfileImageView = styled.View`
  width: 52px
  height: 52px
  border-radius: 26px;
  overflow: hidden
  border-color: ${colors.PrimaryColor}
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
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const messagesData = [
  {
    id: 1,
    recentMsg: 'ןהכ םייח לפוטמ',
    type: 'audio',
    medium: 'עמש תחיש',
    time: 'םויה',
    notifications: false,
    uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    recentMsg: 'גניסיפידא ררוטקסנוק',
    type: 'video',
    medium: 'ואדיו תחיש',
    time: 'םויה',
    notifications: false,
    uri: 'https://images.unsplash.com/photo-1605108040941-7c762d5ed4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    recentMsg: 'גניסיפידא ררוטקסנוק',
    type: '',
    medium: '...םוספיא םוספיא םרול העדוה',
    time: 'יאמב 12 ,ישיש םוי',
    notifications: true,
    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    recentMsg: 'גניסיפידא ררוטקסנוק',
    type: '',
    medium: 'םוספיא םוספיא םרול העדוה טסקט',
    time: 'יאמב 12 ,ישיש םוי',
    notifications: false,
    uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    recentMsg: 'גניסיפידא ררוטקסנוק',
    type: 'files',
    medium: 'ןחבמ תואצות',
    time: '2021 ראוניב 12',
    notifications: false,
    uri: 'https://images.unsplash.com/photo-1589960062943-bfb9f51756fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

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
    });
  };

  const renderItem = ({item}) => {
    return (
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
              <Text style={styles.Text2}>{reverseText(item.displayName)}</Text>
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
    );
  };

  const itemSeperator = () => {
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
        <View style={styles.topView}>
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
            <Text style={styles.Text1}>{reverseText('תועדוה')}</Text>
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
                <IconEnt name="menu" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView1}>
          <View style={styles.InputBox}>
            <View style={{flex: 0.9, justifyContent: 'center'}}>
              <TextInput
                onChangeText={text => setText(text)}
                placeholder={reverseText('םישנא וא תועדוה שפח')}
                style={styles.Input}
                placeholderTextColor={colors.PrimaryColor}
              />
            </View>
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <TouchableOpacity>
                <IconIon
                  name="search-outline"
                  size={s(25)}
                  color={colors.PrimaryColor}
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
              <TouchableOpacity>
                <Text style={styles.Text6}>{reverseText('םיפרוצמ םיצבק')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
              <TouchableOpacity style={styles.Attachement}>
                <Text style={styles.Text5}>{reverseText('תועדוה')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View
          style={{
            height: '69%',
            width: '94%',
            marginTop: vs(5),
            alignSelf: 'center',
          }}>
          {/* LIST START */}
          <FlatList
            data={chatListData}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeperator}
            showsVerticalScrollIndicator={false}
          />
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
