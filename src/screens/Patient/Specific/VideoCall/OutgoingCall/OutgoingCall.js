import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {s, vs, ms} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';
import ContactsModal from '../../../../../components/ContactsModal';
import styles from './Styles';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const OutgoingCall = ({navigation}) => {
  const [isVisible, setisVisible] = React.useState(false);
  const ModalVisibility = show => {
    setisVisible(show);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#E6EEF4'} barStyle="dark-content" />
      <ContactsModal Visible={isVisible} close={() => ModalVisibility(false)} />
      <View style={styles.top}>
        <ImageBackground
          style={styles.backimg}
          source={{
            uri: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGJ1c2luZXNzJTIwbWFufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          }}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://images.unsplash.com/photo-1618255697744-b45454ae6b39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}></Image>
          <View
            style={{
              height: vs(29),
              width: s(150),
              backgroundColor: '#E6EEF4',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-end',
              marginBottom: vs(18),
              marginLeft: s(59),
            }}>
            <Text style={styles.text2}>
              {reverseText('גניסיפידא ררוטקסנוק')}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottom1}>
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
          <Text style={styles.text1}>{reverseText('העדוה')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 55,
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
            <TouchableOpacity
              onPress={() => {
                ModalVisibility(true),
                  setTimeout(() => {
                    navigation.navigate('Three');
                  }, 3000);
              }}>
              <IconEnt name="plus" size={s(25)} color={'#034B6C'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>{reverseText('רשק שיא תפסוה')}</Text>
        </View>
      </View>
      <View style={styles.bottom2}>
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
              <IconIon name="camera-reverse" size={s(25)} color={'#034B6C'} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>{reverseText('המלצמ ףלחה')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 50,
          }}>
          <View
            style={{
              height: s(70),
              width: s(70),
              elevation: 3,
              borderRadius: 70,
              backgroundColor: '#F41032',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <IconM name="call-end" size={s(25)} color={colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>{reverseText('החיש קתנ')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 50,
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
                name="microphone-slash"
                size={s(25)}
                color={'#034B6C'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text1}>{reverseText('קיתשהל')}</Text>
        </View>
      </View>
    </View>
  );
};

export default OutgoingCall;
