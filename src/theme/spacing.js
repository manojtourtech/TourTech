import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';

export const gutter = {
  paddingSmallHorizontal: scale(12),
  paddingBaseHorizontal: scale(20),
  paddingLargeHorizontal: scale(24),
  borderRadiusBig: moderateScale(5),
};

export const spacingStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: gutter.paddingLargeHorizontal,
  },
  inputContainer: {
    borderColor: '#ced6d9',
    borderWidth: scale(1),
    borderRadius: moderateScale(4),
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  containerBorderRadiusSmall: {
    borderRadius: moderateScale(4),
  },
  containerBorderRadiusBig: {
    borderRadius: gutter.borderRadiusBig,
  },
  paddingVertical5: {
    paddingVertical: verticalScale(5),
  },
  paddingVertical10: {
    paddingVertical: verticalScale(10),
  },
});
