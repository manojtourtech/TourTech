import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {Card, Avatar} from 'react-native-paper';

import styles from './Styles';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {ms, s, vs} from 'react-native-size-matters';
import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const HomeQueueQueue = ({navigation}) => {
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
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeQueues')}>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconFeather
                  name="edit"
                  size={s(22)}
                  color={colors.textColor}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('רות')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeQueues')}>
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
            {reverseText('תיתנש לפוטמ תקידב')}
          </Text>
          <Text
            style={{
              fontSize: ms(18),
              color: colors.textColor2,
              alignSelf: 'flex-end',
              marginTop: vs(25),
            }}>
            {reverseText('00:01 | 1202 ינויב 92')}
          </Text>
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
              marginTop: vs(5),
            }}>
            <IconIon
              name="location-sharp"
              size={s(20)}
              color={colors.textColor2}
            />
            <Text style={{fontSize: ms(18), color: colors.textColor2}}>
              {reverseText('האופר תאפרמ')}
            </Text>
          </View>

          <Card style={styles.card3}>
            <View style={{flex: 1, margin: 10}}>
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
                    marginRight: s(10),
                  }}>
                  {reverseText('לפוטמה םש')}
                </Text>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(48)}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: vs(20),
                }}>
                <Card style={styles.card4}>
                  <View style={{flex: 1, margin: 8}}>
                    <View style={{flex: 2}}>
                      <View
                        style={{
                          width: 60,
                          height: 58,
                          backgroundColor: '#E6EEF4',
                          borderRadius: 8,
                          alignSelf: 'flex-end',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../../../assets/images/schedule.png')}
                          style={{height: 55, width: 55}}></Image>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <IconAnt
                        name="left"
                        size={s(22)}
                        color={colors.textColor}
                      />
                      <Text style={{fontSize: ms(18), color: colors.textColor}}>
                        {reverseText('םשרמ תופורת')}
                      </Text>
                    </View>
                  </View>
                </Card>
                <Card style={styles.card4}>
                  <View style={{flex: 1, margin: 8}}>
                    <View style={{flex: 2}}>
                      <View
                        style={{
                          width: 60,
                          height: 58,
                          backgroundColor: '#E6EEF4',
                          borderRadius: 8,
                          alignSelf: 'flex-end',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../../../assets/images/report.png')}
                          style={{height: 55, width: 55}}></Image>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <IconAnt
                        name="left"
                        size={s(22)}
                        color={colors.textColor}
                      />
                      <Text style={{fontSize: ms(18), color: colors.textColor}}>
                        {reverseText('יאופר קית')}
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: vs(12),
                }}>
                <Card style={styles.card4}>
                  <View style={{flex: 1, margin: 8}}>
                    <View style={{flex: 2}}>
                      <View
                        style={{
                          width: 60,
                          height: 58,
                          backgroundColor: '#E6EEF4',
                          borderRadius: 8,
                          alignSelf: 'flex-end',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../../../assets/images/lab.png')}
                          style={{height: 55, width: 55}}></Image>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <IconAnt
                        name="left"
                        size={s(22)}
                        color={colors.textColor}
                      />
                      <Text style={{fontSize: ms(18), color: colors.textColor}}>
                        {reverseText('תיאופר הקידב')}
                      </Text>
                    </View>
                  </View>
                </Card>
                <Card style={styles.card4}>
                  <View style={{flex: 1, margin: 8}}>
                    <View style={{flex: 2}}>
                      <View
                        style={{
                          width: 60,
                          height: 58,
                          backgroundColor: '#E6EEF4',
                          borderRadius: 8,
                          alignSelf: 'flex-end',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../../../../assets/images/nurse.png')}
                          style={{height: 58, width: 58}}></Image>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <IconAnt
                        name="left"
                        size={s(22)}
                        color={colors.textColor}
                      />
                      <Text style={{fontSize: ms(18), color: colors.textColor}}>
                        {reverseText('תווצ')}
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default HomeQueueQueue;
