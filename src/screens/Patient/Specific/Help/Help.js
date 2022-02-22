import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {Card} from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../theme/colors';
import Strings from '../../../../languages/Strings';
import styles from './Styles';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Help = ({navigation}) => {
  const onPressWallet = () => {
    console.log('Wallet Icon is pressed');
  };

  const onPressSuitCase = () => {
    console.log('Suitcase Icon is pressed');
  };

  const onPressMedicalBag = () => {
    console.log('Medical Bag Icon is pressed');
  };

  const onPressHome = () => {
    console.log('Home Icon is pressed');
  };

  const onPressCart = () => {
    console.log('Cart Icon is pressed');
  };

  const onPressEran = () => {
    console.log('Eran Icon is pressed');
  };

  const onPressEmergency = () => {
    console.log('Emergency Icon is pressed');
  };

  const onPressFireDepartment = () => {
    console.log('Fire Department Icon is pressed');
  };

  const onPressPoliceDepartment = () => {
    console.log('Police Department Icon is pressed');
  };

  const HelpComponent = ({icon, name, name1, onPress}) => {
    return (
      <Card style={styles.card1}>
        <TouchableOpacity style={{flex: 1}} onPress={onPress}>
          <View
            style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
            {icon ? (
              <Image source={icon} style={{height: 65, width: 65}} />
            ) : null}
          </View>
          <View style={{flex: 0.4, alignItems: 'center'}}>
            {name ? (
              <Text style={styles.text3}>{reverseText(name)}</Text>
            ) : null}
            {name1 ? (
              <Text style={styles.text3}>{reverseText(name1)}</Text>
            ) : null}
          </View>
        </TouchableOpacity>
      </Card>
    );
  };

  const EmergencyComponent = ({icon, name, onPress}) => {
    return (
      <Card style={styles.card3}>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
          onPress={onPress}>
          <Image source={icon} style={{height: 60, width: 60}}></Image>
          <Text style={styles.text3}>{reverseText(name)}</Text>
        </TouchableOpacity>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.inner}>
        {/**************************************************/}
        <View style={styles.topView}>
          <View
            style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}}
          />
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text1}>{reverseText(Strings.howCanIhelp)}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeTasks')}>
              <View style={styles.iconView}>
                <IconAnt name="right" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/**************************************************/}
        <View style={styles.headingContainer}>
          <View style={styles.coloredLine} />
          <Text style={styles.text2}>{reverseText(Strings.IneedHelp)}</Text>
          <View style={styles.coloredLine} />
        </View>
        {/**************************************************/}
        <View style={styles.rowContainer}>
          <HelpComponent
            icon={require('../../../../assets/images/wallet.png')}
            name="ףסכ"
            name1="םימולשתו"
            onPress={onPressWallet}
          />
          <HelpComponent
            icon={require('../../../../assets/images/suitcase.png')}
            name="הדובע"
            onPress={onPressSuitCase}
          />
          <HelpComponent
            icon={require('../../../../assets/images/medical-bag.png')}
            name="םילופיט"
            name1="םייאופר"
            onPress={onPressMedicalBag}
          />
        </View>
        {/**************************************************/}
        <View style={styles.rowContainer}>
          <HelpComponent />
          <HelpComponent
            icon={require('../../../../assets/images/home.png')}
            name="תיבה יכרצ"
            onPress={onPressHome}
          />
          <HelpComponent
            icon={require('../../../../assets/images/cart.png')}
            name="תוינק"
            onPress={onPressCart}
          />
        </View>
        {/**************************************************/}
        <View style={styles.headingContainer}>
          <View style={[styles.coloredLine, {borderColor: colors.red}]}></View>
          <Text style={[styles.text2, {color: colors.red}]}>
            {reverseText(Strings.emergency)}
          </Text>
          <View style={[styles.coloredLine, {borderColor: colors.red}]}></View>
        </View>
        {/**************************************************/}
        <Card style={styles.card2}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../../../assets/images/doc.png')}
              style={{height: 60, width: 60}}
            />
            <Text style={styles.text4}>
              {reverseText(Strings.fallAsleepToArshi)}
            </Text>
          </View>
        </Card>
        {/**************************************************/}
        <View style={styles.rowContainer}>
          <EmergencyComponent
            icon={require('../../../../assets/images/eran.png')}
            name="ןרע"
            onPress={onPressEran}
          />
          <EmergencyComponent
            icon={require('../../../../assets/images/star1.png')}
            name='א"דמ'
            onPress={onPressEmergency}
          />
          <EmergencyComponent
            icon={require('../../../../assets/images/star2.png')}
            name="שא יבכמ"
            onPress={onPressFireDepartment}
          />
          <EmergencyComponent
            icon={require('../../../../assets/images/star3.png')}
            name="הרטשמ"
            onPress={onPressPoliceDepartment}
          />
        </View>
      </View>
    </View>
  );
};

export default Help;
