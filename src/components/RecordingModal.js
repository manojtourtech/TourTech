import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../theme/colors';

const {width} = Dimensions.get('screen');

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const RecordingModal = ({closeModal, visible}) => {
  // const [list, setList] = useState(listData)
  // const searchFilterFunction = text => {
  //     let arrayholder = listData;
  //     const newData = arrayholder.filter(item => {
  //         const itemData = `${item.name}`;

  //         const textData = text.toUpperCase();

  //         return itemData.indexOf(textData) > -1;
  //     });

  //     setList(newData)
  // };

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         select: false,
  //         itemIndex: null
  //     }
  // }

  // PressedItem = (itemId) => {
  //     console.log(itemId)
  //     this.setState({ select: itemId })
  // }

  return (
    <View style={styles.viewWrapper}>
      <View style={styles.modalView}>
        <Text style={styles.Text1}>{reverseText('תילוק העדוה ףסוה')}</Text>
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: '#F6F8FA',
            marginTop: 150,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 25,
          }}>
          <IconFontisto name="ellipse" color="#F41032" size={18} />
          <Text style={styles.Text2}>{'00:15:30'}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 25,
          }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: 55,
              borderRadius: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.white,
              elevation: 3,
            }}>
            <IconEnt
              name="controller-play"
              color={colors.textColor2}
              size={35}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E6EEF4',
              marginLeft: 70,
            }}>
            <IconAnt name="pause" color={colors.textColor2} size={45} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={closeModal}
            style={{
              height: 55,
              width: 55,
              borderRadius: 55,
              backgroundColor: colors.white,
              elevation: 3,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 70,
            }}>
            <IconAnt name="close" color={colors.textColor2} size={30} />
          </TouchableOpacity>
        </View>
        {/* Main------------------------------------------------------- */}
      </View>
    </View>
  );
};

export default RecordingModal;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    elevation: 5,
    height: '75%',
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  topView: {
    height: vs(50),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
  },
  Text1: {
    fontSize: ms(17),
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 20,
  },
  Text2: {
    fontSize: ms(25),
    fontWeight: 'bold',
    color: colors.textColor2,
    alignSelf: 'center',
    left: 15,
  },
  textInput: {
    height: 60,
    width: '94%',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: vs(7),
    fontSize: ms(17),
    color: '#46B4D7',
    paddingRight: s(12),
  },
});
