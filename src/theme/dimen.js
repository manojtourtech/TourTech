import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const vw = widthPercentage => {
  return deviceWidth * (widthPercentage / 100);
};

export const vh = heightPercentage => {
  return deviceHeight * (heightPercentage / 100);
};
