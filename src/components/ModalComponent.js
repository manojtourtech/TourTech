import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../assets/colors/colors'
import 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconFound from 'react-native-vector-icons/Foundation'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import IconEnt from 'react-native-vector-icons/Entypo'

const ModalComponent = () => {
    

    return (
        <Modal>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    );
}

export default ModalComponent;