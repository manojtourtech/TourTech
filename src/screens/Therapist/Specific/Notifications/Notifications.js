import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import {DrawerActions} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';

import colors from '../../../../theme/colors';
import styles from './Styles';
import NotificationData from './NotificationData';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const Notifications = ({navigation}) => {
  const renderNotifications = ({item, index}) => {
    return (
      <View style={{marginTop: vs(27)}}>
        <Text style={styles.Text4}>{reverseText(item.day)}</Text>
        <Card style={styles.card1}>
          <View
            style={{
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#D9213D',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}>
            <Text style={styles.Text5}>
              29 {reverseText(item.month)}
              <Text>{item.time}</Text>
            </Text>
          </View>

          <View style={{flex: 0.3, flexDirection: 'column'}}>
            <View style={{flex: 0.9, flexDirection: 'row'}}>
              <View style={{flex: 0.75, justifyContent: 'center'}}>
                <Text style={styles.Text6}>
                  {reverseText(item.patientName)}
                </Text>
                <Text style={styles.Text7}>
                  {reverseText(item.diseaseType)}
                </Text>
              </View>
              <View style={{flex: 0.25, justifyContent: 'center'}}>
                <Avatar.Image
                  style={{alignSelf: 'flex-end', marginRight: s(12)}}
                  source={item}
                  size={s(55)}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '94%',
                  alignSelf: 'center',
                }}></View>
            </View>
          </View>
          <View style={{flex: 0.3, flexDirection: 'column'}}>
            <View style={{flex: 0.9, flexDirection: 'column'}}>
              <View
                style={{
                  flex: 0.5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: s(17),
                }}>
                <Text style={styles.Text8}>{item.medicine1}</Text>
                <IconFont5
                  name="capsules"
                  size={s(22)}
                  color={colors.textColor}
                />
              </View>
              <View
                style={{
                  flex: 0.5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: s(17),
                }}>
                <Text style={styles.Text8}>{item.medicine2}</Text>
                <IconFont5
                  name="capsules"
                  size={s(22)}
                  color={colors.textColor}
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '94%',
                  alignSelf: 'center',
                }}></View>
            </View>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Text9}>
                {reverseText('לפוטמל העדוה בותכ')}
              </Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.top}>
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
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.Text1}>{reverseText('תורוכזת')}</Text>
              <View
                style={{
                  height: s(24),
                  width: s(24),
                  borderRadius: 24,
                  backgroundColor: '#F41032',
                  left: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.Text2}>12</Text>
              </View>
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
            <View style={styles.date}>
              <Text style={styles.Text3}>
                {reverseText('ןושאר םוי')} 29/6/2021
              </Text>
            </View>
          </View>
        </View>

        {/* FLATLIST */}
        <View style={styles.list}>
          <FlatList
            data={NotificationData}
            renderItem={renderNotifications}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Notifications;
