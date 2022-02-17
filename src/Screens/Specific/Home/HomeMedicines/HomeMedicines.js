import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {ms, s, vs} from 'react-native-size-matters';

import {colors} from '../../../../assets/colors/colors';
import Strings from '../../../../languages/Strings';
import styles from './Styles';

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

const medicineData = [
  {
    id: 1,
    time: '9:50',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
  {
    id: 2,
    time: '13:15',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
  {
    id: 3,
    time: '18:05',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
  {
    id: 4,
    time: '19:10',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
  {
    id: 5,
    time: '21:20',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
  {
    id: 6,
    time: '10:20',
    data: 'םוספיא םרול הפורת',
    table: '1 הילבט',
  },
];

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const HomeMedicines = ({navigation}) => {
  const [checkBoxData, setCheckBoxData] = useState([]);

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

  const renderItem = ({item, index}) => {
    return (
      <Card style={styles.cardView}>
        <View style={styles.cardContent}>
          <View style={styles.cardSubView1}>
            <IconAnt name="left" size={s(25)} color={'#1F61AE'} />
          </View>
          <View style={styles.cardSubView2}>
            <View style={styles.cardContainer}>
              <View style={styles.cardContent}>
                <View style={styles.cardContentSubView1}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.text2}>{item.time}</Text>
                    <Text style={styles.text2}>{reverseText(item.data)}</Text>
                  </View>
                  <Text style={styles.text3}>{reverseText(item.table)}</Text>
                </View>
                <View style={styles.cardContentSubView2}>
                  <Pressable onPress={toggleSwitchType.bind(this, item)}>
                    {checkBoxData.find(
                      value => JSON.stringify(value) === JSON.stringify(item),
                    ) ? (
                      <IconIon
                        style={{marginTop: vs(10)}}
                        name="checkbox"
                        size={s(32)}
                        color={'#1F61AE'}
                      />
                    ) : (
                      <IconFeather
                        style={{marginTop: vs(10)}}
                        name="square"
                        size={s(32)}
                        color={'#F41032'}
                      />
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.BackgroundColor}
        barStyle="dark-content"
      />
      {/* **************************************************************** */}
      <View style={styles.inner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: vs(20), margin: 15}}>
            <View style={styles.childContainer}>
              <Text style={styles.text1}>
                {reverseText(Strings.listOfDrugs)}
              </Text>
              <View style={styles.iconView}>
                <IconFont5
                  name="capsules"
                  size={s(25)}
                  color={colors.BackgroundColor}
                />
              </View>
            </View>

            {/* ************************************************/}

            <View style={{marginTop: vs(20)}}>
              <FlatList data={medicineData} renderItem={renderItem} />
              {/* --------------------------------------------------- */}

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
                    <Text
                      style={{
                        fontSize: ms(17),
                        fontWeight: 'bold',
                        color: colors.PrimaryColor,
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
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeMedicines;
