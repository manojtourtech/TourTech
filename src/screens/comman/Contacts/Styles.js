import {Dimensions} from 'react-native';
import {ScaledSheet, s, vs} from 'react-native-size-matters';

import colors from '../../../theme/colors';

const {width} = Dimensions.get('screen');

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  inner: {
    flex: 0.87,
    backgroundColor: '#f9fafc',
  },
  badgeStyle: {
    position: 'absolute',
    top: '-5@vs',
    left: '22@s',
  },
  topView: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
  },
  topView2: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularView: {
    height: s(41),
    width: s(41),
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularView2: {
    height: s(32),
    width: s(32),
    borderRadius: 32,
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
    right: '18@s',
    fontWeight: 'bold',
    color: colors.primary,
    top: '20@vs',
  },
  Text3: {
    fontSize: '17@ms',
    color: colors.white,
  },
  Text4: {
    fontSize: '19@ms',
    fontWeight: 'bold',
    marginTop: '15@vs',
    color: colors.primary,
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
    marginHorizontal: '5@vs',
    color: colors.primary,
  },
  Text9: {
    fontSize: '14@ms',
    marginTop: '6@vs',
    alignSelf: 'flex-end',
    color: '#68777B',
    marginHorizontal: '5@vs',
  },
  text10: {
    fontSize: '13@ms',
    marginTop: '4@vs',
    color: colors.textColor,
  },
  text11: {
    fontSize: '19@ms',
    fontWeight: 'bold',
    color: colors.primary,
  },
  Text12: {
    fontSize: '17@ms',
    color: colors.primary,
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
    color: colors.white,
  },
  Text15: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'left',
  },
  button1: {
    height: vs(47),
    width: '94%',
    borderRadius: 10,
    marginTop: '40@vs',
    alignSelf: 'center',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23973D',
  },
  button2: {
    height: 55,
    width: '94%',
    borderRadius: 10,
    marginTop: '10@vs',
    alignSelf: 'center',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  card1: {
    flex: 1,
    height: vs(172),
    elevation: 2,
    marginVertical: vs(4),
    borderRadius: 10,
    alignSelf: 'center',
    // width: '46.5%',
  },
  card2: {
    height: '140@vs',
    margin: 3,
    elevation: 2,
    borderRadius: 10,
    alignSelf: 'center',
    width: '94%',
  },
  Avatar: {
    marginTop: '9@vs',
  },
  textInput: {
    height: 60,
    width: '94%',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '7@vs',
    fontSize: '17@ms',
    color: '#46B4D7',
    paddingRight: '12@s',
  },
  viewWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '"rgba(0, 0, 0, 0.6)"',
  },
  modalView: {
    height: '80%',
    marginTop: 100,
    width: width * 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
