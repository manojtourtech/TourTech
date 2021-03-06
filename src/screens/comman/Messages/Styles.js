import {ScaledSheet} from 'react-native-size-matters';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../theme/colors';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.white,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
  },
  topView1: {
    height: '65@vs',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: colors.white,
  },
  topView2: {
    height: '75@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  topView3: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatView: {
    flex: 1,
  },
  bottomView: {
    height: '100@vs',
    width: '100%',
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
  },
  modalBottomView: {
    height: '75@vs',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '110@vs',
  },
  InputBox: {
    height: '50@vs',
    width: '92%',
    flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: colors.borderColor,
  },
  InputBox1: {
    height: '40@vs',
    width: '75%',
    borderWidth: 0.7,
    borderRadius: 45,
    borderColor: colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },
  Input: {
    fontSize: '18@ms',
    color: colors.primary,
    paddingRight: '15@s',
    flex: 1,
    marginHorizontal: 10,
  },

  listView: {
    height: '80@vs',
    width: '100%',
    flexDirection: 'row',
  },
  listView1: {
    height: '65@vs',
    width: '100%',
    flexDirection: 'row',
  },
  Text1: {
    fontSize: '17@ms',
    textAlign: 'left',
    fontWeight: 'bold',
    writingDirection: 'rtl',
    textAlign: 'right',
    color: colors.textColor2,
  },
  Text2: {
    fontSize: '19@ms',
    fontWeight: 'bold',
    color: colors.textColor2,
  },
  Text3: {
    fontSize: '15@ms',
    paddingRight: '6@s',
    color: colors.textColor,
  },
  Text4: {
    fontSize: '15@ms',
    color: '#68777B',
  },
  Text5: {
    fontSize: '16@ms',
    color: colors.white,
  },
  Text6: {
    fontSize: '16@ms',
    // color: colors.textColor
  },
  Text7: {
    fontSize: '18@ms',
    color: colors.textColor,
  },
  Text8: {
    fontSize: '16@ms',
    color: '#68777B',
    marginTop: '5@vs',
  },
  Text9: {
    fontSize: '14@ms',
    color: colors.textColor,
    marginTop: '5@vs',
  },
  Text10: {
    fontSize: '16@ms',
    color: colors.primary,
  },
  Avatar: {
    right: '5@vs',
  },
  badgeStyle: {
    position: 'absolute',
    top: '10@vs',
    right: '4@s',
  },
  badgeStyle2: {
    position: 'absolute',
    top: '-5@vs',
    left: '22@s',
  },
  Attachement: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg1: {
    height: '50@vs',
    width: '200@s',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  msg2: {
    height: '70@vs',
    width: '270@s',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  msg3: {
    height: '110@vs',
    width: '270@s',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  msg4: {
    height: '75@vs',
    width: '270@s',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  msg5: {
    height: '70@vs',
    width: '200@s',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  msg6: {
    height: '70@vs',
    width: '200@s',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
  },

  viewWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '"rgba(0, 0, 0, 0.5)"',
  },
  modalView: {
    height: '80%',
    marginTop: 100,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconContainer: {
    height: vs(44),
    width: s(44),
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EEF4',
    marginHorizontal: 15,
  },
  sendButton: {
    height: vs(42),
    width: s(42),
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    left: s(10),
  },
  bottomView: {
    width: '100%',
    backgroundColor: colors.white,
    bottom: vs(0),
    flexDirection: 'column',
    padding: 10,
  },
  circularView: {
    height: s(33),
    width: s(33),
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animationContainer: {
    backgroundColor: 'grey',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationView: {
    marginLeft: 'auto',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 20,
  },

  phoneModel: {
    flexDirection: 'row',
    backgroundColor: colors.darkGrey,
    height: 100,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modeltext: {
    color: colors.white,
    marginTop: 5,
  },
});
