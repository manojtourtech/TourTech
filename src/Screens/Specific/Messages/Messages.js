import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {Avatar} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge, Icon} from 'react-native-elements';
import {connect} from 'react-redux';

import {colors} from '../../../assets/colors/colors';
import styles from './Styles';
import {
  getAllChat,
  setUnReadMessageCount,
  getUser,
} from '../../../database/realmdb';
import {getProfileDetail} from '../../../redux/actions/index';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const messagesData = [
  {
    id: 1,
    recentMsg: 'גניסיפידא ררוטקסנוק',
    medium: 'עמש תחיש',
    time: 'םויה',
    uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Messages = ({navigation, ...props}) => {
  const [text, setText] = useState('');
  const [btnColor, setBtnColor] = useState(0);
  const [chatListData, setChatListData] = useState([]);

  useEffect(() => {
    const data = getAllChat();
    console.log('All Chat Data ===============>', data);
    setChatListData(data);
  }, []);

  const onPressItem = item => {
    setUnReadMessageCount(item.recipientId);
    navigation.navigate('MessagePerson', {
      item: item,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onPressItem(item);
        }}>
        <View style={[styles.listView, {marginTop: vs(10)}]}>
          <View style={{flex: 0.79, flexDirection: 'column'}}>
            <View
              style={{
                flex: 1.5,
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.Text2}>{reverseText(item.body)}</Text>
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
                <Text style={styles.Text3}>{reverseText(item.subject)}</Text>
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
            <Avatar.Image style={styles.Avatar} source={item} size={s(50)} />
          </View>
        </View>
      </TouchableOpacity>
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
            <Text style={{fontSize: ms(19), color: colors.PrimaryColor}}>
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
              <TouchableOpacity
                style={[
                  styles.Attachement,
                  {
                    backgroundColor:
                      btnColor == 1
                        ? colors.PrimaryColor
                        : colors.BackgroundColor,
                  },
                ]}
                onPress={() => setBtnColor(1)}>
                <Text
                  style={[
                    styles.Text6,
                    {
                      color:
                        btnColor == 1
                          ? colors.BackgroundColor
                          : colors.textColor,
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
                      btnColor == 0
                        ? colors.PrimaryColor
                        : colors.BackgroundColor,
                  },
                ]}
                onPress={() => setBtnColor(0)}>
                <Text
                  style={[
                    styles.Text6,
                    {
                      color:
                        btnColor == 0
                          ? colors.BackgroundColor
                          : colors.textColor,
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
  session_id: state.session.data.sessionId,
});

const mapDispatchToProps = {
  getProfileDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
