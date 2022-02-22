import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {PatienstList} from './PatientsList';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const MyPatients = ({navigation}) => {
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
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
              size={s(45)}
            />
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('רשק ישנא')}</Text>
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

        {/* CARDS ------------------------------------- */}
        {/* --------------------------------------------------- */}
        <FlatList
          style={{marginTop: 20}}
          data={PatienstList}
          keyExtractor={(x, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{marginTop: vs(22)}}>
              <Card
                style={styles.card1}
                onPress={() => {
                  navigation.navigate('PatientsTab');
                }}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="left"
                      size={s(25)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.9,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '98%',
                        width: '98%',
                        borderRadius: 10,
                        backgroundColor: colors.BackgroundColor,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row-reverse',
                          paddingHorizontal: s(10),
                          alignItems: 'center',
                          marginVertical: vs(5),
                        }}>
                        <Avatar.Image
                          source={{
                            uri: item.image,
                          }}
                          size={s(52)}
                        />
                        <Text style={styles.Text2}>
                          {reverseText(item.name)}
                        </Text>

                        {/* <Badge
                                                    badgeStyle={{ width: 22, height: 22, borderRadius: 22 }}
                                                    value="1"
                                                    status="error"
                                                    containerStyle={styles.badgeStyle}
                                                /> */}
                      </View>

                      <View
                        style={{
                          flexDirection: 'column',
                          paddingHorizontal: s(12),
                        }}>
                        <View
                          style={{
                            borderWidth: 0.6,
                            borderColor: '#D1D9DB',
                            width: '100%',
                            alignSelf: 'center',
                          }}></View>
                        <View style={{paddingVertical: 5}}>
                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../../assets/images/doc.png')}
                            />
                            <Text style={styles.Text3}>
                              {reverseText(item.doc)}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              marginTop: vs(10),
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{
                                height: 21,
                                width: 21,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../../assets/images/capsule.png')}
                            />
                            <Text style={styles.Text3}>
                              {reverseText(item.med)}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row-reverse',
                              marginTop: vs(10),
                              alignItems: 'center',
                            }}>
                            <Image
                              style={{
                                height: 23,
                                width: 23,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../../assets/images/schedules.png')}
                            />
                            <Text style={styles.Text3}>
                              {reverseText(item.schedule)}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            borderWidth: 0.6,
                            borderColor: '#D1D9DB',
                            width: '100%',
                            alignSelf: 'center',
                          }}></View>
                      </View>

                      <View
                        style={{
                          marginVertical: vs(10),
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <View style={{flex: 0.25, alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() => navigation.navigate('Outgoing')}>
                            <View
                              style={{
                                height: s(36),
                                width: s(36),
                                borderRadius: 36,
                                backgroundColor: '#6B449C',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <IconFont
                                name="video-camera"
                                size={s(18)}
                                color={colors.BackgroundColor}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>

                        <View style={{flex: 0.25, alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('TwoMembersVoice')
                            }>
                            <View
                              style={{
                                height: s(36),
                                width: s(36),
                                borderRadius: 36,
                                backgroundColor: '#1F61AE',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <IconIon
                                name="call"
                                size={s(18)}
                                color={colors.BackgroundColor}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex: 0.25, alignItems: 'center'}}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('MessagePerson')
                            }>
                            <View
                              style={{
                                height: s(36),
                                width: s(36),
                                borderRadius: 36,
                                backgroundColor: '#2F950B',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <IconIon
                                name="md-chatbubble-ellipses-sharp"
                                size={s(18)}
                                color={colors.BackgroundColor}
                              />
                            </View>
                          </TouchableOpacity>
                        </View>

                        <View style={{flex: 0.25, alignItems: 'center'}}>
                          <View
                            style={{
                              height: s(36),
                              width: s(36),
                              borderRadius: 36,
                              backgroundColor: '#E98830',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <IconM
                              name="mobile-friendly"
                              size={s(18)}
                              color={colors.BackgroundColor}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MyPatients;
