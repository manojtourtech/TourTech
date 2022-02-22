import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';

import IconZ from 'react-native-vector-icons/Zocial';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientMoodReport = ({navigation}) => {
  const [checked, setChecked] = useState(false);

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
            <Text style={styles.Text1}>{reverseText('חור בצמ יחוויד')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientTasks')}>
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
        <View style={{marginTop: 22}}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={[styles.Text1, {marginRight: s(10)}]}>
              {reverseText('ןהכ םייח לפוטמ')}
            </Text>
            <Avatar.Image
              style={{marginRight: s(12)}}
              source={{
                uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              }}
              size={s(60)}
            />
          </View>

          <View
            style={[
              styles.textInput,
              {
                top: vs(15),
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
              {reverseText('םויה 1202 ילויב 10')}
            </Text>
          </View>

          <Text
            style={{
              marginRight: s(16),
              fontSize: ms(19),
              color: colors.PrimaryColor,
              marginTop: vs(35),
            }}>
            {reverseText(':טפשמ')}
          </Text>

          <View
            style={{
              height: s(40),
              width: s(40),
              borderRadius: 40,
              backgroundColor: colors.PrimaryColor,
              alignSelf: 'flex-end',
              marginRight: s(16),
              marginTop: vs(10),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconFont5 name="smile" size={s(30)} color={'#FFD93B'} />
          </View>
          <Text
            style={{
              marginRight: s(16),
              fontSize: ms(19),
              color: colors.PrimaryColor,
              marginTop: vs(10),
            }}>
            {reverseText(':טפשמ')}
          </Text>

          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#D1D9DB',
              width: '90%',
              alignSelf: 'center',
              marginTop: vs(20),
            }}></View>

          <Text
            style={{
              marginRight: s(16),
              fontSize: ms(19),
              color: colors.PrimaryColor,
              marginTop: vs(25),
            }}>
            {reverseText(':טפשמ')}
          </Text>

          <View
            style={[
              styles.textInput,
              {
                top: vs(15),
                flexDirection: 'row-reverse',
                alignItems: 'center',
                paddingHorizontal: s(15),
              },
            ]}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('1 טפשמ 1 טפשמ')}
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#D1D9DB',
              width: '90%',
              alignSelf: 'center',
              marginTop: vs(40),
            }}></View>

          <Text
            style={{
              marginRight: s(16),
              fontSize: ms(19),
              color: colors.PrimaryColor,
              marginTop: vs(25),
            }}>
            {reverseText(':תילוק העדוה')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginRight: s(12),
              marginTop: vs(20),
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'grey', marginRight: s(10)}}>
              0:15
            </Text>
            <IconAnt name="play" size={s(40)} color={'#23973D'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PatientMoodReport;
