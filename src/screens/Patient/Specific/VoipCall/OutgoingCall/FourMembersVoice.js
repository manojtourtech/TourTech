import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFound from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import {s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';
import styles from './Styles';

function reverseText(s) {
  //console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const FourMembersVoice = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#E6EEF4E5', '#FFFFFFE5']}
      style={styles.container}>
      <View style={styles.top}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: vs(27),
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  marginTop: vs(12),
                  height: s(70),
                  width: s(70),
                  elevation: 3,
                  backgroundColor: colors.white,
                  borderRadius: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
                  }}
                  size={s(65)}
                />
              </View>
              <Text
                style={[styles.text1, {marginTop: vs(7), fontWeight: 'bold'}]}>
                {reverseText('ררוטקסנוק')}
              </Text>
              <Text
                style={[styles.text1, {marginTop: vs(1), fontWeight: 'bold'}]}>
                {reverseText('גניסיפידא')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.text8}>{reverseText('רבדמ')}</Text>
                <IconFound
                  style={{marginTop: vs(4), marginLeft: vs(6)}}
                  name="microphone"
                  size={23}
                  color={colors.primary}
                />
              </View>
            </View>
            <View style={styles.verticleLine2}></View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: vs(40),
              }}>
              <View
                style={{
                  marginTop: vs(12),
                  height: s(70),
                  width: s(70),
                  elevation: 3,
                  backgroundColor: colors.white,
                  borderRadius: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1618255697744-b45454ae6b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(65)}
                />
              </View>
              <Text
                style={[styles.text1, {marginTop: vs(7), fontWeight: 'bold'}]}>
                {reverseText('םייח לפוטמ')}
              </Text>
              <Text style={styles.text7}>{reverseText('הבשקה')}</Text>
            </View>
          </View>
          {/* Third Image */}
          <View style={styles.horizontalLine}></View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                marginTop: vs(12),
                height: s(70),
                width: s(70),
                elevation: 3,
                backgroundColor: colors.white,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNlbGVicml0eSUyMGdpcmx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                size={s(65)}
              />
            </View>
            <Text
              style={[styles.text1, {marginTop: vs(7), fontWeight: 'bold'}]}>
              {reverseText('םייח לפטמ')}
            </Text>
            <Text style={styles.text7}>{reverseText('...רשקמ')}</Text>
          </View>

          {/* END */}
        </View>
        <Text style={[styles.text5, {marginTop: 20}]}>00:54</Text>
      </View>
      <View style={styles.bottom1}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                  width: s(55),
                  height: s(55),
                  borderRadius: 55,
                  backgroundColor: colors.white,
                }}>
                <TouchableOpacity>
                  <IconEnt name="minus" size={s(25)} color={'#034B6C'} />
                </TouchableOpacity>
              </View>
              <Text style={styles.text4}>{reverseText('רבח תרסה')}</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: s(47),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                  width: s(55),
                  height: s(55),
                  borderRadius: 55,
                  backgroundColor: colors.white,
                }}>
                <TouchableOpacity>
                  <IconEnt name="plus" size={s(25)} color={'#034B6C'} />
                </TouchableOpacity>
              </View>
              <Text style={styles.text4}>{reverseText('רבח תפסוה')}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: vs(22)}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                  width: s(55),
                  height: s(55),
                  borderRadius: 55,
                  backgroundColor: colors.white,
                }}>
                <TouchableOpacity>
                  <IconIon
                    name="md-chatbubble-ellipses-sharp"
                    size={s(25)}
                    color={'#034B6C'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text4}>{reverseText('העדוה')}</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: s(47),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                  width: s(55),
                  height: s(55),
                  borderRadius: 55,
                  backgroundColor: colors.white,
                }}>
                <TouchableOpacity>
                  <IconFont
                    name="video-camera"
                    size={s(22)}
                    color={'#034B6C'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text4}>{reverseText('העדוה')}</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: s(47),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 3,
                  width: s(55),
                  height: s(55),
                  borderRadius: 55,
                  backgroundColor: colors.white,
                }}>
                <TouchableOpacity>
                  <IconIon
                    name="volume-medium"
                    size={s(27)}
                    color={'#034B6C'}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.text4}>{reverseText('העדוה')}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom2}>
        <TouchableOpacity style={styles.button}>
          <IconM name="call-end" size={s(28)} color={colors.white} />
        </TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('SOSCall')}
          style={styles.text6}>
          {reverseText('החיש קתנ')}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default FourMembersVoice;
