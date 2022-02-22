import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import colors from '../../../../../theme/colors';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFound from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import {vs, s} from 'react-native-size-matters';
import ContactsModal from '../../../../../components/ContactsModal';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const ThreeMembersVoice = ({navigation}) => {
  const [isVisible, setisVisible] = React.useState(false);

  const ModalVisibility = show => {
    setisVisible(show);
  };

  return (
    <LinearGradient
      colors={['#E6EEF4E5', '#FFFFFFE5']}
      style={styles.container}>
      <ContactsModal Visible={isVisible} close={() => ModalVisibility(false)} />
      <View style={styles.top}>
        <View style={{flexDirection: 'row', marginTop: vs(90)}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View
              style={{
                marginTop: vs(12),
                height: s(70),
                width: s(70),
                elevation: 3,
                backgroundColor: colors.BackgroundColor,
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
                size={s(20)}
                color={colors.PrimaryColor}
              />
            </View>
          </View>
          <View style={styles.verticleLine}></View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 45,
            }}>
            <View
              style={{
                marginTop: vs(12),
                height: s(70),
                width: s(70),
                elevation: 3,
                backgroundColor: colors.BackgroundColor,
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

        <Text style={styles.text5}>00:54</Text>
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
                  backgroundColor: colors.BackgroundColor,
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
                  backgroundColor: colors.BackgroundColor,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    ModalVisibility(true),
                      setTimeout(() => {
                        navigation.navigate('FourMembersVoice');
                      }, 3000);
                  }}>
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
                  backgroundColor: colors.BackgroundColor,
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
                  backgroundColor: colors.BackgroundColor,
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
                  backgroundColor: colors.BackgroundColor,
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
          <IconM name="call-end" size={s(28)} color={colors.BackgroundColor} />
        </TouchableOpacity>
        <Text style={styles.text6}>{reverseText('החיש קתנ')}</Text>
      </View>
    </LinearGradient>
  );
};

export default ThreeMembersVoice;
