import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';

import IconZ from 'react-native-vector-icons/Zocial';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFather from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientAllTasksEdit = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('תומישמה לכ')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientAllTasks')}>
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

        {/* Main------------------------------------------------------- */}
        <View style={{marginTop: 25}}>
          <Text
            style={{
              fontSize: ms(16),
              color: colors.textColor,
              paddingRight: s(20),
            }}>
            {reverseText('תרתוכ')}
          </Text>

          <View
            style={[
              styles.textInput,
              {
                marginTop: vs(10),
                flexDirection: 'row-reverse',
                alignItems: 'center',
                paddingHorizontal: s(15),
              },
            ]}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
          </View>

          <Text
            style={{
              fontSize: ms(16),
              color: colors.textColor,
              paddingRight: s(20),
              marginTop: vs(10),
            }}>
            {reverseText('ךיראת')}
          </Text>
          <View
            style={[
              styles.textInput,
              {
                marginTop: vs(10),
                flexDirection: 'row-reverse',
                alignItems: 'center',
                paddingHorizontal: s(15),
              },
            ]}>
            <IconFont name="calendar" size={s(22)} color={'#63A6BB'} />
            <Text
              style={{
                fontSize: ms(18),
                color: colors.textColor,
                paddingRight: s(15),
              }}>
              {reverseText('1202 ילויב 10')}
            </Text>
          </View>

          <Text
            style={{
              fontSize: ms(16),
              color: colors.textColor,
              paddingRight: s(20),
              marginTop: vs(10),
            }}>
            {reverseText('ןמז')}
          </Text>
          <View
            style={[
              styles.textInput,
              {
                marginTop: vs(10),
                flexDirection: 'row-reverse',
                alignItems: 'center',
                paddingHorizontal: s(15),
              },
            ]}>
            <IconMaterial name="clock" size={s(22)} color={'#63A6BB'} />
            <Text
              style={{
                fontSize: ms(18),
                color: colors.textColor,
                paddingRight: s(15),
              }}>
              {'17:10'}
            </Text>
          </View>

          <Text
            style={{
              fontSize: ms(16),
              color: colors.textColor,
              paddingRight: s(20),
              marginTop: vs(10),
            }}>
            {reverseText('')}
          </Text>
          <View
            style={[
              styles.textInput,
              {
                marginTop: vs(10),
                flexDirection: 'row-reverse',
                alignItems: 'center',
              },
            ]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.5, flexDirection: 'row-reverse'}}>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.textColor,
                    marginLeft: s(10),
                  }}>
                  {reverseText('ינפל תוקד 03')}
                </Text>
                <IconAnt name="left" size={s(22)} color={'#63A6BB'} />
              </View>
              <View
                style={{
                  flex: 0.5,
                  flexDirection: 'row-reverse',
                  paddingHorizontal: s(15),
                }}>
                <IconIon name="notifications" size={s(22)} color={'#63A6BB'} />
                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.textColor,
                    paddingRight: s(15),
                  }}>
                  {reverseText('ריכזהל')}
                </Text>
              </View>
            </View>
          </View>

          {/* List--------------------------------------------------- */}

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: vs(45),
              width: '90%',
              borderRadius: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: vs(40),
              backgroundColor: colors.PrimaryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: ms(18), color: colors.BackgroundColor}}>
              {reverseText('הרימש')}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginTop: vs(40),
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: ms(18), color: '#F41032', right: s(8)}}>
              {reverseText('המישמ תקיחמ')}
            </Text>
            <IconIon name="ios-trash" size={s(20)} color={'#F41032'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientAllTasksEdit;
