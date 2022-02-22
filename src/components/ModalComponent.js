import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {Avatar} from 'react-native-paper';
import 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const ModalComponent = () => {
  return (
    <Modal>
      <View style={{flex: 1}}>
        <Text>Hello!</Text>

        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

export default ModalComponent;
