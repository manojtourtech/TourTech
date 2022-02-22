import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFound from 'react-native-vector-icons/Foundation';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';
import styles from './Styles';

function reverseText(s) {
  //console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const images = {
  image1:
    'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image2:
    'https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image3:
    'https://images.unsplash.com/photo-1547944379-e0b132d2ddfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image4:
    'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image5:
    'https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image6:
    'https://images.unsplash.com/photo-1565493383251-d3a136e92e6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image7:
    'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
};
const HomeMedicinesMed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

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
            <Text style={styles.Text1}>{reverseText('הפורת')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeMedicines')}>
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
            {reverseText('םוספיא םרול הפורת')}
          </Text>
          <Text
            style={{
              fontSize: ms(18),
              color: colors.textColor,
              alignSelf: 'flex-end',
              marginTop: vs(8),
            }}>
            {'Today, 9:00'}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail')}
            style={{
              height: 35,
              width: 160,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#23973D',
              borderRadius: 10,
              alignSelf: 'flex-end',
              marginTop: vs(25),
            }}>
            <Text
              style={{
                fontSize: ms(16),
                color: colors.white,
                marginRight: s(8),
              }}>
              {reverseText('הפורתה יטרפ')}
            </Text>
            <IconFound name="info" size={s(20)} color={colors.white} />
          </TouchableOpacity>
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
              color: colors.primary,
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
                borderRadius: 8,
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: ms(16), color: colors.textColor}}>
                  {reverseText('עצוב')}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: colors.primary,
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: ms(16), color: colors.white}}>
                  {reverseText('םלש אל')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            {/* LIST--------------------------------------------------------- */}

            {/* First----------------------------------------------- */}
            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
              </View>

              <View style={{flex: 0.65, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(18), color: colors.textColor}}>
                  {reverseText('םהרבא לפטמ')}
                </Text>
                <Text style={{fontSize: ms(18), color: '#68777B'}}>
                  {reverseText('המישמה תא עציב אל')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: images.image1,
                  }}
                  size={s(52)}
                />
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F41032',
                    position: 'absolute',
                    top: vs(30),
                    right: s(-8),
                  }}>
                  <IconAnt name="close" size={20} color={'#ffffff'} />
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Second----------------------------------------------- */}
            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
              </View>

              <View style={{flex: 0.65, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(18), color: colors.textColor}}>
                  {reverseText('םהרבא לפטמ')}
                </Text>
                <Text style={{fontSize: ms(18), color: '#68777B'}}>
                  {reverseText('המישמה תא עציב אל')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: images.image5,
                  }}
                  size={s(52)}
                />
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F41032',
                    position: 'absolute',
                    top: vs(30),
                    right: s(-8),
                  }}>
                  <IconAnt name="close" size={20} color={'#ffffff'} />
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Third--------------------------------------------------- */}

            {/* First----------------------------------------------- */}
            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
              </View>

              <View style={{flex: 0.65, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(18), color: colors.textColor}}>
                  {reverseText('םהרבא לפטמ')}
                </Text>
                <Text style={{fontSize: ms(18), color: '#68777B'}}>
                  {reverseText('המישמה תא עציב אל')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: images.image6,
                  }}
                  size={s(52)}
                />
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#F41032',
                    position: 'absolute',
                    top: vs(30),
                    right: s(-8),
                  }}>
                  <IconAnt name="close" size={20} color={'#ffffff'} />
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeMedicinesMed;
