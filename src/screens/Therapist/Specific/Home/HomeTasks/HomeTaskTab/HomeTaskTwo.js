import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../../../theme/colors';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
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
const HomeTaskTwo = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 10}}>
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
                backgroundColor: '#10B01C',
                position: 'absolute',
                top: vs(30),
                right: s(-8),
              }}>
              <IconFeather name="check" size={20} color={'#ffffff'} />
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
                backgroundColor: '#10B01C',
                position: 'absolute',
                top: vs(30),
                right: s(-8),
              }}>
              <IconFeather name="check" size={20} color={'#ffffff'} />
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
                backgroundColor: '#10B01C',
                position: 'absolute',
                top: vs(30),
                right: s(-8),
              }}>
              <IconFeather name="check" size={20} color={'#ffffff'} />
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
                uri: images.image,
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
                backgroundColor: '#10B01C',
                position: 'absolute',
                top: vs(30),
                right: s(-8),
              }}>
              <IconFeather name="check" size={20} color={'#ffffff'} />
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
                uri: images.image7,
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
                backgroundColor: '#10B01C',
                position: 'absolute',
                top: vs(30),
                right: s(-8),
              }}>
              <IconFeather name="check" size={20} color={'#ffffff'} />
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
  );
};

export default HomeTaskTwo;
