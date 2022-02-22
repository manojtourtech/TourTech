import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScaledSheet, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEF4',
  },
  top: {
    flex: 0.55,
    alignItems: 'center',
  },
  bottom1: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom2: {
    flex: 0.15,
    alignItems: 'center',
  },
  text1: {
    fontSize: '17@ms',
    color: colors.textColor,
    marginTop: '80@vs',
  },
  text2: {
    fontSize: '32@ms',
    fontWeight: 'bold',
    color: colors.textColor,
    marginTop: '17@vs',
  },
  text3: {
    fontSize: '17@ms',
    color: colors.textColor,
    marginTop: '2@vs',
  },
  text4: {
    fontSize: '15@ms',
    color: colors.textColor2,
    marginTop: '5@vs',
  },
  text5: {
    fontSize: '22@ms',
    fontWeight: 'bold',
    color: colors.textColor,
    marginTop: '34@vs',
  },
  text6: {
    fontSize: '15@ms',
    color: colors.textColor2,
    marginTop: 10,
  },
  text7: {
    fontSize: '15@ms',
    color: '#68777B',
    marginTop: vs(4),
  },
  text8: {
    fontSize: '15@ms',
    color: colors.primary,
    marginTop: vs(4),
  },
  text9: {
    fontSize: RFValue(18),
    color: colors.primary,
  },
  button: {
    width: '90%',
    height: '60@vs',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F41032',
  },
  verticleLine: {
    height: 145,
    width: 0.9,
    top: 30,
    marginLeft: 45,
    backgroundColor: colors.borderColor,
  },
  verticleLine2: {
    height: '145@vs',
    width: '0.9@s',
    top: vs(15),
    marginLeft: 45,
    backgroundColor: colors.borderColor,
  },
  horizontalLine: {
    height: '0.9@vs',
    width: '275@s',
    top: vs(5),
    backgroundColor: colors.borderColor,
  },
});
