import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import colors from '../../../../theme/colors';
import styles from './Styles';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const MedicalStaff = ({navigation}) => {
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
            <Text style={styles.Text1}>{reverseText('שפנל אפרמ תווצ')}</Text>
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

        {/* CARDS ------------------------------------- */}
        {/* --------------------------------------------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: vs(22)}}>
            <Text
              style={{
                fontSize: ms(17),
                fontWeight: 'bold',
                marginRight: s(15),
                color: colors.PrimaryColor,
              }}>
              {reverseText('לפוטמה לש םיריהמה רשקה ישנא')}
            </Text>
            <Pressable onPress={() => navigation.navigate('EditPatients')}>
              <Card
                style={{
                  height: vs(220),
                  width: '90%',
                  elevation: 3,
                  alignSelf: 'center',
                  marginTop: vs(15),
                }}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 0.18,
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginHorizontal: s(10),
                    }}>
                    <IconIon
                      name="settings-sharp"
                      size={s(22)}
                      color={colors.PrimaryColor}
                    />
                    <Text
                      style={{
                        fontSize: ms(17),
                        fontWeight: 'bold',
                        color: colors.PrimaryColor,
                        left: s(8),
                      }}>
                      {reverseText('ךורעל')}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.82,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.5}}>
                      <View
                        style={{
                          alignItems: 'center',
                          height: '85%',
                          width: '100%',
                          borderRightWidth: 0.7,
                          borderColor: colors.borderColor,
                        }}>
                        <Avatar.Image
                          style={{alignSelf: 'flex-end', marginRight: s(12)}}
                          source={{
                            uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                          }}
                          size={s(52)}
                        />
                        <Text
                          style={{
                            fontSize: ms(15),
                            color: '#68777B',
                            top: vs(8),
                          }}>
                          {reverseText('םרולםוספיא')}
                        </Text>
                        <IconIon
                          style={{marginTop: vs(25)}}
                          name="call"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                        <IconFont
                          style={{marginTop: vs(12)}}
                          name="video-camera"
                          size={s(24)}
                          color={'#23973D'}
                        />
                      </View>
                    </View>
                    <View style={{flex: 0.5}}>
                      <View
                        style={{
                          alignItems: 'center',
                          height: '85%',
                          width: '100%',
                          borderRightWidth: 0.7,
                          borderColor: colors.borderColor,
                        }}>
                        <Avatar.Image
                          style={{alignSelf: 'flex-end', marginRight: s(12)}}
                          source={{
                            uri: 'https://images.unsplash.com/photo-1605108040941-7c762d5ed4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                          }}
                          size={s(52)}
                        />
                        <Text
                          style={{
                            fontSize: ms(15),
                            color: '#68777B',
                            top: vs(8),
                          }}>
                          {reverseText('םרולםוספיא')}
                        </Text>
                        <IconIon
                          style={{marginTop: vs(25)}}
                          name="call"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                        <IconFont
                          style={{marginTop: vs(12)}}
                          name="video-camera"
                          size={s(24)}
                          color={'#23973D'}
                        />
                      </View>
                    </View>
                    <View style={{flex: 0.5}}>
                      <View
                        style={{
                          alignItems: 'center',
                          height: '85%',
                          width: '100%',
                          borderRightWidth: 0.7,
                          borderColor: colors.borderColor,
                        }}>
                        <Avatar.Image
                          style={{alignSelf: 'flex-end', marginRight: s(12)}}
                          source={{
                            uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                          }}
                          size={s(52)}
                        />
                        <Text
                          style={{
                            fontSize: ms(15),
                            color: '#68777B',
                            top: vs(8),
                          }}>
                          {reverseText('םרולםוספיא')}
                        </Text>
                        <IconIon
                          style={{marginTop: vs(25)}}
                          name="call"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                        <IconFont
                          style={{marginTop: vs(12)}}
                          name="video-camera"
                          size={s(24)}
                          color={'#23973D'}
                        />
                      </View>
                    </View>
                    <View style={{flex: 0.5}}>
                      <View
                        style={{
                          alignItems: 'center',
                          height: '85%',
                          width: '100%',
                          borderRightWidth: 0.7,
                          borderColor: colors.borderColor,
                        }}>
                        <Avatar.Image
                          style={{alignSelf: 'flex-end', marginRight: s(12)}}
                          source={{
                            uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                          }}
                          size={s(52)}
                        />
                        <Text
                          style={{
                            fontSize: ms(15),
                            color: '#68777B',
                            top: vs(8),
                          }}>
                          {reverseText('םרולםוספיא')}
                        </Text>
                        <IconIon
                          style={{marginTop: vs(25)}}
                          name="call"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                        <IconFont
                          style={{marginTop: vs(12)}}
                          name="video-camera"
                          size={s(24)}
                          color={'#23973D'}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </Pressable>

            {/* Cards *********************************************************** */}
            <View style={{marginTop: vs(25)}}>
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  marginRight: s(15),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('ישיא אפור')}
              </Text>
              <Card
                style={{
                  height: vs(170),
                  width: '90%',
                  elevation: 2,
                  marginBottom: 4,
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: vs(15),
                }}>
                <View style={{flex: 1}}>
                  <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          right: s(5),
                        }}>
                        {reverseText('גניסיפידא ררוטקסנוק')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          right: s(5),
                        }}>
                        {reverseText('רוטקוד')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#10B01C',
                          right: s(5),
                        }}>
                        {reverseText('ןימז')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 0.5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Incoming')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#6B449C',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconFont
                            name="video-camera"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ואדיו תחיש')}
                      </Text>
                    </View>

                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('IncomingVoip')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#1F61AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconIon
                            name="call"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('תילוק החיש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#2F950B',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconIon
                          name="md-chatbubble-ellipses-sharp"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('העדוה תחילש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#E98830',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconM
                          name="mobile-friendly"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ינופלט גויח')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* TWO----------------------------------- */}

            <View style={{marginTop: vs(15)}}>
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  marginRight: s(15),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('ישיא אפור')}
              </Text>
              <Card
                style={{
                  height: vs(170),
                  width: '90%',
                  elevation: 2,
                  marginBottom: 4,
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: vs(15),
                }}>
                <View style={{flex: 1}}>
                  <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          right: s(5),
                        }}>
                        {reverseText('גניסיפידא ררוטקסנוק')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          right: s(5),
                        }}>
                        {reverseText('רוטקוד')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#10B01C',
                          right: s(5),
                        }}>
                        {reverseText('ןימז')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1605108040941-7c762d5ed4e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 0.5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Incoming')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#6B449C',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconFont
                            name="video-camera"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ואדיו תחיש')}
                      </Text>
                    </View>

                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('IncomingVoip')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#1F61AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconIon
                            name="call"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('תילוק החיש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#2F950B',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconIon
                          name="md-chatbubble-ellipses-sharp"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('העדוה תחילש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#E98830',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconM
                          name="mobile-friendly"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ינופלט גויח')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* THREE -------------------------------- */}

            <View style={{marginTop: vs(15)}}>
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  marginRight: s(15),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('ישיא אפור')}
              </Text>
              <Card
                style={{
                  height: vs(170),
                  width: '90%',
                  elevation: 2,
                  marginBottom: 4,
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: vs(15),
                }}>
                <View style={{flex: 1}}>
                  <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          right: s(5),
                        }}>
                        {reverseText('גניסיפידא ררוטקסנוק')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          right: s(5),
                        }}>
                        {reverseText('רוטקוד')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#F41032',
                          right: s(5),
                        }}>
                        {reverseText('ןימז אל')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1609952542840-df54cfddc3fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 0.5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Incoming')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#6B449C',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconFont
                            name="video-camera"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ואדיו תחיש')}
                      </Text>
                    </View>

                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('IncomingVoip')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#1F61AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconIon
                            name="call"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('תילוק החיש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#2F950B',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconIon
                          name="md-chatbubble-ellipses-sharp"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('העדוה תחילש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#E98830',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconM
                          name="mobile-friendly"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ינופלט גויח')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* FOUR --------------------------------- */}

            <View style={{marginTop: vs(15)}}>
              <Text
                style={{
                  fontSize: ms(17),
                  fontWeight: 'bold',
                  marginRight: s(15),
                  color: colors.PrimaryColor,
                }}>
                {reverseText('ישיא אפור')}
              </Text>
              <Card
                style={{
                  height: vs(170),
                  width: '90%',
                  elevation: 2,
                  marginBottom: 4,
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginTop: vs(15),
                }}>
                <View style={{flex: 1}}>
                  <View style={{flex: 0.5, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          right: s(5),
                        }}>
                        {reverseText('גניסיפידא ררוטקסנוק')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#68777B',
                          right: s(5),
                        }}>
                        {reverseText('רוטקוד')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(16),
                          color: '#10B01C',
                          right: s(5),
                        }}>
                        {reverseText('ןימז')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(52)}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 0.5,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Incoming')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#6B449C',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconFont
                            name="video-camera"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ואדיו תחיש')}
                      </Text>
                    </View>

                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('IncomingVoip')}>
                        <View
                          style={{
                            height: s(38),
                            width: s(38),
                            borderRadius: 38,
                            backgroundColor: '#1F61AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconIon
                            name="call"
                            size={s(18)}
                            color={colors.BackgroundColor}
                          />
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('תילוק החיש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#2F950B',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconIon
                          name="md-chatbubble-ellipses-sharp"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('העדוה תחילש')}
                      </Text>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(38),
                          width: s(38),
                          borderRadius: 38,
                          backgroundColor: '#E98830',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconM
                          name="mobile-friendly"
                          size={s(18)}
                          color={colors.BackgroundColor}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: ms(14),
                          color: colors.textColor2,
                          top: vs(3),
                        }}>
                        {reverseText('ינופלט גויח')}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* FIVE --------------------------------- */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MedicalStaff;
