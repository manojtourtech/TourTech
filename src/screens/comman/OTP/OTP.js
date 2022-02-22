import React, {useEffect, useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import RNOtpVerify from 'react-native-otp-verify';
import {s, vs, ms} from 'react-native-size-matters';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';

import Loader from '../../../components/Loader';
import {otpVerify} from '../../../redux/actions/index';
import Strings from '../../../languages/Strings.js';
import colors from '../../../theme/colors';
import styles from './Styles';
import verifyOtpApi from '../../../services/verifyOTP';

function reverseText(s) {
  return s.split('').reverse().join('');
}
45451156156;

const OTP = ({navigation, ...props}) => {
  const [number, setNumber] = useState('');
  const [optVerfied, setOtpVerfied] = useState('');

  console.log('session_id', props.session_id);
  const onNumberInput = text => {
    console.log(text);
    setNumber(text);
  };

  // let otpInput = useRef(null);

  // useEffect(() => {
  //     RNOtpVerify.getHash()
  //         .then(console.log)
  //         .catch(console.log);

  //     RNOtpVerify.getOtp()
  //         .then(p => RNOtpVerify.addListener(otpHandler))
  //         .catch(p => console.log(p));
  //     return () => RNOtpVerify.removeListener();
  // }, [])

  // const otpHandler = (message: string) => {
  //     console.log('message=>', message)
  //     const otp = /(\d{4})/g.exec(message)[1];
  //     console.log('otp=>', otp)
  //     otpInput.setValue(otp);
  //     RNOtpVerify.removeListener();
  //     Keyboard.dismiss();
  // }

  console.log(props.userDetail.appType);

  const onPressSubmit = async () => {
    const response = await verifyOtpApi(number, props.session_id).catch(
      error => {
        setOtpVerfied('Not verified');
        props.otpVerify(false);
      },
    );
    console.log(response);
    if (
      response?.status == 200 &&
      response?.data.message === 'User verified successfully.'
    ) {
      props.otpVerify(true);
      if (props.userDetail?.appType === 'Patient') {
        navigation.replace('PatientNavigation');
      } else {
        navigation.replace('TherapistNavigation');
      }
    } else {
      Toast.show({
        type: 'Error',
        text1: response.status,
        text2: response.status,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Loader />
      <View style={{margin: 15, marginTop: vs(70)}}>
        <Text style={styles.text1}>
          {reverseText(Strings.verifyYourNumber)}
        </Text>
        <Text style={styles.text2}>
          {reverseText(Strings.enterTheCodeYouReceived)}
        </Text>
        <OTPTextView
          // ref={e => (otpInput = e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          handleTextChange={onNumberInput}
          inputCount={4}
          keyboardType="numeric"
          cellTextLength={1}
          tintColor={colors.primary}
        />
        <TouchableOpacity
          onPress={() => {
            onPressSubmit();
          }}
          style={styles.button}>
          <Text style={styles.text4}>{reverseText(Strings.send)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail?.sessionId,
  userDetail: state.session.userDetail,
});

const mapDispatchToProps = {
  otpVerify,
};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);
