import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, Platform, Pressable} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {connect} from 'react-redux';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {vs, s, ms} from 'react-native-size-matters';
import AsyncStorage from '@react-native-community/async-storage';

import TermCondition from '../../../components/TermCondition';
import colors from '../../../theme/colors';
import styles from './Styles';

import Loader from '../../../components/Loader';
import {loginUser, setUserNumber, hideLoader} from '../../../redux/actions';
import Strings from '../../../languages/Strings.js';

const codes = ['050', '051', '052', '053', '054', '055', '056', '058', '91'];

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Login = ({navigation, ...props}) => {
  const [toggleButton, setToggleButton] = useState(false);
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [fcmToken, setFcmToken] = useState('');
  console.log('Code ====>', code);
  const textValidate = text => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    props.hideLoader();
    getToken();
  }, []);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('FCM_Token');
    console.log('Fcm Token ====>', token);
    setFcmToken(token);
  };

  const onPressContinue = () => {
    // navigation.replace('PatientNavigation');
    // navigation.replace('TherapistNavigation');
    if (number.length > 6 && code != '') {
      console.log('Set user number');
      props.setUserNumber({
        number: number,
        countryCode: code,
      });
      props.loginUser({
        nav: navigation,
        phoneNumber: number,
        phonePrefix: code,
        deviceToken: fcmToken,
        deviceType: Platform.OS == 'ios' ? 'ios' : 'android',
      });
      //navigation.navigate("VerifyOtp");
    } else {
      alert('Please enter correct details');
    }
  };

  return (
    <View style={styles.container}>
      <Loader />
      {toggleButton ? <TermCondition /> : null}
      <View style={styles.subContainer}>
        <Text style={styles.text1}>{reverseText(Strings.welcome)}</Text>
        <Text style={styles.text2}>{reverseText(Strings.confirmTheTerms)}</Text>

        <View style={styles.button1}>
          <View style={styles.toggleButtonView}>
            <Pressable onPress={() => setToggleButton(!toggleButton)}>
              <View
                style={[
                  styles.toggleView,
                  {
                    backgroundColor: toggleButton ? colors.primary : '#77869C',
                    alignSelf: toggleButton ? 'flex-end' : 'flex-start',
                  },
                ]}>
                {toggleButton ? (
                  <Feather name="check" size={s(17)} color={colors.white} />
                ) : (
                  <IconAnt name="close" size={s(17)} color={colors.white} />
                )}
              </View>
            </Pressable>
          </View>
          <Text style={styles.text3}>
            {reverseText(Strings.termsOfService)}
          </Text>
        </View>

        <Text style={styles.text4}>{reverseText(Strings.phoneNumber)}</Text>

        <View style={styles.childContainer}>
          <View style={styles.dropDown}>
            <SelectDropdown
              defaultButtonText={Strings.dropdownPlaceholder}
              buttonStyle={{
                borderRadius: 8,
                width: 100,
                height: vs(45),
                backgroundColor: colors.white,
              }}
              data={codes}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setCode(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={text => textValidate(text)}
              maxLength={10}
              value={number}
              placeholder={reverseText(Strings.placeHolderText)}
              keyboardType="numeric"
              style={styles.textinput}
              placeholderTextColor={colors.black}
            />
          </View>
        </View>

        <Pressable
          // onPress={() => { toggleButton && navigation.navigate('OTP') }}
          onPress={() => onPressContinue()}>
          <View
            style={[
              styles.button2,
              {backgroundColor: toggleButton ? colors.primary : '#C0C0C0'},
            ]}>
            <Text style={styles.buttonText}>{reverseText(Strings.send)}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginUser,
  setUserNumber,
  hideLoader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
