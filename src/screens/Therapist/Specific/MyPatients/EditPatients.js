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
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ms, s, vs} from 'react-native-size-matters';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const EditPatients = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topView}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.Text1, {color: colors.PrimaryColor}]}>
              {reverseText('עצוב')}
            </Text>
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('םיריהמ רשק ישנא')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MedicalStaff')}>
              <Text style={[styles.Text1, {color: '#F41032'}]}>
                {reverseText('לטבל')}
              </Text>
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

            <Card
              style={{
                height: vs(220),
                width: '90%',
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(15),
                bottom: 5,
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
                      <Pressable
                        onPress={() => navigation.navigate('EditPatientTwo')}>
                        <IconMaterial
                          style={{marginTop: vs(25)}}
                          name="pencil"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                      </Pressable>
                      <IconIon
                        style={{marginTop: vs(12)}}
                        name="ios-trash"
                        size={s(24)}
                        color={'#F41032'}
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
                      <Pressable
                        onPress={() => navigation.navigate('EditPatientTwo')}>
                        <IconMaterial
                          style={{marginTop: vs(25)}}
                          name="pencil"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                      </Pressable>
                      <IconIon
                        style={{marginTop: vs(12)}}
                        name="ios-trash"
                        size={s(24)}
                        color={'#F41032'}
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
                      <Pressable
                        onPress={() => navigation.navigate('EditPatientTwo')}>
                        <IconMaterial
                          style={{marginTop: vs(25)}}
                          name="pencil"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                      </Pressable>
                      <IconIon
                        style={{marginTop: vs(12)}}
                        name="ios-trash"
                        size={s(24)}
                        color={'#F41032'}
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
                      <Pressable
                        onPress={() => navigation.navigate('EditPatientTwo')}>
                        <IconMaterial
                          style={{marginTop: vs(25)}}
                          name="pencil"
                          size={s(24)}
                          color={colors.PrimaryColor}
                        />
                      </Pressable>
                      <IconIon
                        style={{marginTop: vs(12)}}
                        name="ios-trash"
                        size={s(24)}
                        color={'#F41032'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default EditPatients;
