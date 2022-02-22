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
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const PrescriptionDrugs = ({navigation}) => {
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
            <Text style={styles.Text1}>{reverseText('תויאופר תוקידב')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PatientTasks')}>
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

            {/* CARD-------------------------------------------------- */}

            <View style={{marginTop: vs(20)}}>
              <Card
                style={styles.card10}
                onPress={() => navigation.navigate('PrescriptiondrugsDrugs')}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="left"
                      size={s(25)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.9,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '98%',
                        width: '98%',
                        borderRadius: 10,
                        backgroundColor: colors.BackgroundColor,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                        }}>
                        {reverseText('םוספיא םרול הפורתה םש')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('םוספיא םרול רצק רואית')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: colors.PrimaryColor,
                          marginRight: s(8),
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('ינויב -21 ה דע יאמב -21 המ')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* ------------------------------------------------ */}

            <View style={{marginTop: vs(12)}}>
              <Card
                style={styles.card10}
                onPress={() => navigation.navigate('PrescriptiondrugsDrugs')}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="left"
                      size={s(25)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.9,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '98%',
                        width: '98%',
                        borderRadius: 10,
                        backgroundColor: colors.BackgroundColor,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                        }}>
                        {reverseText('םוספיא םרול הפורתה םש')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('םוספיא םרול רצק רואית')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: colors.PrimaryColor,
                          marginRight: s(8),
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('ינויב -21 ה דע יאמב -21 המ')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* ------------------------------------------------ */}

            <View style={{marginTop: vs(12)}}>
              <Card
                style={styles.card10}
                onPress={() => navigation.navigate('PrescriptiondrugsDrugs')}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="left"
                      size={s(25)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.9,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '98%',
                        width: '98%',
                        borderRadius: 10,
                        backgroundColor: colors.BackgroundColor,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                        }}>
                        {reverseText('םוספיא םרול הפורתה םש')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('םוספיא םרול רצק רואית')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: colors.PrimaryColor,
                          marginRight: s(8),
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('ינויב -21 ה דע יאמב -21 המ')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* ------------------------------------------------ */}

            <View style={{marginTop: vs(12)}}>
              <Card
                style={styles.card10}
                onPress={() => navigation.navigate('PrescriptiondrugsDrugs')}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="left"
                      size={s(25)}
                      color={colors.PrimaryColor}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.9,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '98%',
                        width: '98%',
                        borderRadius: 10,
                        backgroundColor: colors.BackgroundColor,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                        }}>
                        {reverseText('םוספיא םרול הפורתה םש')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('םוספיא םרול רצק רואית')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: colors.PrimaryColor,
                          marginRight: s(8),
                          marginRight: s(15),
                          marginTop: vs(5),
                        }}>
                        {reverseText('ינויב -21 ה דע יאמב -21 המ')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* ------------------------------------------------ */}

            <TouchableOpacity
              onPress={() => navigation.navigate('AddDrugs')}
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
                {reverseText('הפורת ףסוה')}
              </Text>
              <IconAnt
                style={{marginLeft: s(9)}}
                name="plus"
                size={s(20)}
                color={colors.BackgroundColor}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrescriptionDrugs;
