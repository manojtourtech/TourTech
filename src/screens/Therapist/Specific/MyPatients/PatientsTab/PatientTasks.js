import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import IconFound from 'react-native-vector-icons/Foundation';
import styles from '../Styles';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientTasks = ({nav}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalFile, setModalFile] = React.useState(false);
  const toggleModal = show => {
    setModalVisible(show);
  };

  const FileModal = show => {
    setModalFile(show);
  };
  return (
    <View style={{marginTop: vs(15)}}>
      {/* Info------------------------------- */}

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.Text7}>{reverseText('םוספיא םוספיא םרול')}</Text>
          <Text
            style={{fontSize: ms(16), color: '#F41032', marginRight: s(25)}}>
            {reverseText('םויה')} ,9:00
          </Text>
        </View>
      </View>
      {/* Horizontal Line--------------------------------------------- */}
      <View
        style={{
          marginTop: vs(10),
          borderWidth: 0.8,
          borderColor: '#D1D9DB',
          width: '92%',
          alignSelf: 'center',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
          marginTop: vs(15),
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.Text7}>{reverseText('םוספיא םוספיא םרול')}</Text>
          <Text
            style={{
              fontSize: ms(16),
              color: colors.PrimaryColor,
              marginRight: s(25),
            }}>
            {reverseText('םויה')} ,10:00
          </Text>
        </View>
      </View>
      {/* Horizontal Line--------------------------------------------- */}
      <View
        style={{
          marginTop: vs(10),
          borderWidth: 0.8,
          borderColor: '#D1D9DB',
          width: '92%',
          alignSelf: 'center',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
          marginTop: vs(15),
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.Text7}>{reverseText('םוספיא םוספיא םרול')}</Text>
          <Text
            style={{
              fontSize: ms(16),
              color: colors.PrimaryColor,
              marginRight: s(25),
            }}>
            {reverseText('םויה')} ,12:00
          </Text>
        </View>
      </View>
      {/* Horizontal Line--------------------------------------------- */}
      <View
        style={{
          marginTop: vs(10),
          borderWidth: 0.8,
          borderColor: '#D1D9DB',
          width: '92%',
          alignSelf: 'center',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
          marginTop: vs(15),
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.Text7}>{reverseText('םוספיא םוספיא םרול')}</Text>
          <Text
            style={{
              fontSize: ms(16),
              color: colors.PrimaryColor,
              marginRight: s(25),
            }}>
            {reverseText('םויה')} ,9:00
          </Text>
        </View>
      </View>
      {/* Horizontal Line--------------------------------------------- */}
      <View
        style={{
          marginTop: vs(10),
          borderWidth: 0.8,
          borderColor: '#D1D9DB',
          width: '92%',
          alignSelf: 'center',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
          marginTop: vs(15),
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.Text7}>{reverseText('םוספיא םוספיא םרול')}</Text>
          <Text
            style={{
              fontSize: ms(16),
              color: colors.PrimaryColor,
              marginRight: s(25),
            }}>
            {reverseText('םויה')} ,18:00
          </Text>
        </View>
      </View>
      {/* Horizontal Line--------------------------------------------- */}
      <View
        style={{
          marginTop: vs(10),
          borderWidth: 0.8,
          borderColor: '#D1D9DB',
          width: '92%',
          alignSelf: 'center',
        }}></View>

      <View
        style={{
          flexDirection: 'row',
          height: vs(50),
          width: '90%',
          alignSelf: 'center',
          marginTop: vs(15),
        }}>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <IconFound name="info" size={s(30)} color={'#AEBDC1'} />
        </View>
        <View
          style={{
            flex: 0.85,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textDecorationLine: 'line-through',
              fontSize: ms(18),
              marginRight: s(25),
              color: '#68777B',
            }}>
            {reverseText('םוספיא םוספיא םרול')}
          </Text>
          <Text
            style={{fontSize: ms(16), color: '#68777B', marginRight: s(25)}}>
            {reverseText('םויה')} ,8:00
          </Text>
        </View>
      </View>
      {/* Button----------------------------------------- */}
      <TouchableOpacity
        // onPress={() => navigation.navigate('PatientAllTasks')}
        style={[
          styles.button01,
          {marginTop: vs(25), flexDirection: 'row-reverse'},
        ]}>
        <Text style={{fontSize: ms(16), color: colors.BackgroundColor}}>
          {reverseText('תומישמה לכ תא תוארל')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientTasks;
