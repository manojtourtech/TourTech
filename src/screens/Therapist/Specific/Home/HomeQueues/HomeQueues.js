import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import styles from './Styles';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ms, s, vs} from 'react-native-size-matters';
import ListData from './FlatListData';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const HomeQueue = ({navigation}) => {
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
            backgroundColor: '#2F950B',
          }}>
          <Fontisto name="doctor" size={s(24)} color={'#ffffff'} />
        </View>
        <Text
          style={{
            fontSize: ms(21),
            fontWeight: 'bold',
            marginRight: s(15),
            color: '#2F950B',
          }}>
          {reverseText('ילש םירות')}
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

      {/* List******************************************** */}

      <FlatList
        style={{marginTop: 20}}
        data={ListData}
        keyExtractor={(x, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Card
              onPress={() => navigation.navigate('HomeQueuesQueue')}
              style={styles.card1}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconAnt name="left" size={s(25)} color={'#2F950B'} />
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
                      <Text
                        style={{
                          fontSize: ms(19),
                          fontWeight: 'bold',
                          color: colors.textColor,
                        }}>
                        {reverseText(item.name1)}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(19),
                          color: '#2F950B',
                          marginTop: vs(8),
                        }}>
                        {reverseText(item.date)}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginTop: vs(8),
                        }}>
                        <Text style={{fontSize: ms(19), color: '#2F950B'}}>
                          {reverseText(item.location)}
                        </Text>
                        <IconIon
                          name="location-sharp"
                          size={s(20)}
                          color={'#2F950B'}
                        />
                      </View>
                      <View
                        style={{
                          borderWidth: 0.6,
                          borderColor: '#D1D9DB',
                          width: '95%',
                          alignSelf: 'center',
                          marginTop: vs(12),
                        }}></View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginTop: vs(8),
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.textColor,
                            marginRight: s(10),
                          }}>
                          {reverseText(item.name2)}
                        </Text>
                        <Avatar.Image
                          source={{
                            uri: item.img,
                          }}
                          size={s(48)}
                        />
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
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  right: s(5),
                }}>
                {reverseText('םיבושח רשק ישנא')}
              </Text>
            </View>
            <Card
              onPress={() => ModalVisibility(true)}
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

export default HomeQueue;
