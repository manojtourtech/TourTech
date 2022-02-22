import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import colors from '../../../../theme/colors';
import styles from './Styles';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log('Add new contact: ', s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const AddNew = ({navigation}) => {
  useEffect(() => {
    createTable();
  }, []);

  const [getContacts, setGetContacts] = useState([]);
  // const [data, setData] = useState({
  //     firstName,
  //     lastName,
  //     roleId,
  //     deptId,
  //     phoneNo,
  //     email,
  //     comments,
  //     picturePath
  // })

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS' +
          'Users' +
          '(ID, INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, AGE INTEGER);',
      );
    });
  };

  // const setData = async () => {
  //     try {
  //         await db.transaction(async (tx) => {
  //             await tx.executeSql(
  //                 "INSERT INTO USERS (Name, Age) VALUES (?,?)"
  //                 [
  //                 "Numan",
  //                 30
  //                 ]
  //             )
  //         })
  //     } catch (error) {

  //     }
  // }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.Text1, {color: colors.PrimaryColor}]}>
              {reverseText('הרימש')}
            </Text>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text11}>{reverseText('שדח רשק שיא')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Contacts');
              }}>
              <Text style={[styles.Text1, {color: '#F41032'}]}>
                {reverseText('לטבל')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: vs(10),
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#AEBDC1',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <IconFont name="user" size={75} color={colors.BackgroundColor} />
            </View>
            <Text style={styles.Text12}>{reverseText('הנומת ףסוה')}</Text>

            <Text style={styles.Text13}>{reverseText('יטרפ םש')}</Text>
            <TextInput
              placeholder={reverseText('יטרפ םש ןזה')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('החפשמ םש')}
            </Text>
            <TextInput
              placeholder={reverseText('החפשמ םש ןזהיטרפ םש ןזה')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('דיקפת תרדגה')}
            </Text>
            <TextInput
              placeholder={reverseText('דיקפת םש ןזה')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('הקלחמ')}
            </Text>
            <TextInput
              placeholder={reverseText('הקלחמל סנכיהל')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('ןופלט רפסמ')}
            </Text>
            <TextInput
              placeholder={reverseText('ןופלטה רפסמ תא סינכת')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('ליימיא')}
            </Text>
            <TextInput
              placeholder={reverseText('ל"אוד תבותכ ןזה')}
              style={styles.textInput}></TextInput>
            <Text style={[styles.Text13, {marginTop: vs(8)}]}>
              {reverseText('תורעה')}
            </Text>
            <TextInput
              placeholder={reverseText('הרעה ףסוה')}
              style={styles.textInput}></TextInput>

            <TouchableOpacity
              onPress={() => newContact()}
              style={[styles.button1, {backgroundColor: colors.PrimaryColor}]}>
              <Text style={styles.Text14}>{reverseText('הרימש')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddNew;
