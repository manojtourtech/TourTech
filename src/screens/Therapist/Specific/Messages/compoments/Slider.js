import React from 'react';
import Slider from '@react-native-community/slider';

const CustomSlider = ({
  maximumValue,
  minimumValue,
  value,
  onValueChange,
  minimumTrackTintColor,
  maximumTrackTintColor,
  thumbTintColor,
}) => {
  return (
    <Slider
      style={{
        width: 180,
        opacity: 1,
        paddingVertical: 14,
      }}
      disabled={false}
      maximumValue={maximumValue}
      minimumValue={minimumValue}
      minimumTrackTintColor={minimumTrackTintColor || '#fff'}
      maximumTrackTintColor={maximumTrackTintColor || '#fff'}
      thumbTintColor={thumbTintColor || '#fff'}
      step={1}
      value={value}
      onValueChange={onValueChange ? onValueChange : () => {}}
    />
  );
};

export default CustomSlider;
