import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {NavigationScreenProp} from 'react-navigation';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import axios from 'axios';

export {
  React,
  verticalScale,
  scale,
  moderateScale,
  useDispatch,
  useSelector,
  AsyncStorage,
  _,
  useIsFocused,
  useRoute,
  useNavigation,
  RFValue,
  SafeAreaView,
  NavigationContainer,
  SafeAreaProvider,
  Provider,
  axios,
};
