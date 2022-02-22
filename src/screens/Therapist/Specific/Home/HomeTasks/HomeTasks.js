import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import styles from './Styles';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ms, s, vs} from 'react-native-size-matters';
import ListData from './FlatListData';

import colors from '../../../../../theme/colors';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const listData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1613852348851-df1739db8201?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1500336624523-d727130c3328?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'גניסיפידא ררוטקסנוק',
  },
];
const HomeTasks = ({nav, addNewTask}) => {
  const [radioBtn, setRadioBtn] = useState(false);
  const [itemIndex, setItemIndex] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const [list, setList] = useState(listData);
  // const searchFilterFunction = text => {
  //     console.log("********************", text)
  //     let arrayholder = listData;
  //     const newData = arrayholder.filter(item => {
  //         const itemData = `${item.name}`;

  //         const textData = text.toUpperCase();

  //         return itemData.indexOf(textData) > -1;
  //     });

  //     setList(newData)
  // };

  const [isVisible, setisVisible] = React.useState(false);
  const [isVisibleEdit, setisVisibleEdit] = React.useState(false);

  const ModalVisibility = show => {
    setisVisible(show);
  };
  const EditModalVisibility = show => {
    setisVisibleEdit(show);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={isVisible}
        presentationStyle="overFullScreen"
        onRequestClose={() => ModalVisibility(false)}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <View
              style={[
                styles.topView,
                {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  height: vs(60),
                },
              ]}>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  onPress={() => ModalVisibility(false)}
                  style={{fontSize: ms(18), color: colors.PrimaryColor}}>
                  {reverseText('עצוב')}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.Text1}>
                  {reverseText('םיבושח רשק ישנא')}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: ms(18), color: '#F41032'}}>
                  {reverseText('לטבל')}
                </Text>
              </View>
            </View>

            <View
              style={{
                height: vs(220),
                width: '90%',
                alignSelf: 'center',
                marginTop: vs(20),
              }}>
              <View style={{flex: 1}}>
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
                        onPress={() => {
                          ModalVisibility(false);
                          EditModalVisibility(true);
                        }}>
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
                        onPress={() => {
                          ModalVisibility(false);
                          EditModalVisibility(true);
                        }}>
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
                        onPress={() => {
                          ModalVisibility(false);
                          EditModalVisibility(true);
                        }}>
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
                        onPress={() => {
                          ModalVisibility(false);
                          EditModalVisibility(true);
                        }}>
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
            </View>
          </View>
        </View>
      </Modal>

      {/* ////////////////////////////////////////////////////////// */}

      <Modal
        animationType="slide"
        transparent
        visible={isVisibleEdit}
        presentationStyle="overFullScreen"
        onRequestClose={() => EditModalVisibility(false)}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView2}>
            <View
              style={[
                styles.topView,
                {
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  elevation: 0,
                  height: vs(65),
                },
              ]}>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.Text1}>{reverseText('רשק שיא רחב')}</Text>
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => EditModalVisibility(false)}>
                  <View
                    style={{
                      height: s(38),
                      width: s(38),
                      backgroundColor: '#E6EEF4',
                      borderRadius: 38,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <IconAnt
                      name="right"
                      size={s(22)}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Main------------------------------------------------------- */}
            <View style={{marginTop: 10}}>
              <View style={[styles.textInput, {flexDirection: 'row'}]}>
                <View
                  style={{
                    flex: 0.14,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Fontisto
                    name="search"
                    size={s(22)}
                    color={colors.PrimaryColor}
                  />
                </View>
                <View style={{flex: 0.86, justifyContent: 'center'}}>
                  <TextInput
                    onChangeText={text => searchFilterFunction(text)}
                    placeholder={reverseText('רשק ישנא יפל שפח')}
                    style={{fontSize: ms(18), paddingRight: s(10)}}></TextInput>
                </View>
              </View>

              {/* LIST--------------------------------------------------------- */}

              <View style={{height: 450, marginTop: vs(15)}}>
                <FlatList
                  data={list}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View
                      style={{
                        height: vs(70),
                        width: '90%',
                        flexDirection: 'row',
                        alignSelf: 'center',
                      }}>
                      <View
                        style={{
                          flex: 0.2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Pressable
                          onPress={() => {
                            setRadioBtn(!radioBtn), setItemIndex(item.id);
                          }}>
                          {itemIndex == item.id && radioBtn ? (
                            <View>
                              <View
                                style={{
                                  height: s(30),
                                  width: s(30),
                                  borderRadius: 30,
                                  borderWidth: 2,
                                  borderColor: radioBtn
                                    ? colors.PrimaryColor
                                    : colors.borderColor,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <View
                                  style={{
                                    height: s(20),
                                    width: s(20),
                                    borderRadius: 20,
                                    backgroundColor: colors.PrimaryColor,
                                  }}></View>
                              </View>
                            </View>
                          ) : (
                            <View
                              style={{
                                height: s(30),
                                width: s(30),
                                borderRadius: 30,
                                borderWidth: 2,
                                borderColor: colors.borderColor,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}></View>
                          )}
                        </Pressable>
                      </View>

                      <View style={{flex: 0.6, justifyContent: 'center'}}>
                        <Text
                          style={{fontSize: ms(19), color: colors.textColor2}}>
                          {reverseText(item.name)}
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 0.2,
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                        }}>
                        <Avatar.Image
                          source={{
                            uri: item.img,
                          }}
                          size={s(55)}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>

              {/* LISTVIEW */}

              <TouchableOpacity
                onPress={() => EditModalVisibility(false)}
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
            </View>
          </View>
        </View>
      </Modal>

      {/* ///////////////////////////////////////////////////// */}

      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          marginTop: vs(30),
          alignSelf: 'flex-end',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: vs(45),
            width: s(45),
            borderRadius: 10,
            backgroundColor: '#F99E4B',
          }}>
          <IconFont5
            name="clipboard-list"
            size={s(24)}
            color={colors.BackgroundColor}
          />
        </View>
        <Text
          style={{
            fontSize: ms(21),
            fontWeight: 'bold',
            marginRight: s(15),
            color: '#F99E4B',
          }}>
          {reverseText('םוי רדס')}
        </Text>
      </View>

      <View style={styles.date}>
        <Fontisto name="calendar" size={s(24)} color={'#63A6BB'} />
        <Text
          style={{
            fontSize: ms(18),
            color: colors.textColor,
            paddingRight: s(15),
          }}>
          {reverseText('םויה 1202 ילויב 10')}
        </Text>
      </View>

      <TouchableOpacity onPress={addNewTask} style={styles.addButton}>
        <IconAnt name="plus" size={s(20)} color={colors.BackgroundColor} />
        <Text
          style={{
            fontSize: ms(16),
            color: colors.BackgroundColor,
            marginRight: s(10),
          }}>
          {reverseText('השדח המישמ ףסוה')}
        </Text>
      </TouchableOpacity>

      <FlatList
        style={{marginTop: 20}}
        data={ListData}
        keyExtractor={(x, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Card onPress={nav} style={styles.card1}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconAnt name="left" size={s(25)} color={'#E98830'} />
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
                    <View style={{flex: 1, margin: 9}}>
                      <View style={{flex: 0.25, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Text
                            style={{
                              fontSize: ms(18),
                              color: colors.PrimaryColor,
                            }}>
                            {item.time}
                          </Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                          <Text
                            style={{fontSize: ms(18), color: colors.textColor}}>
                            {reverseText(item.name)}
                          </Text>
                        </View>
                      </View>
                      <View style={{flex: 0.75}}>
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
                            color: '#68777B',
                            marginTop: vs(10),
                          }}>
                          {reverseText(item.members)}
                        </Text>

                        <View
                          style={{
                            marginTop: vs(15),
                            alignSelf: 'flex-end',
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                          }}>
                          <Avatar.Image
                            source={{
                              uri: item.images.img1,
                            }}
                            size={s(45)}
                          />
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <Avatar.Image
                              source={{
                                uri: item.images.img2,
                              }}
                              size={s(45)}
                            />
                          </View>
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <Avatar.Image
                              source={{
                                uri: item.images.img3,
                              }}
                              size={s(45)}
                            />
                          </View>
                          <View
                            style={{
                              height: 57,
                              width: 57,
                              borderRadius: 57,
                              justifyContent: 'center',
                              marginRight: s(-8),
                              alignItems: 'center',
                              backgroundColor: colors.BackgroundColor,
                            }}>
                            <View
                              style={{
                                height: s(45),
                                width: s(45),
                                borderRadius: 45,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FFF1E3',
                              }}>
                              <Text
                                style={{
                                  fontSize: ms(20),
                                  color: colors.textColor,
                                }}>
                                +3
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        )}
        ListFooterComponent={
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  right: s(5),
                }}>
                {reverseText('םיבושח רשק ישנא')}
              </Text>
            </View>
            <Card
              onPress={() => ModalVisibility(true)}
              style={{
                height: vs(180),
                width: '99%',
                elevation: 3,
                alignSelf: 'center',
                marginTop: vs(10),
                borderRadius: 10,
                marginBottom: vs(5),
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
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
        }
      />
    </View>
  );
};

export default HomeTasks;
