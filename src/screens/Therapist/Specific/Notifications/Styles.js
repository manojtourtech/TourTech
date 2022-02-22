import colors from '../../../../theme/colors';
import {ScaledSheet, vs} from 'react-native-size-matters';

export default styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  inner: {
    flex: 1,
  },
  top: {
    flex: 0.15,
  },
  list: {
    flex: 0.72,
  },
  topView: {
    height: '50@vs',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.BackgroundColor,
    elevation: 4,
  },
  topView1: {
    height: '45@vs',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BackgroundColor,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    elevation: 4,
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
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.textColor2,
  },
  Text2: {
    fontSize: '14@ms',
    fontWeight: 'bold',
    color: colors.BackgroundColor,
  },
  Text3: {
    fontSize: '17@ms',
    color: colors.PrimaryColor,
  },
  Text4: {
    fontSize: '24@ms',
    color: colors.PrimaryColor,
    marginRight: '15@s',
  },
  Text5: {
    fontSize: '19@ms',
    color: colors.BackgroundColor,
  },
  Text6: {
    fontSize: '17@ms',
    marginTop: '6@vs',
    textAlign: 'right',
    color: colors.textColor,
  },

  Text7: {
    fontSize: '14@ms',
    marginTop: '6@vs',
    alignSelf: 'flex-end',
    color: '#68777B',
  },

  Text9: {
    fontSize: '17@ms',
    color: colors.BackgroundColor,
  },
  Text8: {
    fontSize: '20@ms',
    fontWeight: 'bold',
    paddingRight: '12@s',
    color: colors.textColor2,
  },
  date: {
    width: '170@s',
    height: '29@vs',
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A7B9D01A',
  },
  button: {
    height: vs(47),
    width: '94%',
    borderRadius: 10,
    alignSelf: 'center',
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PrimaryColor,
  },

  card1: {
    height: 343,
    marginBottom: '5@vs',
    elevation: 2,
    borderRadius: 8,
    width: '94%',
    marginTop: '15@vs',
    alignSelf: 'center',
  },
  Avatar: {
    marginTop: '9@vs',
  },
});
