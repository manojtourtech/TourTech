import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import colors from '../../../../theme/colors';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const PatientAllMedicines_Med = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.BackgroundColor}}>
      <View style={{flex: 0.88, paddingBottom: vs(9)}}>
        <View style={[styles.topView, {elevation: 4}]}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('הפורת תכירע')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientAllMedicines')}>
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
          <View style={{marginTop: vs(25), alignItems: 'center'}}>
            {/* CARD-------------------------------------------------- */}
            <Card
              onPress={() => navigation.navigate('MedicalStaff')}
              style={{
                height: vs(110),
                width: '90%',
                borderRadius: 10,
                elevation: 3,
                marginBottom: vs(3),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  marginVertical: vs(15),
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      Acamol
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('הפורתה םש')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <View
                  style={{
                    flex: 1,
                    marginTop: vs(7),
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      {reverseText('הייתשל')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('גוס')}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>

            <Card
              style={{
                height: vs(220),
                width: '90%',
                borderRadius: 10,
                elevation: 3,
                marginBottom: vs(3),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  marginVertical: vs(15),
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      {reverseText('םויה')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('הלחתה םוי')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      {reverseText('ימוי')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('תורידת')}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      {reverseText('םויס ךיראת אלל')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('ןמזה ךשמ')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.PrimaryColor,
                      }}>
                      {reverseText('תוארוה ףסוה')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: ms(18), color: colors.textColor}}>
                      {reverseText('תוארוה')}
                    </Text>
                  </View>
                </View>
              </View>
            </Card>

            <Card
              style={{
                height: vs(165),
                width: '90%',
                borderRadius: 10,
                elevation: 3,
                marginBottom: vs(3),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  marginVertical: vs(15),
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      09:00
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        marginRight: s(6),
                      }}>
                      {reverseText('ןונימ')} 01
                    </Text>
                    <IconMaterial
                      name="clock-time-four"
                      size={s(24)}
                      color={'#63A6BB'}
                    />
                  </View>
                </View>
                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>

                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      15:00
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        marginRight: s(6),
                      }}>
                      {reverseText('ןונימ')} 02
                    </Text>
                    <IconMaterial
                      name="clock-time-four"
                      size={s(24)}
                      color={'#63A6BB'}
                    />
                  </View>
                </View>

                <View
                  style={{
                    borderWidth: 0.6,
                    borderColor: '#D1D9DB',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: vs(7),
                  }}></View>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      20:00
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        marginRight: s(6),
                      }}>
                      {reverseText('ןונימ')} 03
                    </Text>
                    <IconMaterial
                      name="clock-time-four"
                      size={s(24)}
                      color={'#63A6BB'}
                    />
                  </View>
                </View>
              </View>
            </Card>

            <Card
              style={{
                height: vs(55),
                width: '90%',
                borderRadius: 10,
                elevation: 3,
                marginBottom: vs(3),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  flex: 1,
                  marginHorizontal: s(15),
                  marginVertical: vs(15),
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    height: vs(35),
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <IconAnt name="left" size={s(25)} color={'#63A6BB'} />
                    <Text
                      style={{
                        fontSize: ms(18),
                        marginLeft: s(15),
                        color: colors.textColor,
                      }}>
                      30 {reverseText('ינפל תוקד')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontSize: ms(18),
                        color: colors.textColor,
                        marginRight: s(6),
                      }}>
                      {reverseText('ריכזהל')}
                    </Text>
                    <IconIon
                      name="notifications-sharp"
                      size={s(25)}
                      color={'#63A6BB'}
                    />
                  </View>
                </View>
              </View>
            </Card>

            <TouchableOpacity
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

            {/* Main-------------------------------------------------------- */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PatientAllMedicines_Med;
