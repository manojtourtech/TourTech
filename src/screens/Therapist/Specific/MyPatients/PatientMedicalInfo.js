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
import IconFont from 'react-native-vector-icons/FontAwesome';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const PatientMedicalInfo = ({navigation}) => {
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
                <IconFont name="edit" size={s(20)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('יאופר קית')}</Text>
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

            <Card
              style={{
                height: vs(690),
                width: '94%',
                elevation: 3,
                marginBottom: vs(5),
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: vs(15),
              }}>
              <View style={{marginTop: vs(15)}}>
                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('הדיל ךיראת')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    02 {reverseText('ראורבפב')} 1956
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('ליג')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(18),
                      color: '#000000',
                      alignSelf: 'flex-end',
                    }}>
                    65
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('רשק יטרפ')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(18),
                      color: '#000000',
                      alignSelf: 'flex-end',
                    }}>
                    050 123 34 56
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('ןוחבא')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    {reverseText('ררוטקסנוק ,טמא טיס רולוד םוספיא םרול')}
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('םד תצובק')}
                  </Text>
                  <Text
                    style={{
                      fontSize: ms(18),
                      color: '#000000',
                      alignSelf: 'flex-end',
                    }}>
                    0 {reverseText('יבויח')} (+ VE)
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('הבוג')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    176 {reverseText('מ"מ')}
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('לקשמ')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    92 {reverseText('ג"ק')}
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('תויגרלא')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    {reverseText('תירפוג')}
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('םייק בצמ')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    {reverseText('תרכוס ,הובג םד ץחל ,םד ץחל רתי')}
                  </Text>
                </View>
                {/* Horizontal Line--------------------------------------------- */}
                <View
                  style={{
                    marginTop: vs(7),
                    borderWidth: 0.8,
                    borderColor: '#D1D9DB',
                    width: '92%',
                    alignSelf: 'center',
                  }}></View>

                <View
                  style={{
                    flexDirection: 'column',
                    height: vs(50),
                    width: '92%',
                    alignSelf: 'center',
                    marginTop: vs(10),
                  }}>
                  <Text style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                    {reverseText('תילארודצורפ הירוטסיה')}
                  </Text>
                  <Text style={{fontSize: ms(18), color: '#000000'}}>
                    {reverseText('הובג םד ץחל ,םד ץחל רתי')}
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PatientMedicalInfo;
