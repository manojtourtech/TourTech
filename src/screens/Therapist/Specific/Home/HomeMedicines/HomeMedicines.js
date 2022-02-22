import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import styles from './Styles';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFound from 'react-native-vector-icons/Foundation';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
// import { useFonts } from '@use-expo/font'
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import ListData from './FlatListData';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const HomeMedicines = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          marginTop: vs(30),
          alignSelf: 'flex-end',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: vs(45),
            width: s(45),
            borderRadius: 10,
            backgroundColor: '#236ABC',
          }}>
          <IconFont5 name="capsules" size={s(24)} color={'#ffffff'} />
        </View>
        <Text
          style={{
            fontSize: ms(21),
            fontWeight: 'bold',
            marginRight: s(15),
            color: '#236ABC',
          }}>
          {reverseText('תופורת תמישר')}
        </Text>
      </View>

      <View style={styles.date}>
        <Fontisto name="calendar" size={s(24)} color={'#63A6BB'} />
        <Text
          style={{
            fontSize: ms(18),
            color: colors.textColor,
            paddingRight: s(15),
          }}>
          {reverseText('םויה 1202 ילויב 10')}
        </Text>
      </View>

      <TouchableOpacity
        // onPress={() => ModalVisibility(true)}
        style={styles.addButton}>
        <IconAnt name="plus" size={s(20)} color={colors.BackgroundColor} />
        <Text
          style={{
            fontSize: ms(16),
            color: colors.BackgroundColor,
            marginRight: s(10),
          }}>
          {reverseText('השדח המישמ ףסוה')}
        </Text>
      </TouchableOpacity>

      {/* List********************************* */}

      <FlatList
        style={{marginTop: 20}}
        data={ListData}
        keyExtractor={(x, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Card
              onPress={() => navigation.navigate('HomeMedicinesMed')}
              style={styles.card1}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconAnt name="left" size={s(25)} color={'#1F61AE'} />
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
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <View style={{flex: 1, margin: 9}}>
                      <View style={{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 0.5, justifyContent: 'center'}}>
                          <Text
                            style={{
                              fontSize: ms(18),
                              color: colors.PrimaryColor,
                            }}>
                            {item.time}
                          </Text>
                        </View>
                        <View style={{flex: 1.5, justifyContent: 'center'}}>
                          <Text
                            style={{fontSize: ms(18), color: colors.textColor}}>
                            {reverseText(item.name)}
                          </Text>
                        </View>
                      </View>
                      <View style={{flex: 0.75}}>
                        <View
                          style={{
                            borderWidth: 0.6,
                            borderColor: '#D1D9DB',
                            width: '100%',
                            alignSelf: 'center',
                            marginTop: vs(7),
                          }}></View>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: '#68777B',
                            marginTop: vs(10),
                          }}>
                          {reverseText(item.members)}
                        </Text>

                        <View
                          style={{
                            marginTop: vs(15),
                            alignSelf: 'flex-end',
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                          }}>
                          <Avatar.Image
                            source={{
                              uri: item.images.img1,
                            }}
                            size={s(45)}
                          />
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <Avatar.Image
                              source={{
                                uri: item.images.img2,
                              }}
                              size={s(45)}
                            />
                          </View>
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <Avatar.Image
                              source={{
                                uri: item.images.img3,
                              }}
                              size={s(45)}
                            />
                          </View>
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <View
                              style={{
                                height: s(45),
                                width: s(45),
                                borderRadius: 45,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#E9EFF7',
                              }}>
                              <Text
                                style={{
                                  fontSize: ms(20),
                                  color: colors.textColor,
                                }}>
                                +3
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        )}
        ListFooterComponent={
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: s(15),
              }}>
              <IconIon
                name="settings-sharp"
                size={s(22)}
                color={colors.PrimaryColor}
              />
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  color: colors.PrimaryColor,
                  left: s(8),
                }}>
                {reverseText('ךורעל')}
              </Text>
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  color: colors.PrimaryColor,
                  position: 'absolute',
                  right: 0,
                }}>
                {reverseText('םיבושח רשק ישנא')}
              </Text>
            </View>
            <Card
              // onPress={() => ModalVisibility(true)}
              style={{
                height: vs(180),
                width: '99%',
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(10),
                borderRadius: 10,
                marginBottom: vs(5),
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 0.5}}>
                    <View
                      style={{
                        alignItems: 'center',
                        height: '85%',
                        width: '100%',
                        borderRightWidth: 0.7,
                        borderColor: colors.borderColor,
                      }}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                      <Text
                        style={{
                          fontSize: ms(15),
                          color: '#68777B',
                          top: vs(8),
                        }}>
                        {reverseText('םרולםוספיא')}
                      </Text>
                      <IconIon
                        style={{marginTop: vs(25)}}
                        name="call"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                      <IconFont
                        style={{marginTop: vs(12)}}
                        name="video-camera"
                        size={s(24)}
                        color={'#23973D'}
                      />
                    </View>
                  </View>
                  <View style={{flex: 0.5}}>
                    <View
                      style={{
                        alignItems: 'center',
                        height: '85%',
                        width: '100%',
                        borderRightWidth: 0.7,
                        borderColor: colors.borderColor,
                      }}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1605108040941-7c762d5ed4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                      <Text
                        style={{
                          fontSize: ms(15),
                          color: '#68777B',
                          top: vs(8),
                        }}>
                        {reverseText('םרולםוספיא')}
                      </Text>
                      <IconIon
                        style={{marginTop: vs(25)}}
                        name="call"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                      <IconFont
                        style={{marginTop: vs(12)}}
                        name="video-camera"
                        size={s(24)}
                        color={'#23973D'}
                      />
                    </View>
                  </View>
                  <View style={{flex: 0.5}}>
                    <View
                      style={{
                        alignItems: 'center',
                        height: '85%',
                        width: '100%',
                        borderRightWidth: 0.7,
                        borderColor: colors.borderColor,
                      }}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                      <Text
                        style={{
                          fontSize: ms(15),
                          color: '#68777B',
                          top: vs(8),
                        }}>
                        {reverseText('םרולםוספיא')}
                      </Text>
                      <IconIon
                        style={{marginTop: vs(25)}}
                        name="call"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                      <IconFont
                        style={{marginTop: vs(12)}}
                        name="video-camera"
                        size={s(24)}
                        color={'#23973D'}
                      />
                    </View>
                  </View>
                  <View style={{flex: 0.5}}>
                    <View
                      style={{
                        alignItems: 'center',
                        height: '85%',
                        width: '100%',
                      }}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                      <Text
                        style={{
                          fontSize: ms(15),
                          color: '#68777B',
                          top: vs(8),
                        }}>
                        {reverseText('םרולםוספיא')}
                      </Text>
                      <IconIon
                        style={{marginTop: vs(25)}}
                        name="call"
                        size={s(24)}
                        color={colors.PrimaryColor}
                      />
                      <IconFont
                        style={{marginTop: vs(12)}}
                        name="video-camera"
                        size={s(24)}
                        color={'#23973D'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        }
      />
    </View>
  );
};

export default HomeMedicines;
