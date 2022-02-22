import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import IconEnt from 'react-native-vector-icons/Entypo';

import colors from '../../../../theme/colors';
import Styles from './Styles';

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const SettingsTwo = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.top}>
        <View style={{flex: 0.2}} />
        <View
          style={{flex: 0.55, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={Styles.Text1}>{reverseText('תורדגה')}</Text>
        </View>
        <View
          style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <View style={Styles.MenuButton}>
              <IconEnt name="menu" size={27} color={colors.textColor} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.bottom1}>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            }}
            size={120}
          />
          <Text style={Styles.Text6}>{reverseText('ליפורפ תנומת הנש')}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 5}}>
            <View style={{marginTop: 25}}>
              <Text style={Styles.Text4}>{reverseText('תרתומ השיג')}</Text>

              <View style={Styles.textInput}>
                <TextInput
                  placeholder={reverseText('לגוג לש הנש חול')}
                  style={Styles.textInputdata}></TextInput>
              </View>
              <View style={[Styles.textInput, {marginTop: 15}]}>
                <TextInput
                  placeholder={reverseText('רשק ישנאל השיג')}
                  style={Styles.textInputdata}></TextInput>
              </View>
            </View>

            <View style={{marginTop: 35}}>
              <Text style={Styles.Text4}>{reverseText('עמשנ')}</Text>

              <View style={Styles.textInput}>
                <TextInput
                  placeholder={reverseText('םילילצ רשפא')}
                  style={Styles.textInputdata}></TextInput>
              </View>
              <View style={[Styles.textInput, {marginTop: 15}]}>
                <TextInput
                  placeholder={reverseText('טטר רשפא')}
                  style={Styles.textInputdata}></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsTwo;
