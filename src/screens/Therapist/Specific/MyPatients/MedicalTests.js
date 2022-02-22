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
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import {ms, s, vs} from 'react-native-size-matters';
import Modal from 'react-native-modal';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const MedicalTests = ({navigation}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalFile, setModalFile] = React.useState(false);
  const toggleModal = show => {
    setModalVisible(show);
  };

  const FileModal = show => {
    setModalFile(show);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.BackgroundColor}}>
      {/* MODAL */}

      <Modal
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        avoidKeyboard={true}
        animationInTiming={500}
        animationOutTiming={500}
        onBackButtonPress={() => toggleModal(false)}
        onSwipeComplete={() => toggleModal(false)}
        swipeDirection={'down'}
        backgroundColor={'transparent'}
        backdropColor={'black'}
        backdropOpacity={0.4}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: Height * 0.2,
            width: '100%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                toggleModal(false);
                FileModal(true);
              }}>
              <Text style={{fontSize: ms(21), color: colors.PrimaryColor}}>
                Photo or Video
              </Text>
              {/* <View style={{borderWidth: 0.4, borderColor: '#D1D9DB', width: '100%' }}></View> */}
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text style={{fontSize: ms(21), color: colors.PrimaryColor}}>
                iCloud Drive
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => toggleModal(false)}>
              <Text style={{fontSize: ms(21), color: colors.PrimaryColor}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Second Modal */}
      <Modal
        isVisible={isModalFile}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        avoidKeyboard={true}
        animationInTiming={500}
        animationOutTiming={500}
        onBackButtonPress={() => FileModal(false)}
        onSwipeComplete={() => FileModal(false)}
        swipeDirection={'down'}
        backgroundColor={'transparent'}
        backdropColor={'black'}
        backdropOpacity={0.4}>
        <View
          style={{
            marginTop: vs(170),
            height: Height * 1,
            width: Width * 1,
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 20,
          }}>
          <View style={{flex: 0.15}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: vs(20),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={() => FileModal(false)}>
                <Text style={{fontSize: ms(18), color: '#2596be'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: ms(18),
                    fontWeight: 'bold',
                    color: 'black',
                    marginLeft: vs(80),
                  }}>
                  Browse
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: vs(18),
                    width: s(18),
                    borderRadius: 18,
                    marginLeft: vs(80),
                    borderWidth: 2,
                    borderColor: '#2596be',
                  }}>
                  <IconEnt
                    name="dots-three-horizontal"
                    size={s(12)}
                    color={'#2596be'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {/* TextInput */}
            <View
              style={{
                alignSelf: 'center',
                height: vs(42),
                width: '90%',
                paddingHorizontal: s(10),
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#f2f2f2',
                marginTop: vs(12),
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <IconIon name="search-outline" size={s(22)} color={'#b3b3b3'} />
              </TouchableOpacity>
              <Text style={{fontSize: ms(18), color: '#b3b3b3', left: s(7)}}>
                Search
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(10),
                width: '100%',
                alignSelf: 'center',
              }}></View>
          </View>
          <View style={{flex: 0.85}}>
            {/* Mid */}
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vs(15),
              }}>
              <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>
                Locations
              </Text>
              <IconAnt
                style={{marginLeft: s(218)}}
                name="down"
                size={s(18)}
                color={'#2596be'}
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(10),
                width: '94%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(10),
              }}>
              <IconMaterial
                name="apple-icloud"
                size={s(23)}
                color={'#2596be'}
              />
              <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
                iCloud Drive
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '85%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(15),
              }}>
              <IconEnt name="mobile" size={s(23)} color={'#2596be'} />
              <TouchableOpacity>
                <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
                  On My iPhone
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '85%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(15),
              }}>
              <IconIon
                name="ios-trash-outline"
                size={s(23)}
                color={'#2596be'}
              />
              <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
                Recently Deleted
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '94%',
                alignSelf: 'flex-end',
              }}></View>

            {/* Favorite */}

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>
                Favorites
              </Text>
              <IconAnt
                style={{marginLeft: s(218)}}
                name="down"
                size={s(18)}
                color={'#2596be'}
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '94%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vs(23),
                  width: s(23),
                  borderRadius: 23,
                  borderWidth: 2,
                  borderColor: '#2596be',
                }}>
                <IconAnt name="arrowdown" size={s(18)} color={'#2596be'} />
              </View>
              <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
                Downloads
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '94%',
                alignSelf: 'flex-end',
              }}></View>

            {/* Tags */}

            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vs(30),
              }}>
              <Text style={{fontSize: ms(18), fontWeight: 'bold'}}>Tags</Text>
              <IconAnt
                style={{marginLeft: s(250)}}
                name="down"
                size={s(18)}
                color={'#2596be'}
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '94%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vs(21),
                  width: s(21),
                  borderRadius: 21,
                  backgroundColor: '#fc9429',
                }}></View>
              <Text style={{fontSize: ms(16), marginLeft: s(12)}}>#New</Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '85%',
                alignSelf: 'flex-end',
              }}></View>

            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: s(18),
                marginTop: vs(15),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: vs(21),
                  width: s(21),
                  borderRadius: 21,
                  backgroundColor: '#fc3d3d',
                }}></View>
              <Text style={{fontSize: ms(16), marginLeft: s(12)}}>
                #Stories
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D1D9DB',
                marginTop: vs(8),
                width: '85%',
                alignSelf: 'flex-end',
              }}></View>
          </View>

          {/* BottomView */}

          <View style={styles.modalBottomView}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: vs(10),
              }}>
              <TouchableOpacity>
                <IconIon name="time" size={s(23)} color={'#b3b3b3'} />
              </TouchableOpacity>
              <Text style={{color: '#b3b3b3'}}>Recents</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: vs(10),
                marginLeft: s(150),
              }}>
              <TouchableOpacity>
                <IconIon name="browsers" size={s(23)} color={'#2596be'} />
              </TouchableOpacity>
              <Text style={{color: '#2596be'}}>Browse</Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL END */}

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
              <TouchableOpacity>
                <Text style={[styles.Text1, {marginRight: s(10)}]}>
                  {reverseText('ןהכ םייח לפוטמ')}
                </Text>
              </TouchableOpacity>
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
                style={styles.card7}
                onPress={() => {
                  navigation.navigate('MedicalTesttest');
                }}>
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
                      <Text style={styles.Text8}>
                        {reverseText('םד תוקידב לש האצות')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        29 {reverseText('ינויב')} 2021 | 10:00{' '}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.textColor2,
                            marginRight: s(8),
                          }}>
                          {reverseText('האופר תאפרמ')}
                        </Text>
                        <IconIon
                          name="md-location-sharp"
                          size={s(22)}
                          color={colors.textColor2}
                        />
                      </View>

                      {/* Horizontal Line------------------------------------ */}
                      <View
                        style={{
                          borderWidth: 0.6,
                          borderColor: '#D1D9DB',
                          width: '92%',
                          alignSelf: 'center',
                          marginTop: vs(7),
                        }}></View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.PrimaryColor,
                            marginRight: s(8),
                          }}>
                          2 {reverseText('םיכמסמ')}
                        </Text>
                        <IconIon
                          name="document-text-sharp"
                          size={s(26)}
                          color={colors.PrimaryColor}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* ------------------------------------------------ */}

            <View style={{marginTop: vs(20)}}>
              <Card
                style={styles.card7}
                onPress={() => {
                  navigation.navigate('MedicalTesttest');
                }}>
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
                      <Text style={styles.Text8}>
                        {reverseText('םד תוקידב לש האצות')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        27 {reverseText('ינויב')} 2021 | 12:00
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.textColor2,
                            marginRight: s(8),
                          }}>
                          {reverseText('האופר תאפרמ')}
                        </Text>
                        <IconIon
                          name="md-location-sharp"
                          size={s(22)}
                          color={colors.textColor2}
                        />
                      </View>

                      {/* Horizontal Line------------------------------------ */}
                      <View
                        style={{
                          borderWidth: 0.6,
                          borderColor: '#D1D9DB',
                          width: '92%',
                          alignSelf: 'center',
                          marginTop: vs(7),
                        }}></View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.PrimaryColor,
                            marginRight: s(8),
                          }}>
                          1 {reverseText('םיכמסמ')}
                        </Text>
                        <IconIon
                          name="document-text-sharp"
                          size={s(26)}
                          color={colors.PrimaryColor}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            {/* -------------------------------------------- */}
            <View style={{marginTop: vs(20)}}>
              <Card
                style={styles.card7}
                onPress={() => {
                  navigation.navigate('MedicalTesttest');
                }}>
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
                      <Text style={styles.Text8}>
                        {reverseText('םד תוקידב לש האצות')}
                      </Text>
                      <Text
                        style={{
                          fontSize: ms(18),
                          color: colors.textColor2,
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        25 {reverseText('ינויב')} 2021 | 11:00
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.textColor2,
                            marginRight: s(8),
                          }}>
                          {reverseText('האופר תאפרמ')}
                        </Text>
                        <IconIon
                          name="md-location-sharp"
                          size={s(22)}
                          color={colors.textColor2}
                        />
                      </View>

                      {/* Horizontal Line------------------------------------ */}
                      <View
                        style={{
                          borderWidth: 0.6,
                          borderColor: '#D1D9DB',
                          width: '92%',
                          alignSelf: 'center',
                          marginTop: vs(7),
                        }}></View>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'flex-end',
                          marginRight: s(15),
                          marginTop: vs(8),
                        }}>
                        <Text
                          style={{
                            fontSize: ms(18),
                            color: colors.PrimaryColor,
                            marginRight: s(8),
                          }}>
                          5 {reverseText('םיכמסמ')}
                        </Text>
                        <IconIon
                          name="document-text-sharp"
                          size={s(26)}
                          color={colors.PrimaryColor}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>

            <TouchableOpacity
              onPress={() => toggleModal(true)}
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
                {reverseText('תיאופר הקידב תפסוה')}
              </Text>
              <IconEnt
                style={{marginLeft: s(9)}}
                name="upload"
                size={s(23)}
                color={colors.BackgroundColor}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MedicalTests;
