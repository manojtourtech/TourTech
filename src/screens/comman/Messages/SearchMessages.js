import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import styles from './Styles';
import {s, vs} from 'react-native-size-matters';
import {Badge} from 'react-native-elements';

import colors from '../../../theme/colors';

function reverseText(s) {
  return s.split('').reverse().join('');
}

const SearchMessages = ({navigation}) => {
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
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
              }}
              size={s(45)}
            />
          </View>
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('תועדוה')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconEnt name="menu" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView1}>
          <View style={styles.InputBox}>
            <View style={{flex: 0.13, justifyContent: 'center'}}>
              <View
                style={{
                  height: s(25),
                  width: s(25),
                  borderRadius: 25,
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#AEBDC1',
                }}>
                <TouchableOpacity>
                  <IconIon name="close" size={s(20)} color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 0.77, justifyContent: 'center'}}>
              <TextInput
                placeholder={reverseText('םרול')}
                style={styles.Input}
                placeholderTextColor={colors.textColor}
              />
            </View>
            <View style={{flex: 0.1, justifyContent: 'center'}}>
              <TouchableOpacity>
                <IconIon
                  name="search-outline"
                  size={s(25)}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            height: '69%',
            width: '94%',
            marginTop: vs(15),
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: vs(40),
              width: '94%',
              alignSelf: 'center',
              borderWidth: 0.4,
              borderRadius: 10,
              borderColor: colors.borderColor,
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchAttachment')}>
                <Text style={styles.Text6}>{reverseText('םיפרוצמ םיצבק')}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.5, justifyContent: 'center'}}>
              <TouchableOpacity style={styles.Attachement}>
                <Text style={styles.Text5}>{reverseText('תועדוה')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* LIST START */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.listView, {marginTop: vs(16)}]}>
              <View style={{flex: 0.79, flexDirection: 'column'}}>
                <View
                  style={{
                    flex: 1.5,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={styles.Text2}>
                    {reverseText('ןהכ םייח לפוטמ')}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity>
                      <IconAnt name="left" size={s(22)} color={'#AEBDC1'} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <Text style={[styles.Text3, {paddingRight: 0}]}>
                      {reverseText('עמש תחיש')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.Text4}>{reverseText('םויה')}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 0.21,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Avatar.Image
                  style={styles.Avatar}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                  }}
                  size={s(50)}
                />
                <Badge
                  badgeStyle={{width: 25, height: 25, borderRadius: 25}}
                  value="1"
                  status="error"
                  containerStyle={styles.badgeStyle}
                />
              </View>
            </View>

            {/* FIRST END */}
          </ScrollView>
          {/* LISTVIEW */}
        </View>
      </View>
    </View>
  );
};

export default SearchMessages;
