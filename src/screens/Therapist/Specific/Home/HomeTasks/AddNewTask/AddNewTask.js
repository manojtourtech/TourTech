import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Avatar, Card, Checkbox} from 'react-native-paper';
import colors from '../../../../../../theme/colors';
import styles from './Styles';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {s, vs, ms} from 'react-native-size-matters';

function reverseText(s) {
  console.log('Add new contact: ', s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const AddNewTask = ({navigation}) => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <Text style={styles.Text1}>{'הוסף משימה חדשה'}</Text>
        </View>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginTop: vs(10),
            }}>
            <TextInput
              placeholder={reverseText('תַאֲרִיך')}
              style={styles.textInput}></TextInput>

            <TextInput
              placeholder={reverseText('זְמַן')}
              style={[styles.textInput, {marginTop: vs(20)}]}></TextInput>

            <TextInput
              placeholder={reverseText('תיאור')}
              style={[styles.textInput, {marginTop: vs(20)}]}></TextInput>

            <Text style={[styles.Text1, {marginTop: vs(20)}]}>
              {'בחר מטופלים'}
            </Text>

            <View style={{flexDirection: 'row-reverse', marginTop: 20}}>
              <Checkbox
                status={first ? 'checked' : 'unchecked'}
                color={colors.PrimaryColor}
                onPress={() => {
                  setFirst(!first);
                }}
              />
              <Text style={styles.Text2}>{'נומן'}</Text>
            </View>

            <View style={{flexDirection: 'row-reverse', marginTop: 20}}>
              <Checkbox
                status={second ? 'checked' : 'unchecked'}
                color={colors.PrimaryColor}
                onPress={() => {
                  setSecond(!second);
                }}
              />
              <Text style={styles.Text2}>{'עליה'}</Text>
            </View>

            <View style={{flexDirection: 'row-reverse', marginTop: 20}}>
              <Checkbox
                status={third ? 'checked' : 'unchecked'}
                color={colors.PrimaryColor}
                onPress={() => {
                  setThird(!third);
                }}
              />
              <Text style={styles.Text2}>{'קינזה'}</Text>
            </View>

            <TouchableOpacity
              style={[
                styles.addButton,
                {backgroundColor: colors.PrimaryColor},
              ]}>
              <Text style={styles.Text14}>{reverseText('להציל')}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddNewTask;
