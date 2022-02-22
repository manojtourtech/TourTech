import React, {useState, useRef} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {ms, s, vs} from 'react-native-size-matters';
import IconAnt from 'react-native-vector-icons/AntDesign';

import IconFeather from 'react-native-vector-icons/Feather';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import PatientTasks from './PatientTasks';
import PatientMedicines from './PatientMedicines';
import PatientQueues from './PatientQueues';
import styles from '../Styles';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const PatientsTab = ({navigation}) => {
  const [tab, setTab] = useState(0);
  const switchTab = () => {
    switch (tab) {
      case 0:
        return (
          <PatientTasks nav={() => navigation.navigate('PatientAllTasks')} />
        );
      case 1:
        return <PatientMedicines />;
      case 2:
        return <PatientQueues />;
      default:
        break;
    }
  };
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
            <Text style={styles.Text1}>{reverseText('לפוטמ')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('MyPatients')}>
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

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: vs(50),
                width: '90%',
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: vs(20),
                backgroundColor: colors.BackgroundColor,
                borderRadius: 8,
                elevation: 1,
                borderWidth: 0.7,
                borderColor: colors.borderColor,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Outgoing')}>
                <IconFont name="video-camera" size={s(21)} color={'#6B449C'} />
              </TouchableOpacity>
              <View style={styles.verticleLine}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate('TwoMembersVoice')}>
                <IconIon
                  style={{marginLeft: s(27)}}
                  name="call"
                  size={s(21)}
                  color={'#1F61AE'}
                />
              </TouchableOpacity>
              <View style={styles.verticleLine}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate('MessagePerson')}>
                <IconIon
                  style={{marginLeft: s(27)}}
                  name="md-chatbubble-ellipses-sharp"
                  size={s(22)}
                  color={'#2F950B'}
                />
              </TouchableOpacity>
              <View style={styles.verticleLine}></View>
              <IconM
                style={{marginLeft: s(27)}}
                name="mobile-friendly"
                size={s(21)}
                color={'#E98830'}
              />
            </View>

            <Text style={styles.Text4}>{reverseText('תוירוגטק')}</Text>
            {/* --------------------------------------------------Cards */}

            <View
              style={{
                flexDirection: 'row',
                marginTop: vs(20),
                justifyContent: 'space-evenly',
              }}>
              <Card
                onPress={() => navigation.navigate('PrescriptionDrugs')}
                style={styles.card5}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.25}}>
                    <View style={{flex: 0.55}}></View>
                    <View style={{flex: 0.45, justifyContent: 'center'}}>
                      <IconAnt
                        style={{marginRight: s(20)}}
                        name="left"
                        size={s(24)}
                        color={colors.textColor2}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.75,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: vs(44),
                        width: s(44),
                        borderRadius: 8,
                        backgroundColor: '#FCEDE0',
                        alignSelf: 'flex-end',
                        marginRight: s(10),
                      }}></View>
                    <Text style={[styles.Text5, {marginTop: vs(7)}]}>
                      {reverseText('םשרמ תופורת')}
                    </Text>
                  </View>
                </View>
              </Card>
              {/* ------------------------------------------------ */}
              <Card
                onPress={() => navigation.navigate('PatientMedicalInfo')}
                style={styles.card5}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.25}}>
                    <View style={{flex: 0.55}}></View>
                    <View style={{flex: 0.45, justifyContent: 'center'}}>
                      <IconAnt
                        style={{marginRight: s(20)}}
                        name="left"
                        size={s(24)}
                        color={colors.textColor2}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.75,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: vs(44),
                        width: s(44),
                        borderRadius: 8,
                        backgroundColor: '#E0EFDA',
                        alignSelf: 'flex-end',
                        marginRight: s(10),
                      }}></View>
                    <Text
                      style={[
                        styles.Text5,
                        {marginTop: vs(7), color: '#2F950B'},
                      ]}>
                      {reverseText('יאופר קית')}
                    </Text>
                  </View>
                </View>
              </Card>
            </View>

            {/* ******************************************** */}

            <View
              style={{
                flexDirection: 'row',
                marginTop: vs(15),
                justifyContent: 'space-evenly',
              }}>
              <Card
                onPress={() => navigation.navigate('MedicalTests')}
                style={styles.card5}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.25}}>
                    <View style={{flex: 0.55}}></View>
                    <View style={{flex: 0.45, justifyContent: 'center'}}>
                      <IconAnt
                        style={{marginRight: s(20)}}
                        name="left"
                        size={s(24)}
                        color={colors.textColor2}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.75,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: vs(44),
                        width: s(44),
                        borderRadius: 8,
                        backgroundColor: '#E9E3F0',
                        alignSelf: 'flex-end',
                        marginRight: s(10),
                      }}></View>
                    <Text
                      style={[
                        styles.Text5,
                        {marginTop: vs(7), color: '#6B449C'},
                      ]}>
                      {reverseText('םשרמ תופורת')}
                    </Text>
                  </View>
                </View>
              </Card>
              {/* ------------------------------------------------ */}
              <Card
                onPress={() => navigation.navigate('MedicalStaff')}
                style={styles.card5}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.25}}>
                    <View style={{flex: 0.55}}></View>
                    <View style={{flex: 0.45, justifyContent: 'center'}}>
                      <IconAnt
                        style={{marginRight: s(20)}}
                        name="left"
                        size={s(24)}
                        color={colors.textColor2}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.75,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: vs(44),
                        width: s(44),
                        borderRadius: 8,
                        backgroundColor: '#DDE7F3',
                        alignSelf: 'flex-end',
                        marginRight: s(10),
                      }}></View>
                    <Text
                      style={[
                        styles.Text5,
                        {marginTop: vs(7), color: '#1F61AE'},
                      ]}>
                      {reverseText('תווצ')}
                    </Text>
                  </View>
                </View>
              </Card>
            </View>

            {/* ********************************************** */}

            <Card style={styles.card6}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 0.4,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: vs(44),
                      width: s(44),
                      borderRadius: 8,
                      backgroundColor: colors.PrimaryColor,
                      marginRight: s(10),
                      flexDirection: 'row',
                    }}>
                    <IconMaterial
                      name="emoticon-happy"
                      size={s(19)}
                      color={colors.BackgroundColor}
                    />
                    <IconMaterial
                      name="emoticon-sad"
                      size={s(19)}
                      color={colors.BackgroundColor}
                    />
                  </View>
                  <Text style={[styles.Text5, {color: colors.PrimaryColor}]}>
                    {reverseText('חור בצמ תקידב')}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: vs(20),
                      width: s(20),
                      borderRadius: 20,
                      backgroundColor: '#10B01C',
                      marginRight: s(10),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconFeather
                      name="check"
                      size={s(17)}
                      color={colors.BackgroundColor}
                    />
                  </View>
                  <Text style={styles.Text6}>
                    {reverseText('לומתא - ןורחא קצ')} 17: 00
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PatientMoodReport')}
                    style={styles.button1}>
                    <Text
                      style={{fontSize: ms(16), color: colors.BackgroundColor}}>
                      {reverseText('תובושת תיירוטסיה')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <View
              style={{
                marginTop: vs(15),
                borderWidth: 0.8,
                borderColor: '#D1D9DB',
                width: '92%',
                alignSelf: 'center',
              }}></View>

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row-reverse',
                height: vs(50),
                width: '90%',
                borderWidth: 1,
                borderRadius: 8,
                borderColor: colors.PrimaryColor,
                marginTop: vs(25),
                backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  flex: 1,
                  height: vs(48),
                  borderLeftWidth: tab == 0 ? 0 : 1,
                  borderColor: colors.PrimaryColor,
                  backgroundColor: tab == 0 ? colors.PrimaryColor : '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopRightRadius: 7,
                  borderBottomRightRadius: 7,
                }}>
                <TouchableOpacity onPress={() => setTab(0)}>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: tab == 0 ? '#ffffff' : colors.PrimaryColor,
                    }}>
                    {reverseText('םוי רדס')}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1.5,
                  height: vs(48),
                  borderLeftWidth: tab == 1 ? 0 : 1,
                  borderColor: colors.PrimaryColor,
                  backgroundColor: tab == 1 ? colors.PrimaryColor : '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setTab(1)}>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: tab == 1 ? '#ffffff' : colors.PrimaryColor,
                    }}>
                    {reverseText('תופורת תמישר')}
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  height: vs(48),
                  backgroundColor: tab == 2 ? colors.PrimaryColor : '#ffffff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 7,
                  borderBottomLeftRadius: 7,
                }}>
                <TouchableOpacity onPress={() => setTab(2)}>
                  <Text
                    style={{
                      fontSize: ms(16),
                      color: tab == 2 ? '#ffffff' : colors.PrimaryColor,
                    }}>
                    {reverseText('ילש םירות')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('PatientAllTasks')}
              style={[
                styles.button1,
                {marginTop: vs(25), flexDirection: 'row-reverse'},
              ]}>
              <IconAnt
                style={{marginLeft: s(9)}}
                name="plus"
                size={20}
                color={colors.BackgroundColor}
              />
              <Text style={{fontSize: ms(16), color: colors.BackgroundColor}}>
                {reverseText('שדח ףסוה')}
              </Text>
            </TouchableOpacity>
          </View>
          {switchTab()}
        </ScrollView>
      </View>
    </View>
  );
};
export default PatientsTab;
