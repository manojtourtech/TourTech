import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';

import colors from '../../../../../theme/colors';
import styles from './Styles';
import IconAnt from 'react-native-vector-icons/AntDesign';

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
const ProductDetail = ({navigation}) => {
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
            }}></View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('הפורתה יטרפ')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeMedicinesMed')}>
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

        <ImageBackground
          style={{height: 260, width: '100%'}}
          source={{
            uri: 'https://images.unsplash.com/photo-1550572017-26b5655c1e8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGljaW5lJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}></ImageBackground>

        <View style={{margin: 15, height: vs(300), marginTop: vs(20)}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: ms(24),
                fontWeight: 'bold',
                color: colors.textColor,
              }}>
              {reverseText('הפורתה םש')}
            </Text>
            <Text
              style={{
                fontSize: ms(18),
                color: colors.textColor,
                marginTop: vs(5),
              }}>
              {reverseText('ל"מ 051')}
            </Text>
            <Text
              style={{
                fontSize: ms(20),
                fontWeight: 'bold',
                color: colors.textColor,
                marginTop: vs(20),
              }}>
              {reverseText('רואית')}
            </Text>

            <Text
              style={{
                fontSize: ms(18),
                color: colors.textColor,
                marginTop: vs(10),
              }}>
              {reverseText(
                'ררוטקסנוק ,טמא טיס רולוד םוספיא םרולזד טיעכס קשהרק תימאהל תילא גניסיפידא,אילב שצ .ךרונמ יאושנ ןיכטמל םכנמ ,אמהירקולב וקומצ ,יבננ וקיבל חלמצ וטוסנמ,טמא טיס רולוד םוספיא םרול .קרורב המצישיסינ םוקנמלא תס .תילא גניסיפידא ררוטקסנוק.םאיד הטפולוו סילוקאיא סד .האבינ ןונלאוו סוטקל תגא סארק ,רולוד טא םולוביטסוקילעב םודיט יסילוס םולוביטסו וגואא רבולק יטסנונ ,הרקילב סורוק םוטנמ ידנ וק.יטרל קירטצת ךקירפל ,םוטס הנקירב',
              )}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
