import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Checkbox} from 'react-native-paper';
import IconFound from 'react-native-vector-icons/Foundation';
import styles from '../Styles';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PatientMedicines = ({navigation}) => {
  const [first, setFirst] = React.useState(false);
  const [second, setSecond] = React.useState(false);
  const [third, setThird] = React.useState(false);
  const [four, setFour] = React.useState(false);
  const [five, setFive] = React.useState(false);
  const [six, setSix] = React.useState(false);

  return (
    <View style={{marginTop: vs(15)}}>
      <View
        style={{
          flexDirection: 'row',
          height: vs(65),
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'column', marginRight: s(8)}}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('הילבט')} 1
            </Text>
            <Text style={{fontSize: ms(16), color: colors.PrimaryColor}}>
              {reverseText('םויה')} ,10:00
            </Text>
          </View>
          <Checkbox
            style={{marginRight: s(25)}}
            status={second ? 'checked' : 'unchecked'}
            color={colors.PrimaryColor}
            onPress={() => {
              setSecond(!second);
            }}
          />
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
          height: vs(65),
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'column', marginRight: s(8)}}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('הילבט')} 1
            </Text>
            <Text style={{fontSize: ms(16), color: colors.PrimaryColor}}>
              {reverseText('םויה')} ,12:00
            </Text>
          </View>
          <Checkbox
            style={{marginRight: s(25)}}
            status={third ? 'checked' : 'unchecked'}
            color={colors.PrimaryColor}
            onPress={() => {
              setThird(!third);
            }}
          />
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
          height: vs(65),
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'column', marginRight: s(8)}}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('הילבט')} 1
            </Text>
            <Text style={{fontSize: ms(16), color: colors.PrimaryColor}}>
              {reverseText('םויה')} ,12:00
            </Text>
          </View>
          <Checkbox
            style={{marginRight: s(25)}}
            status={four ? 'checked' : 'unchecked'}
            color={colors.PrimaryColor}
            onPress={() => {
              setFour(!four);
            }}
          />
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
          height: vs(65),
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'column', marginRight: s(8)}}>
            <Text style={{fontSize: ms(18), color: colors.textColor}}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('הילבט')} 1
            </Text>
            <Text style={{fontSize: ms(16), color: colors.PrimaryColor}}>
              {reverseText('םויה')}, 18:00
            </Text>
          </View>
          <Checkbox
            style={{marginRight: s(25)}}
            status={five ? 'checked' : 'unchecked'}
            color={colors.PrimaryColor}
            onPress={() => {
              setFive(!five);
            }}
          />
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
          height: vs(65),
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View style={{flexDirection: 'column', marginRight: s(8)}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                fontSize: ms(18),
                color: '#68777B',
              }}>
              {reverseText('םוספיא םוספיא םרול')}
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('הילבט')} 1
            </Text>
            <Text style={{fontSize: ms(16), color: '#68777B'}}>
              {reverseText('םויה')} ,8:00
            </Text>
          </View>
          <Checkbox
            style={{marginRight: s(25)}}
            status={six ? 'checked' : 'unchecked'}
            color={colors.PrimaryColor}
            onPress={() => {
              setSix(!six);
            }}
          />
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
      {/* Button----------------------------------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate('PatientAllMedicines')}
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

export default PatientMedicines;
