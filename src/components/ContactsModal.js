import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Dimensions,
  TextInput,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {ms, s, vs} from 'react-native-size-matters';

import colors from '../theme/colors';

const {width} = Dimensions.get('screen');

function reverseText(s) {
  // console.log(s.split("").reverse().join(""))
  return s.split('').reverse().join('');
}

const images = {
  image1:
    'https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image2:
    'https://images.unsplash.com/photo-1578496781197-b85385c7f0b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aWVudHxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image3:
    'https://images.unsplash.com/photo-1547944379-e0b132d2ddfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image4:
    'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95c3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image5:
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image6:
    'https://images.unsplash.com/photo-1565493383251-d3a136e92e6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  image7:
    'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
};

const listData = [
  {
    id: 1,
    img: images.image1,
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 2,
    img: images.image2,
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 3,
    img: images.image3,
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 4,
    img: images.image4,
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 5,
    img: images.image5,
    name: 'גניסיפידא ררוטקסנוק',
  },
  {
    id: 6,
    img: images.image6,
    name: 'גניסיפידא ררוטקסנוק',
  },
];
export default class ContactsModal extends React.Component {
  // const [list, setList] = useState(listData)
  // const searchFilterFunction = text => {
  //     let arrayholder = listData;
  //     const newData = arrayholder.filter(item => {
  //         const itemData = `${item.name}`;

  //         const textData = text.toUpperCase();

  //         return itemData.indexOf(textData) > -1;
  //     });

  //     setList(newData)
  // };
  constructor(props) {
    super(props);
    this.state = {
      select: false,
      itemIndex: null,
    };
  }

  PressedItem = itemId => {
    console.log(itemId);
    this.setState({select: itemId});
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={this.props.Visible}
        presentationStyle="overFullScreen"
        onRequestClose={this.props.close}>
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
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
                }}>
                <TouchableOpacity onPress={this.props.close}>
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
                      name="close"
                      size={s(22)}
                      color={colors.textColor}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.Text1}>{reverseText('םיפדעומל ףסוה')}</Text>
              </View>
              <View
                style={{
                  flex: 0.25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
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
                  <IconFontisto
                    name="search"
                    size={s(22)}
                    color={colors.primary}
                  />
                </View>
                <View style={{flex: 0.86, justifyContent: 'center'}}>
                  <TextInput
                    // onChangeText={text => searchFilterFunction(text)}
                    placeholder={reverseText('רשק ישנא יפל שפח')}
                    style={{fontSize: ms(18), paddingRight: s(10)}}></TextInput>
                </View>
              </View>

              {/* LIST--------------------------------------------------------- */}

              <View style={{height: 450, marginTop: vs(15)}}>
                <FlatList
                  data={listData}
                  extraData={this.state.select}
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
                          flex: 0.25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              select: !this.state.select,
                              itemIndex: item.id,
                            });
                          }}>
                          <View
                            style={{
                              height: s(40),
                              width: s(70),
                              borderRadius: 10,
                              borderWidth: 2,
                              borderColor:
                                this.state.itemIndex == item.id &&
                                this.state.select
                                  ? '#F41032'
                                  : colors.primary,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontSize: ms(16),
                                color:
                                  this.state.itemIndex == item.id &&
                                  this.state.select
                                    ? '#F41032'
                                    : colors.primary,
                              }}>
                              {reverseText('ףיסוהל‏')}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={{flex: 0.55, justifyContent: 'center'}}>
                        <Text
                          style={{fontSize: ms(17), color: colors.textColor2}}>
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
              <TouchableOpacity
                onPress={this.props.close}
                style={{
                  height: vs(45),
                  width: '90%',
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: vs(25),
                  backgroundColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: ms(18), color: colors.white}}>
                  {reverseText('הרימש')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '"rgba(0, 0, 0, 0.6)"',
  },
  modalView: {
    height: '90%',
    marginTop: 100,
    width: width * 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topView: {
    height: vs(50),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.white,
    elevation: 4,
  },
  Text1: {
    fontSize: ms(17),
    fontWeight: 'bold',
    color: colors.primary,
  },
  textInput: {
    height: 60,
    width: '94%',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: vs(7),
    fontSize: ms(17),
    color: '#46B4D7',
    paddingRight: s(12),
  },
});
