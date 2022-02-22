import {Dimensions} from 'react-native';
import colors from '../../../../../theme/colors';
import {ScaledSheet, vs} from 'react-native-size-matters';
const {width} = Dimensions.get('screen');

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BackgroundColor,
  },
  inner: {
    flex: 0.88,
    // backgroundColor: 'red',
    backgroundColor: colors.BackgroundColor,
  },
  topView: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.BackgroundColor,
    elevation: 4,
  },
  topView2: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.BackgroundColor,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    flex: 0.46,
    paddingBottom: 7,
  },
  bottom: {
    flex: 0.25,
  },
  Text1: {
    fontSize: '17@ms',
    fontWeight: 'bold',
    color: colors.textColor2,
    direction: 'rtl',
  },
  Text2: {
    fontSize: '19@ms',
    fontWeight: 'bold',
  },
  Text3: {
    fontSize: '17@ms',
    color: colors.BackgroundColor,
  },
  Text4: {
    fontSize: '19@ms',
    fontWeight: 'bold',
    marginTop: '15@vs',
    color: colors.PrimaryColor,
  },
  Text5: {
    fontSize: '15@ms',
    marginTop: '5@vs',
    color: '#68777B',
  },
  Text6: {
    fontSize: '16@ms',
    marginTop: '8@vs',
    color: colors.textColor,
    writingDirection: 'rtl',
  },
  Text7: {
    fontSize: '16@ms',
    marginTop: '6@vs',
    color: '#68777B',
  },
  Text8: {
    fontSize: '17@ms',
    marginTop: '6@vs',
    color: colors.PrimaryColor,
  },

  Text9: {
    fontSize: '14@ms',
    marginTop: '6@vs',
    alignSelf: 'flex-end',
    color: '#68777B',
  },
  text10: {
    fontSize: '13@ms',
    marginTop: '4@vs',
    color: colors.textColor,
  },
  text11: {
    fontSize: '19@ms',
    fontWeight: 'bold',
    color: colors.PrimaryColor,
  },
  Text12: {
    fontSize: '17@ms',
    color: colors.PrimaryColor,
    marginTop: '8@vs',
  },
  Text13: {
    fontSize: '15@ms',
    color: colors.textColor,
    alignSelf: 'flex-end',
    marginRight: '14@s',
  },
  Text14: {
    fontSize: '18@ms',
    color: colors.BackgroundColor,
  },
  Text15: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    color: colors.PrimaryColor,
    textAlign: 'left',
  },
  button3: {
    height: 45,
    width: '94%',
    borderRadius: 10,
    marginTop: '25@vs',
    alignSelf: 'center',
    elevation: 2,
    flexDirection: 'row',
    backgroundColor: colors.BackgroundColor,
    borderWidth: 0.7,
    borderColor: colors.borderColor,
  },
  button1: {
    height: 45,
    width: '94%',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: '30@vs',
    alignSelf: 'center',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5@vs',
    backgroundColor: '#F99E4B',
  },
  button2: {
    height: 65,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 2,
    flexDirection: 'row-reverse',
    backgroundColor: colors.BackgroundColor,
    borderWidth: 0.7,
    borderColor: colors.borderColor,
  },
  toggleView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Avatar: {
    marginTop: '9@vs',
  },
});
