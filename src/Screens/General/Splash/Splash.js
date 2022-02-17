import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {connect} from 'react-redux';

import {colors} from '../../../assets/colors/colors';

function SplashScreen({navigation, ...props}) {
  useEffect(() => {
    console.log('props.isOtpVerifyDone =', props.isOtpVerifyDone);
    setTimeout(async () => {
      if (!props.isOtpVerifyDone) {
        navigation.replace('SignIn');
      } else {
        navigation.dispatch(StackActions.replace('HomeNavigation'));
      }
      //navigation.navigate("LoginRouter");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/2.png')}></Image>
      <Text style={styles.h1}>version: 1.0</Text>
      <Text style={styles.h2}>Patient</Text>
    </View>
  );
}

const mapStateToProps = state => ({
  isOtpVerifyDone: state.session.otpVerifyDone,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 270,
    width: 270,
  },
  h1: {
    fontSize: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  h2: {
    fontSize: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 5,
  },
});
