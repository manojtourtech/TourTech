import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from 'react-native';
import colors from '../theme/colors';

const TermCondition = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [enableButton, setEnableButton] = useState(false);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        //Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                setEnableButton(true);
              }
            }}
            scrollEventThrottle={100}>
            <Text style={styles.modalText}>
              A Terms and Conditions agreement acts as legal contracts between
              you (the company) who has the website or mobile app, and the user
              who accesses your website/app. Having a Terms and Conditions
              agreement is completely optional. No laws require you to have one.
              Not even the super-strict and wide-reaching General Data
              Protection Regulation (GDPR). Your Terms and Conditions agreement
              will be uniquely yours. While some clauses are standard and
              commonly seen in pretty much every Terms and Conditions agreement,
              it's up to you to set the rules and guidelines that the user must
              agree to. You can think of your Terms and Conditions agreement as
              the legal agreement where you maintain your rights to exclude
              users from your app in the event that they abuse your app, where
              you maintain your legal rights against potential app abusers, and
              so on. Terms and Conditions agreements are also known as Terms of
              Service or Terms of Use agreements. These terms are
              interchangeable, practically speaking. Check out our Terms and
              Conditions FAQ for more helpful insight into these important
              agreements. A Terms and Conditions agreement acts as legal
              contracts between you (the company) who has the website or mobile
              app, and the user who accesses your website/app. Having a Terms
              and Conditions agreement is completely optional. No laws require
              you to have one. Not even the super-strict and wide-reaching
              General Data Protection Regulation (GDPR). Your Terms and
              Conditions agreement will be uniquely yours. While some clauses
              are standard and commonly seen in pretty much every Terms and
              Conditions agreement, it's up to you to set the rules and
              guidelines that the user must agree to. You can think of your
              Terms and Conditions agreement as the legal agreement where you
              maintain your rights to exclude users from your app in the event
              that they abuse your app, where you maintain your legal rights
              against potential app abusers, and so on. Terms and Conditions
              agreements are also known as Terms of Service or Terms of Use
              agreements. These terms are interchangeable, practically speaking.
              Check out our Terms and Conditions FAQ for more helpful insight
              into these important agreements.
            </Text>
          </ScrollView>

          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Agree</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TermCondition;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: colors.primary,
  },
  buttonClose: {
    backgroundColor: colors.grey,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: colors.black,
  },
});
