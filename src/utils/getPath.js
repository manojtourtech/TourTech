import {Platform} from 'react-native';
import RNFS from 'react-native-fs';

export default {
  path: Platform.select({
    ios: `${RNFS.DocumentDirectoryPath}/marpe/photos/`,
    android: `${RNFS.DocumentDirectoryPath}/marpe/files`,
  }),
};
