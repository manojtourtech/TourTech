import colors from '../../../../../theme/colors';
import {ScaledSheet} from 'react-native-size-matters';
export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEF4',
  },
  top: {
    flex: 0.65,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bottom1: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom2: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backimg: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  img: {
    width: '110@s',
    height: '140@vs',
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginBottom: '14@vs',
    marginLeft: '14@s',
  },
  img2: {
    flexDirection: 'row',
    height: '99.5%',
    width: '99.5%',
    margin: 1,
    borderRadius: 8,
  },
  img3: {
    height: '100%',
    width: '50%',
    margin: 1,
    borderRadius: 8,
  },

  text1: {
    fontSize: '14@ms',
    color: '#034B6C',
    marginTop: '4@vs',
  },
  text2: {
    fontSize: '15@ms',
    color: colors.textColor,
  },
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  elevation: 5,
});
