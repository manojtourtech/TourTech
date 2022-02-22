import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import IconFound from 'react-native-vector-icons/Foundation';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../../../../../theme/colors';
import Strings from '../../../../../languages/Strings';
import styles from './Styles';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const images = {
  image1:
    'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image2:
    'https://images.unsplash.com/photo-1520780662578-a2e93221bbd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image3:
    'https://images.unsplash.com/photo-1547944379-e0b132d2ddfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image4:
    'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image5:
    'https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image6:
    'https://images.unsplash.com/photo-1565493383251-d3a136e92e6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image7:
    'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
};

const staticData = [
  {
    id: 1,
    time: '8:50',
    data: 'םוספיא םרול הפורת',
  },
  {
    id: 2,
    time: '8:50',
    data: 'םוספיא םוספיא םוספיא םרול',
  },
  {
    id: 3,
    time: '8:50',
    data: 'םוספיא םרול הפורת',
  },
  {
    id: 4,
    time: '8:50',
    data: 'םוספיא םרול הפורת',
  },
  {
    id: 5,
    time: '8:50',
    data: 'םוספיא םרול הפורת',
  },
  {
    id: 6,
    time: '8:50',
    data: 'םוספיא םרול הפורת',
  },
];

const HomeTasks = ({navigation}) => {
  const [checkBoxData, setCheckBoxData] = useState([]);
  console.log('checkBoxData@@@@@@@@@@@@@@@', checkBoxData);

  const toggleSwitchType = flatListData => {
    const isExist = checkBoxData.find(
      value => JSON.stringify(value) === JSON.stringify(flatListData),
    );
    if (!isExist) {
      setCheckBoxData([...checkBoxData, flatListData]);
    } else {
      const data = checkBoxData.filter(item => item.id != flatListData.id);
      setCheckBoxData(data);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {/* **************************************************************** */}
      <View style={styles.inner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: vs(20), margin: 15}}>
            <View style={styles.childContainer}>
              <Text style={styles.text1}>{reverseText(Strings.agenda)}</Text>
              <View style={styles.iconView}>
                <IconFound
                  name="clipboard-notes"
                  size={s(28)}
                  color={colors.white}
                />
              </View>
            </View>

            {/* ************************************************/}

            <View style={{marginTop: vs(20)}}>
              <FlatList
                data={staticData}
                renderItem={({item, index}) => (
                  <Card style={styles.card2}>
                    <View style={styles.cardContent}>
                      <View style={styles.timeView}>
                        <Text style={{fontSize: ms(18), color: '#F41032'}}>
                          {item.time}
                        </Text>
                      </View>
                      <View style={styles.cardSubView}>
                        <Pressable onPress={toggleSwitchType.bind(this, item)}>
                          {checkBoxData.find(
                            value =>
                              JSON.stringify(value) === JSON.stringify(item),
                          ) ? (
                            <IconIon
                              name="checkbox"
                              size={s(32)}
                              color={'#E98830'}
                            />
                          ) : (
                            <IconFeather
                              name="square"
                              size={s(32)}
                              color={'#F41032'}
                            />
                          )}
                        </Pressable>
                        <Text style={styles.cardText}>
                          {reverseText(item.data)}
                        </Text>
                      </View>
                    </View>
                  </Card>
                )}
              />

              {/* ************************************************/}

              <Card
                style={{
                  height: vs(220),
                  width: '100%',
                  elevation: 3,
                  alignSelf: 'center',
                  marginTop: vs(15),
                  borderRadius: 10,
                  marginBottom: vs(5),
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
                      color={colors.primary}
                    />
                    <Text
                      style={{
                        fontSize: ms(17),
                        fontWeight: 'bold',
                        color: colors.primary,
                        left: s(8),
                      }}>
                      {reverseText('ךורעל')}
                    </Text>
                    <Text
                      style={{
                        fontSize: ms(17),
                        fontWeight: 'bold',
                        color: colors.primary,
                        position: 'absolute',
                        right: 0,
                      }}>
                      {reverseText('םיבושח רשק ישנא')}
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
                          color={colors.primary}
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
                          color={colors.primary}
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
                          color={colors.primary}
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
                          color={colors.primary}
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
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeTasks;
