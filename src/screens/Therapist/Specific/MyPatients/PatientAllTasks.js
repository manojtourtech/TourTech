import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientAllTasks = ({navigation}) => {
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
                marginTop: vs(15),
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
              {reverseText('םויה 1202 ילויב 92')}
            </Text>
          </View>

          {/* List--------------------------------------------------- */}
          {/* First */}
          <View style={{height: vs(325), width: '95%', alignSelf: 'center'}}>
            <ScrollView>
              <View
                style={{
                  height: vs(85),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(20),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7}}>
                  <Text style={{fontSize: ms(18), color: colors.textColor}}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: '#F41032',
                      marginTop: vs(3),
                    }}>
                    {reverseText('םויה')} ,9:00
                  </Text>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      height: vs(35),
                      width: '100%',
                      borderRadius: 10,
                      marginTop: vs(3),
                      backgroundColor: colors.PrimaryColor,
                    }}>
                    <Text
                      style={{
                        fontSize: ms(16),
                        color: colors.BackgroundColor,
                        right: vs(10),
                      }}>
                      {reverseText('לפוטמל העדוה בותכ')}
                    </Text>
                    <IconIon
                      name="ios-chatbubble-ellipses"
                      size={s(20)}
                      color={colors.BackgroundColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>

              {/* Second----------------------------------------------- */}

              <View
                style={{
                  height: vs(50),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center'}}>
                  <Text style={{fontSize: ms(18), color: colors.textColor}}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: colors.textColor,
                      marginTop: vs(3),
                    }}>
                    {reverseText('םויה')} ,10:00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>

              {/* Third----------------------------------------------- */}

              <View
                style={{
                  height: vs(50),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center'}}>
                  <Text style={{fontSize: ms(18), color: colors.textColor}}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: colors.textColor,
                      marginTop: vs(3),
                    }}>
                    {reverseText('םויה')} ,13:20
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>

              {/* Forth----------------------------------------------- */}

              <View
                style={{
                  height: vs(50),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center'}}>
                  <Text style={{fontSize: ms(18), color: colors.textColor}}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: colors.textColor,
                      marginTop: vs(3),
                    }}>
                    {reverseText('םויה')} ,13:20
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>

              {/* Fifth----------------------------------------------- */}

              <View
                style={{
                  height: vs(50),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center'}}>
                  <Text style={{fontSize: ms(18), color: colors.textColor}}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: colors.textColor,
                      marginTop: vs(3),
                    }}>
                    {reverseText('םויה')} ,18:00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>

              {/* Sixth----------------------------------------------- */}

              <View
                style={{
                  height: vs(50),
                  width: '90%',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}>
                <View
                  style={{
                    flex: 0.3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                  <Pressable
                    onPress={() => navigation.navigate('PatientAllTasksEdit')}>
                    <IconFont
                      style={{marginLeft: s(20)}}
                      name="edit"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </Pressable>
                </View>
                <View style={{flex: 0.7, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: ms(18),
                      color: 'grey',
                      textDecorationLine: 'line-through',
                    }}>
                    {reverseText('םוספיא םוספיא םרול')}
                  </Text>
                  <Text
                    style={{fontSize: ms(16), color: 'grey', marginTop: vs(3)}}>
                    {reverseText('םויה')} ,08:00
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderColor: '#D1D9DB',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: vs(10),
                }}></View>
            </ScrollView>
          </View>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: vs(45),
              width: '90%',
              borderRadius: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: vs(10),
              backgroundColor: colors.PrimaryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: ms(18),
                color: colors.BackgroundColor,
                right: s(10),
              }}>
              {reverseText('המישמ תפסוה')}
            </Text>
            <IconAnt name="plus" size={s(20)} color={colors.BackgroundColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PatientAllTasks;
