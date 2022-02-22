import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScaledSheet} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEF4',
  },
  top: {
    flex: 0.2,
    alignItems: 'center',
  },
  top1: {
    flex: 0.79,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 0.4,
    alignItems: 'center',
  },
  bottom1: {
    flex: 0.2,
    alignItems: 'center',
  },
  bottom2: {
    flex: 0.2,
    alignItems: 'center',
  },
  bottom3: {
    flex: 0.21,
    alignItems: 'center',
  },
  text1: {
    fontSize: '17@ms',
    color: colors.textColor,
    marginTop: '71@vs',
  },
  text2: {
    fontSize: '31@ms',
    fontWeight: 'bold',
    color: colors.textColor,
    marginTop: '16@vs',
  },
  text3: {
    fontSize: '16@ms',
    color: colors.textColor,
    marginTop: '3@vs',
  },
  text4: {
    fontSize: '15@ms',
    color: '#034B6C',
    marginTop: '4@vs',
  },
  text5: {
    fontSize: '60@ms',
    color: colors.white,
  },
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  elevation: 5,
});
