import {RFValue} from '@app/shared-import';
import {Platform, StyleSheet} from 'react-native';

import {colors} from './colors';

export const fonts = {
  primary:
    Platform.OS === 'ios'
      ? {
          regular: 'Proxima Nova',
          semiBold: 'ProximaNova-Semibold',
          bold: 'ProximaNova-Bold',
          condensedThin: 'Proxima Nova Alt Condensed',
          condensed: 'ProximaNovaCond-Regular',
          italic: 'ProximaNovaA-RegularIt',
          condensedBold: 'ProximaNovaCond-Bold',
        }
      : {
          regular: 'Proxima-Nova-Regular',
          semiBold: 'Proxima-Nova-SemiBold',
          bold: 'Proxima-Nova-Bold',
          condensedThin: 'Proxima-Nova-Condensed-Thin',
          condensed: 'Proxima-Nova-Condensed-Semibold',
          italic: 'Proxima-Nova-Regular-Italic',
          condensedBold: 'Proxima-Nova-Condensed-Bold',
        },
};

export const typography = StyleSheet.create({
  h1: {
    fontSize: RFValue(24),
    color: colors.text.white,
    fontFamily: fonts.primary.bold,
  },
  h2: {
    fontSize: RFValue(22),
    color: colors.text.white,
    fontFamily: fonts.primary.bold,
  },
  h3: {
    fontSize: RFValue(14),
    color: colors.text.white,
    fontFamily: fonts.primary.semiBold,
  },
  h4: {
    fontSize: RFValue(13),
    color: colors.text.white,
    fontFamily: fonts.primary.semiBold,
  },
  h5: {
    fontSize: RFValue(12),
    color: colors.text.white,
    fontFamily: fonts.primary.bold,
  },
  h6: {
    fontSize: RFValue(9),
    color: colors.text.tertiary,
    fontFamily: fonts.primary.semiBold,
  },
  h7: {
    fontSize: RFValue(16),
    color: colors.text.white,
    fontFamily: fonts.primary.semiBold,
  },

  // with new color
  h1_p: {
    fontSize: RFValue(24),
    color: colors.text.primary,
    fontFamily: fonts.primary.bold,
  },
  h2_p: {
    fontSize: RFValue(22),
    color: colors.text.primary,
    fontFamily: fonts.primary.bold,
  },
});
