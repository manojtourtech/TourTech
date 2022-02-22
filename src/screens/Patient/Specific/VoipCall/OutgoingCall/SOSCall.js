import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import IconZ from 'react-native-vector-icons/Zocial';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';
import styles from '../IncomingCall/Styles';

function reverseText(s) {
  //console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const SOSCall = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#F4F4E6E5', '#F4E6E6E5', '#FFFFFFE5']}
      style={styles.container}>
      <View style={styles.top1}>
        <View
          style={{
            marginTop: vs(12),
            height: s(95),
            width: s(95),
            elevation: 3,
            backgroundColor: colors.white,
            borderRadius: 95,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
            }}
            size={s(89)}
          />
        </View>
        <Text style={styles.text2}>{reverseText('םייח לפוטמ')}</Text>
        <Text style={styles.text3}>0528704530</Text>

        <TouchableOpacity>
          <View
            style={{
              marginTop: vs(25),
              height: s(170),
              width: s(170),
              elevation: 3,
              backgroundColor: '#F41032',
              borderRadius: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.text5}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom3}>
        <View style={{flexDirection: 'row', marginTop: vs(30)}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View
              style={{
                height: s(70),
                width: s(70),
                elevation: 3,
                borderRadius: 70,
                backgroundColor: '#10B01C',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <IconZ name="call" size={s(25)} color={colors.white} />
              </TouchableOpacity>
            </View>
            <Text style={styles.text4}>{reverseText('תסנכנ תילוק החיש')}</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: vs(68),
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
            <Text style={styles.text4}>{reverseText('החיש קתנ')}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SOSCall;
