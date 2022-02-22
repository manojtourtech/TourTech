import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../../theme/colors';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  Text1: {
    fontSize: '32@ms',
    fontWeight: 'bold',
    marginTop: '1000@vs',
    color: colors.textColor,
  },
  Text2: {
    fontSize: 18,
    marginTop: 30,
    color: colors.textColor,
  },
  Text3: {
    fontSize: 15,
    marginTop: 24,
    color: colors.textColor,
  },
  Text5: {
    fontSize: 15,
    marginTop: 30,
    color: colors.textColor,
    textDecorationLine: 'underline',
  },
  Text4: {
    fontSize: 20,
    color: 'white',
  },
  textinput: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  button: {
    height: 52,
    width: '90%',
    borderRadius: 8,
    marginTop: 40,
    elevation: 4,
    shadowOpacity: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
