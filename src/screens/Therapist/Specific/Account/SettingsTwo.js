import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import Styles from './Styles';
import 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ms, s, vs} from 'react-native-size-matters';
function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const SettingsTwo = ({navigation}) => {
  const [toggleButtonone, setToggleButtonOne] = useState(0);
  const [toggleButtontwo, setToggleButtonTwo] = useState(0);
  const [toggleButtonthree, setToggleButtonThree] = useState(0);
  const [toggleButtonfour, setToggleButtonFour] = useState(0);
  return (
    <View style={Styles.container}>
      <View style={Styles.top}>
        <View style={{flex: 0.2}} />
        <View
          style={{flex: 0.55, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={Styles.Text1}>{reverseText('תורדגה')}</Text>
        </View>
        <View
          style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View style={Styles.MenuButton}>
              <IconEnt name="menu" size={27} color={colors.textColor} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.bottom1}>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            }}
            size={120}
          />
          <Text style={Styles.Text6}>{reverseText('ליפורפ תנומת הנש')}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 5}}>
            <View style={{marginTop: 25}}>
              <Text style={Styles.Text4}>{reverseText('תרתומ השיג')}</Text>

              <View style={Styles.textInput}>
                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
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
                    <Pressable
                      onPress={() => setToggleButtonOne(!toggleButtonone)}>
                      <View
                        style={[
                          Styles.toggleView,
                          {
                            backgroundColor: toggleButtonone
                              ? colors.PrimaryColor
                              : 'grey',
                            alignSelf: toggleButtonone
                              ? 'flex-end'
                              : 'flex-start',
                          },
                        ]}>
                        {toggleButtonone ? (
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
                </View>
                <View style={{flex: 0.75, justifyContent: 'center'}}>
                  <TextInput
                    placeholder={reverseText('לגוג לש הנש חול')}
                    style={Styles.textInputdata}></TextInput>
                </View>
              </View>
              <View style={Styles.textInput}>
                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
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
                    <Pressable
                      onPress={() => setToggleButtonTwo(!toggleButtontwo)}>
                      <View
                        style={[
                          Styles.toggleView,
                          {
                            backgroundColor: toggleButtontwo
                              ? colors.PrimaryColor
                              : 'grey',
                            alignSelf: toggleButtontwo
                              ? 'flex-end'
                              : 'flex-start',
                          },
                        ]}>
                        {toggleButtontwo ? (
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
                </View>
                <View style={{flex: 0.75, justifyContent: 'center'}}>
                  <TextInput
                    placeholder={reverseText('לגוג לש הנש חול')}
                    style={Styles.textInputdata}></TextInput>
                </View>
              </View>
            </View>

            <View style={{marginTop: 35}}>
              <Text style={Styles.Text4}>{reverseText('עמשנ')}</Text>

              <View style={Styles.textInput}>
                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
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
                    <Pressable
                      onPress={() => setToggleButtonThree(!toggleButtonthree)}>
                      <View
                        style={[
                          Styles.toggleView,
                          {
                            backgroundColor: toggleButtonthree
                              ? colors.PrimaryColor
                              : 'grey',
                            alignSelf: toggleButtonthree
                              ? 'flex-end'
                              : 'flex-start',
                          },
                        ]}>
                        {toggleButtonthree ? (
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
                </View>
                <View style={{flex: 0.75, justifyContent: 'center'}}>
                  <TextInput
                    placeholder={reverseText('לגוג לש הנש חול')}
                    style={Styles.textInputdata}></TextInput>
                </View>
              </View>
              <View style={Styles.textInput}>
                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
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
                    <Pressable
                      onPress={() => setToggleButtonFour(!toggleButtonfour)}>
                      <View
                        style={[
                          Styles.toggleView,
                          {
                            backgroundColor: toggleButtonfour
                              ? colors.PrimaryColor
                              : 'grey',
                            alignSelf: toggleButtonfour
                              ? 'flex-end'
                              : 'flex-start',
                          },
                        ]}>
                        {toggleButtonfour ? (
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
                </View>
                <View style={{flex: 0.75, justifyContent: 'center'}}>
                  <TextInput
                    placeholder={reverseText('לגוג לש הנש חול')}
                    style={Styles.textInputdata}></TextInput>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsTwo;
