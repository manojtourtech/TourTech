import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../Styles';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientQueues = ({navigation}) => {
  return (
    <View style={{marginTop: vs(15)}}>
      <IconFont5
        style={{marginTop: vs(25), alignSelf: 'center'}}
        name="calendar-alt"
        size={s(75)}
        color={'#D1D9DB'}
      />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: ms(18),
            marginTop: vs(15),
            color: colors.PrimaryColor,
            alignSelf: 'center',
          }}>
          {reverseText('םויהל םירות וישכע שי')}
        </Text>
      </TouchableOpacity>
      {/* Button----------------------------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate('PatientAllQueues')}
        style={[
          styles.button01,
          {marginTop: vs(25), flexDirection: 'row-reverse'},
        ]}>
        <Text style={{fontSize: ms(16), color: colors.BackgroundColor}}>
          {reverseText('תומישמה לכ תא תוארל')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientQueues;
