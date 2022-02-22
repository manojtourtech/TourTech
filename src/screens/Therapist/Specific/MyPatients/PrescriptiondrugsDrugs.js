import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import colors from '../../../../theme/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import IconFont from 'react-native-vector-icons/FontAwesome';
import IconFound from 'react-native-vector-icons/Foundation';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const PrescriptiondrugsDrugs = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.BackgroundColor}}>
      <View style={{flex: 0.88, paddingBottom: vs(9)}}>
        <View style={[styles.topView, {elevation: 4}]}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: s(38),
                width: s(38),
                backgroundColor: '#E6EEF4',
                borderRadius: 38,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconFont name="edit" size={s(20)} color={colors.textColor} />
            </View>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('הפורת')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
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

        {/* Main PART ------------------------------------------------------ */}
        <ScrollView>
          <View style={{marginTop: vs(15)}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={[styles.Text1, {marginRight: s(10)}]}>
                {reverseText('ןהכ םייח לפוטמ')}
              </Text>
              <Avatar.Image
                style={{marginRight: s(12)}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                size={s(60)}
              />
            </View>
          </View>
          {/* CARD-------------------------------------------------- */}

          <View style={{marginTop: vs(15)}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: s(15),
              }}>
              <Text
                style={{
                  fontSize: ms(20),
                  fontWeight: 'bold',
                  marginRight: s(10),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('יללכ עדימ')}
              </Text>
              <IconFound name="info" size={s(27)} color={colors.PrimaryColor} />
            </View>

            <Card
              style={{
                height: vs(330),
                width: '90%',
                borderRadius: 10,
                marginBottom: vs(3),
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  justifyContent: 'center',
                  marginVertical: vs(15),
                }}>
                <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                  {reverseText('הפורתה םש')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  Acamol
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('גוס')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    marginTop: vs(2),
                  }}>
                  {reverseText('הייתשל')}
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('הלחתה םוי')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  12 {reverseText('יאמב')}
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('תורידת')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  {reverseText('ימוי')}
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('ןמזה ךשמ')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  12 {reverseText('ינויב')}
                </Text>
              </View>
            </Card>
          </View>

          {/* Time----------------------------------------- */}

          <View style={{marginTop: vs(15)}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: s(15),
              }}>
              <Text
                style={{
                  fontSize: ms(20),
                  fontWeight: 'bold',
                  marginRight: s(10),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('תופורת תורידת')}
              </Text>
              <IconMaterial
                name="clock-time-four"
                size={s(25)}
                color={colors.PrimaryColor}
              />
            </View>

            <Card
              style={{
                height: vs(195),
                width: '90%',
                borderRadius: 10,
                marginBottom: vs(3),
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  justifyContent: 'center',
                  marginVertical: vs(15),
                }}>
                <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                  {reverseText('ןונימ')} 01
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  09:00
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('ןונימ')} 02
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  15:00
                </Text>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <Text
                  style={{
                    fontSize: ms(18),
                    color: colors.PrimaryColor,
                    marginTop: vs(10),
                  }}>
                  {reverseText('ןונימ')} 03
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  20:00
                </Text>
              </View>
            </Card>
          </View>

          {/* Noti---------------------------------------------------- */}

          <View style={{marginTop: vs(15)}}>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginRight: s(15),
              }}>
              <Text
                style={{
                  fontSize: ms(20),
                  fontWeight: 'bold',
                  marginRight: s(10),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('תופורת תורידת')}
              </Text>
              <IconIon
                name="notifications-sharp"
                size={s(25)}
                color={colors.PrimaryColor}
              />
            </View>

            <Card
              style={{
                height: vs(70),
                width: '90%',
                borderRadius: 10,
                marginBottom: vs(3),
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  justifyContent: 'center',
                  marginVertical: vs(15),
                }}>
                <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                  {reverseText('ריכזהל')}
                </Text>
                <Text
                  style={{
                    fontSize: ms(18),
                    color: '#000000',
                    alignSelf: 'flex-end',
                    marginTop: vs(2),
                  }}>
                  30 {reverseText('ינפל תוקד')}
                </Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrescriptiondrugsDrugs;
