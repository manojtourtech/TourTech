import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {colors} from '../../../assets/colors/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

import Modal from 'react-native-modal';
function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MessageItem2 = ({item}) => {
  return item.id === 1 ? (
    <View style={{left: s(10)}}>
      <View style={styles.msg1}>
        <Text
          style={{
            paddingHorizontal: s(15),
            fontSize: ms(16),
            color: colors.textColor,
          }}>
          {reverseText('םוספיא םרול')}
        </Text>
      </View>
      <Text style={{fontSize: ms(16), color: '#68777B', marginTop: vs(8)}}>
        13.00
      </Text>
    </View>
  ) : (
    <View style={{right: s(10), marginTop: vs(15)}}>
      <View style={styles.msg2}>
        <Text
          style={{
            paddingHorizontal: s(15),
            fontSize: ms(16),
            color: colors.BackgroundColor,
          }}>
          {reverseText(',טמא טיס רולוד םוספיא םרול')}
        </Text>
        <Text
          style={{
            paddingHorizontal: s(15),
            fontSize: ms(16),
            color: colors.BackgroundColor,
          }}>
          {reverseText('תילא גניסיפידא ררוטקסנוק')}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          marginTop: vs(8),
          alignItems: 'center',
        }}>
        <Text style={{fontSize: ms(16), color: '#68777B', right: s(8)}}>
          14.00
        </Text>
        <View
          style={{
            width: s(27),
            height: vs(18),
            backgroundColor: '#10B01C',
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconEnt
            style={{left: s(2)}}
            name="check"
            size={s(12)}
            color={colors.BackgroundColor}
          />
          <IconEnt
            style={{right: s(2)}}
            name="check"
            size={s(12)}
            color={colors.BackgroundColor}
          />
        </View>
      </View>
    </View>
  );
};

export default MessageItem2;
