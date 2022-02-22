import {ScaledSheet} from 'react-native-size-matters';

import colors from '../../../../theme/colors';

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
});
