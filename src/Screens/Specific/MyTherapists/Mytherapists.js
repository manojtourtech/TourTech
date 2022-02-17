import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  I18nManager,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {colors} from '../../../assets/colors/colors';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconZ from 'react-native-vector-icons/Zocial';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge, Icon} from 'react-native-elements';

// I18nManager.forceRTL(true);
// I18nManager.allowRTL(true);
function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const MyTherapists = ({navigation}) => {
  const [text, setText] = useState('');
  const [btnColor, setBtnColor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center', marginTop: 20}}>MyTherapists</Text>
    </View>
  );
};

export default MyTherapists;
