import {ScaledSheet} from 'react-native-size-matters';
import {RFValue} from 'react-native-responsive-fontsize';

import colors from '../../../../theme/colors';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top: {
    flex: 0.09,
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
  },
  mid: {
    flex: 0.15,
    flexDirection: 'row',
  },
  bottom: {
    flex: 0.76,
  },
  bottom1: {
    flex: 0.85,
  },

  Text1: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    color: colors.textColor2,
  },
  Text2: {
    fontWeight: 'bold',
    fontSize: '20@ms',
    color: colors.textColor,
    right: '5@ms',
  },
  Text3: {
    fontSize: '16@ms',
    color: '#68777B',
    right: '5@ms',
  },
  Text4: {
    fontSize: '17@ms',
    fontWeight: 'bold',
    right: '17@ms',
    color: colors.textColor,
  },
  Text5: {
    fontSize: '17@ms',
    color: '#F41032',
  },
  Text6: {
    fontSize: '19@ms',
    color: colors.primary,
    marginTop: '10@vs',
  },
  textInput: {
    height: 56,
    width: '94%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.7,
    borderColor: colors.borderColor,
    borderRadius: 10,
    marginTop: '10@vs',
    fontSize: '16@ms',
  },
  textInputdata: {
    textAlign: 'right',
    fontSize: '16@ms',
    paddingRight: '14@ms',
  },
  button1: {
    height: 49,
    width: '94%',
    borderRadius: 10,
    marginTop: '25@vs',
    borderWidth: 0.7,
    borderColor: colors.borderColor,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  MenuButton: {
    height: '38@vs',
    width: '38@s',
    backgroundColor: '#E6EEF4',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
