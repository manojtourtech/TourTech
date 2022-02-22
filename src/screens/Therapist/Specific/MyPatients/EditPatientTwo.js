import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';

import IconZ from 'react-native-vector-icons/Zocial';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFather from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const EditPatientTwo = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('רשק שיא רחב')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditPatients')}>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconAnt name="right" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main------------------------------------------------------- */}
        <View style={{marginTop: 22}}>
          <View style={styles.textInput}>
            <View
              style={{
                flex: 0.14,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconFontisto
                name="search"
                size={s(22)}
                color={colors.PrimaryColor}
              />
            </View>
            <View style={{flex: 0.86, justifyContent: 'center'}}>
              <TextInput
                placeholder={reverseText('רשק ישנא יפל שפח')}
                style={{fontSize: ms(18), paddingRight: s(10)}}></TextInput>
            </View>
          </View>

          {/* LIST--------------------------------------------------------- */}

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* First------------------------------------------ */}
            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* 
                                <RadioButton
                                    color={colors.PrimaryColor}
                                    size={100}
                                    status={checked === true ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(!checked)}
                                /> */}
                <View
                  style={{
                    height: s(30),
                    width: s(30),
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: colors.borderColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </View>

              <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(19), color: colors.textColor2}}>
                  {reverseText('גניסיפידא ררוטקסנוק')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(55)}
                />
                {/* <Badge
                                    badgeStyle={{ width: 25, height: 25, borderRadius: 25 }}
                                    value="1"
                                    status="error"
                                    containerStyle={styles.badgeStyle}
                                /> */}
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Second----------------------------------------------- */}
            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* 
                                <RadioButton
                                    color={colors.PrimaryColor}
                                    size={100}
                                    status={checked === true ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked(!checked)}
                                /> */}
                <View
                  style={{
                    height: s(30),
                    width: s(30),
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: colors.borderColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconFontisto
                    name="ellipse"
                    size={s(20)}
                    color={colors.PrimaryColor}
                  />
                </View>
              </View>

              <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(19), color: colors.textColor2}}>
                  {reverseText('גניסיפידא ררוטקסנוק')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(55)}
                />
                <View
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#10B01C',
                    position: 'absolute',
                    top: vs(30),
                    right: s(-8),
                  }}>
                  <IconFather name="check" size={20} color={'#ffffff'} />
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Third--------------------------------------------------- */}

            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: s(30),
                    width: s(30),
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: colors.borderColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </View>

              <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(19), color: colors.textColor2}}>
                  {reverseText('גניסיפידא ררוטקסנוק')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(55)}
                />
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Fourth------------------------------------------- */}

            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: s(30),
                    width: s(30),
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: colors.borderColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </View>

              <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(19), color: colors.textColor2}}>
                  {reverseText('גניסיפידא ררוטקסנוק')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(55)}
                />
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>

            {/* Fifth--------------------------------------------- */}

            <View
              style={{
                height: vs(80),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: s(30),
                    width: s(30),
                    borderRadius: 30,
                    borderWidth: 2,
                    borderColor: colors.borderColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </View>

              <View style={{flex: 0.6, justifyContent: 'center'}}>
                <Text style={{fontSize: ms(19), color: colors.textColor2}}>
                  {reverseText('גניסיפידא ררוטקסנוק')}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    height: s(55),
                    width: s(55),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 55,
                    backgroundColor: '#23973D',
                  }}>
                  <Text style={{fontSize: 22, color: '#ffffff'}}>
                    {reverseText('אק')}
                  </Text>
                </View>
                {/* <Badge
                                    badgeStyle={{ width: 25, height: 25, borderRadius: 25 }}
                                    value="1"
                                    status="error"
                                    containerStyle={styles.badgeStyle}
                                /> */}
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                width: '90%',
                alignSelf: 'center',
              }}></View>
          </ScrollView>
          {/* LISTVIEW */}

          <TouchableOpacity
            onPress={() => navigation.navigate('EditPatients')}
            style={{
              height: vs(45),
              width: '90%',
              borderRadius: 10,
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: vs(25),
              backgroundColor: colors.PrimaryColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: ms(18), color: colors.BackgroundColor}}>
              {reverseText('הרימש')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditPatientTwo;
