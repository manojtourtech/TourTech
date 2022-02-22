import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import IconAnt from 'react-native-vector-icons/AntDesign';
import colors from '../../../../../../theme/colors';
import HomeTasksTask from './HomeTasks_Task';
import HomeTaskTwo from './HomeTaskTwo';
import styles from './Styles';

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}
const HomeTaskTab = ({navigation}) => {
  const [tab, setTab] = useState(0);
  const switchTab = () => {
    switch (tab) {
      case 0:
        return <HomeTasksTask />;
      case 1:
        return <HomeTaskTwo />;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.BackgroundColor}
        barStyle="dark-content"
      />

      {/* **************************************************************** */}

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
            <Text style={styles.Text1}>{reverseText('םוי רדס תומישמ')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}>
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

        <View style={{margin: 15, marginTop: vs(25)}}>
          <Text
            style={{
              fontSize: ms(22),
              fontWeight: 'bold',
              color: colors.textColor,
            }}>
            {tab == 0 ? reverseText('1 המישמ') : reverseText('2 המישמ')}
          </Text>
          <Text
            style={{
              fontSize: ms(18),
              color: colors.textColor,
              alignSelf: 'flex-end',
              marginTop: vs(8),
            }}>
            {reverseText('00:9 ,םויה')}
          </Text>

          <View
            style={{
              borderWidth: 0.6,
              borderColor: '#D1D9DB',
              width: '90%',
              alignSelf: 'center',
              marginTop: vs(25),
            }}></View>
          <Text
            style={{
              fontSize: ms(20),
              color: colors.PrimaryColor,
              fontWeight: 'bold',
              marginTop: vs(25),
            }}>
            {reverseText('םילפוטמה')}
          </Text>

          <View style={styles.button3}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: tab == 0 ? colors.PrimaryColor : '#ffffff',
                borderRadius: 10,
              }}>
              <TouchableOpacity onPress={() => setTab(0)}>
                <Text
                  style={{
                    fontSize: ms(16),
                    color: tab == 0 ? '#ffffff' : colors.textColor,
                  }}>
                  {reverseText('םלש אל')}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: tab == 1 ? colors.PrimaryColor : '#ffffff',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity onPress={() => setTab(1)}>
                <Text
                  style={{
                    fontSize: ms(16),
                    color: tab == 1 ? '#ffffff' : colors.textColor,
                  }}>
                  {reverseText('עצוב')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {switchTab()}
      </View>
    </View>
  );
};
export default HomeTaskTab;
