import React from 'react';
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
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientAllQueues = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientQueues')}>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconFontisto
                  name="search"
                  size={s(20)}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>
          </View>
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
              onPress={() => navigation.navigate('PatientQueues')}>
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

          <View style={{height: vs(350), width: '95%', alignSelf: 'center'}}>
            <ScrollView>
              {/* First */}
              <Card
                style={{
                  height: vs(200),
                  width: '95%',
                  borderRadius: 10,
                  borderWidth: 0.8,
                  borderColor: colors.borderColor,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(15),
                  marginBottom: vs(5),
                }}>
                <View style={{flex: 0.75, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.3,
                      flexDirection: 'row',
                      paddingTop: vs(25),
                      justifyContent: 'center',
                    }}>
                    <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                    <Pressable
                      onPress={() =>
                        navigation.navigate('PatientAllQueuesEdit')
                      }>
                      <IconFont
                        style={{marginLeft: s(20)}}
                        name="edit"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flex: 0.7,
                      justifyContent: 'space-around',
                      marginHorizontal: s(10),
                      marginVertical: vs(15),
                    }}>
                    <Text
                      style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                      {reverseText('םויה 1202 ילויב 92')}
                    </Text>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        fontWeight: 'bold',
                      }}>
                      {reverseText('יגולוכיספ אפורל רות')}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor,
                          right: s(10),
                        }}>
                        {reverseText('ןיול םהרבא')}
                      </Text>
                      <Avatar.Image
                        source={{
                          uri: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                        }}
                        size={s(50)}
                      />
                    </View>
                  </View>
                </View>
                <View style={{flex: 0.25, marginHorizontal: s(10)}}>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#D1D9DB',
                      width: '90%',
                      alignSelf: 'center',
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      top: vs(12),
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('האופר תאפרמ')}
                    </Text>
                    <IconIon
                      style={{marginLeft: s(20)}}
                      name="location-sharp"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                </View>
              </Card>

              {/* Second Card------------------------------------------- */}

              <Card
                style={{
                  height: vs(200),
                  width: '95%',
                  borderRadius: 10,
                  borderWidth: 0.8,
                  borderColor: colors.borderColor,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(15),
                  marginBottom: vs(5),
                }}>
                <View style={{flex: 0.75, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.3,
                      flexDirection: 'row',
                      paddingTop: vs(25),
                      justifyContent: 'center',
                    }}>
                    <IconIon name="ios-trash" size={s(24)} color={'#F41032'} />
                    <Pressable
                      onPress={() =>
                        navigation.navigate('PatientAllQueuesEdit')
                      }>
                      <IconFont
                        style={{marginLeft: s(20)}}
                        name="edit"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flex: 0.7,
                      justifyContent: 'space-around',
                      marginHorizontal: s(10),
                      marginVertical: vs(15),
                    }}>
                    <Text
                      style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                      {reverseText('םויה 1202 ילויב 92')}
                    </Text>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        fontWeight: 'bold',
                      }}>
                      {reverseText('יגולוכיספ אפורל רות')}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor,
                          right: s(10),
                        }}>
                        {reverseText('ןיול םהרבא')}
                      </Text>
                      <Avatar.Image
                        source={{
                          uri: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(50)}
                      />
                    </View>
                  </View>
                </View>
                <View style={{flex: 0.25, marginHorizontal: s(10)}}>
                  <View
                    style={{
                      borderWidth: 0.6,
                      borderColor: '#D1D9DB',
                      width: '90%',
                      alignSelf: 'center',
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                      top: vs(12),
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('האופר תאפרמ')}
                    </Text>
                    <IconIon
                      style={{marginLeft: s(20)}}
                      name="location-sharp"
                      size={s(24)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                </View>
              </Card>
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
              {reverseText('רות ףסוה')}
            </Text>
            <IconAnt name="plus" size={s(20)} color={colors.BackgroundColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PatientAllQueues;
