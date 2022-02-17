import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('screen');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  Text1: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    color: colors.textColor2,
  },
  Text2: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginTop: 5,
  },
  Text3: {
    fontSize: RFValue(13),
    marginTop: 24,
    alignSelf: 'center',
    color: colors.textColor,
  },
  Text5: {
    fontSize: RFValue(13),
    marginTop: 30,
    alignSelf: 'center',
    color: colors.textColor,
    textDecorationLine: 'underline',
  },
  Text4: {
    fontSize: RFValue(18),
    color: 'white',
  },
  button: {
    height: 52,
    width: '90%',
    borderRadius: 8,
    marginTop: 40,
    alignSelf: 'center',
    elevation: 4,
    shadowOpacity: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PrimaryColor,
  },
  card: {
    height: 78,
    marginTop: 25,
    elevation: 3,
    borderRadius: 10,
    alignSelf: 'center',
    width: '90%',
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
});
