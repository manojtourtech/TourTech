import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../../theme/colors';
import styles from './Styles';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientAllQueueLast = ({navigation}) => {
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
            <Text style={styles.Text1}>{reverseText('ריכזהל')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientAllQueuesEdit')}>
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
          <View style={styles.textInput}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: s(30),
                  width: s(30),
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: colors.borderColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: ms(18),
                  paddingRight: s(15),
                  color: colors.textColor,
                }}>
                {reverseText('תמדקומ העדוה אלל')}
              </Text>
            </View>
          </View>

          <View style={[styles.textInput, {marginTop: vs(15)}]}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: s(30),
                  width: s(30),
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: colors.borderColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: ms(18),
                  paddingRight: s(15),
                  color: colors.textColor,
                }}>
                {reverseText('ינפל תוקד 01')}
              </Text>
            </View>
          </View>

          <View style={[styles.textInput, {marginTop: vs(15)}]}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: s(30),
                  width: s(30),
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: colors.borderColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconFontisto
                  name="ellipse"
                  size={s(20)}
                  color={colors.PrimaryColor}
                />
              </View>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: ms(18),
                  paddingRight: s(15),
                  color: colors.textColor,
                }}>
                {reverseText('ינפל תוקד 03')}
              </Text>
            </View>
          </View>

          <View style={[styles.textInput, {marginTop: vs(15)}]}>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: s(30),
                  width: s(30),
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: colors.borderColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: ms(18),
                  paddingRight: s(15),
                  color: colors.textColor,
                }}>
                {reverseText('ינפל העש')}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('PatientAllQueuesEdit')}
            style={{
              height: vs(45),
              width: '90%',
              borderRadius: 10,
              top: vs(200),
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: vs(25),
              backgroundColor: colors.PrimaryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: ms(18), color: colors.BackgroundColor}}>
              {reverseText('הרימש')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PatientAllQueueLast;
