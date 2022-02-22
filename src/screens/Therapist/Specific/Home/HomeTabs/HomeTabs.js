/* eslint-disable react-hooks/rules-of-hooks */
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
import {DrawerActions} from '@react-navigation/native';
import {Card, Avatar} from 'react-native-paper';
import {ms, s, vs} from 'react-native-size-matters';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import styles from './Styles';
import colors from '../../../../../theme/colors';

import HomeTasks from '../HomeTasks/HomeTasks';
import HomeMedicines from '../HomeMedicines/HomeMedicines';
import Homequeue from '../HomeQueues/HomeQueues';

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}
const HomeTabs = ({navigation}) => {
  const [tab, setTab] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const scrollViewRef = useRef(null);
  const switchTab = () => {
    switch (tab) {
      case 0:
        return (
          <HomeTasks
            nav={() => navigation.navigate('HomeTaskTab')}
            addNewTask={() => navigation.navigate('AddNewTask')}
          />
        );
      case 1:
        return <HomeMedicines />;
      case 2:
        return <Homequeue />;
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
      <View style={styles.inner}>
        {showBtn && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 40,
              borderRadius: 40,
              position: 'absolute',
              bottom: 10,
              left: 15,
              elevation: 5,
              backgroundColor: 'white',
              opacity: 0.7,
              zIndex: 1,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (scrollViewRef?.current) {
                  scrollViewRef?.current?.scrollTo({x: 0, y: 0});
                }
              }}>
              <IconFont name="angle-double-up" size={27} />
            </TouchableOpacity>
          </View>
        )}
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
            <Text style={styles.Text1}>{reverseText('ילארשי לארשי םולש')}</Text>
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

        <View style={styles.topView2}>
          <View
            style={{
              height: 40,
              width: 80,
              paddingHorizontal: 3,
              justifyContent: 'center',
              borderRadius: 25,
              backgroundColor: colors.BackgroundColor,
              borderWidth: 1.8,
              borderColor: '#77869C',
            }}>
            <Pressable onPress={() => setToggleButton(!toggleButton)}>
              <View
                style={[
                  styles.toggleView,
                  {
                    backgroundColor: toggleButton ? '#2F950B' : '#F41032',
                    alignSelf: toggleButton ? 'flex-end' : 'flex-start',
                  },
                ]}>
                {toggleButton ? (
                  <Feather
                    name="check"
                    size={s(17)}
                    color={colors.BackgroundColor}
                  />
                ) : (
                  <IconAnt
                    name="close"
                    size={s(17)}
                    color={colors.BackgroundColor}
                  />
                )}
              </View>
            </Pressable>
          </View>
          <Text
            style={[
              styles.Text2,
              {marginLeft: s(10), color: toggleButton ? '#2F950B' : '#F41032'},
            ]}>
            {toggleButton
              ? reverseText('ןימז ינא')
              : reverseText('ןימז אל ינא')}
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 180,
            marginTop: vs(20),
          }}>
          <View style={styles.button2}>
            <View
              style={[
                styles.tab,
                {backgroundColor: tab == 0 ? '#F99E4B' : '#ffffff'},
              ]}>
              <TouchableOpacity onPress={() => setTab(0)}>
                <IconFont5
                  name="clipboard-list"
                  size={s(23)}
                  color={tab == 0 ? '#ffffff' : '#F99E4B'}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: ms(16),
                  color: tab == 0 ? '#ffffff' : '#F99E4B',
                }}>
                {reverseText('םוי רדס')}
              </Text>
            </View>

            <View
              style={[
                styles.tab,
                {backgroundColor: tab == 1 ? '#1F61AE' : '#ffffff'},
              ]}>
              <TouchableOpacity onPress={() => setTab(1)}>
                <IconFont5
                  name="capsules"
                  size={s(23)}
                  color={tab == 1 ? '#ffffff' : '#1F61AE'}
                />
                {/* <Image
                                    style={{ width: s(23), height: s(23), resizeMode: 'contain',  }}
                                    source={require('../../../../assets/images/capsule.png')} /> */}
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: ms(16),
                  color: tab == 1 ? '#ffffff' : '#1F61AE',
                }}>
                {reverseText('תופורת תמישר')}
              </Text>
            </View>

            <View
              style={[
                styles.tab,
                {backgroundColor: tab == 2 ? '#2F950B' : '#ffffff'},
              ]}>
              <TouchableOpacity onPress={() => setTab(2)}>
                <IconFontisto
                  name="doctor"
                  size={s(23)}
                  color={tab == 2 ? '#ffffff' : '#2F950B'}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: ms(16),
                  color: tab == 2 ? '#ffffff' : '#2F950B',
                }}>
                {reverseText('ילש םירות')}
              </Text>
            </View>
          </View>

          <ScrollView
            onScroll={({nativeEvent}) => {
              if (nativeEvent.contentOffset.y > 10 && !showBtn) {
                setShowBtn(true);
              } else if (nativeEvent.contentOffset.y == 0) {
                setShowBtn(false);
              }
            }}
            ref={scrollViewRef}>
            {switchTab()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default HomeTabs;
