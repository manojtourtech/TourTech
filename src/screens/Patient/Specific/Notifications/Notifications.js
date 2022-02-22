import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import {DrawerActions} from '@react-navigation/native';
import {s, vs} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';

import styles from './Styles';
import colors from '../../../../theme/colors';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Notifications = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.top}>
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
              style={{
                flex: 0.5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.Text1}>{reverseText('תורוכזת')}</Text>
              <View
                style={{
                  height: s(24),
                  width: s(24),
                  borderRadius: 24,
                  backgroundColor: '#F41032',
                  left: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.Text2}>10</Text>
              </View>
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
            <View style={styles.date}>
              <Text style={styles.Text3}>
                {reverseText('ןושאר םוי')} 29/6/2021
              </Text>
            </View>
          </View>
        </View>

        {/* FLATLIST */}
        <View style={styles.list}>
          <ScrollView>
            <View style={{marginTop: vs(27)}}>
              <Text style={styles.Text4}>{reverseText('םויה')}</Text>
              <Card style={styles.card1}>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#D9213D',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}>
                  <Text style={styles.Text5}>
                    29 {reverseText('ינויב')}2021 | 8:00
                  </Text>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text style={styles.Text6}>
                        {reverseText('לפוטמה םש')}
                      </Text>
                      <Text style={styles.Text7}>{reverseText('ןוחבא')}</Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(55)}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'column'}}>
                    <View
                      style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: s(17),
                      }}>
                      <Text style={styles.Text8}>Acamol</Text>
                      <IconFont5
                        name="capsules"
                        size={s(22)}
                        color={colors.textColor}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: s(17),
                      }}>
                      <Text style={styles.Text8}>Lantus Solostar</Text>
                      <IconFont5
                        name="capsules"
                        size={s(22)}
                        color={colors.textColor}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.Text9}>
                      {reverseText('לפוטמל העדוה בותכ')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>

            {/* SECOND CARD */}
            <View style={{marginTop: vs(27)}}>
              <Text style={styles.Text4}>{reverseText('לומתא')}</Text>
              <Card style={styles.card1}>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#D9213D',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}>
                  <Text style={styles.Text5}>
                    28 {reverseText('ינויב')}2021 | 9:10
                  </Text>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text style={styles.Text6}>
                        {reverseText('לפוטמה םש')}
                      </Text>
                      <Text style={styles.Text7}>{reverseText('ןוחבא')}</Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                        }}
                        size={s(55)}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'row'}}>
                    <View
                      style={{
                        flex: 0.93,
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.Text8}>
                        {reverseText('םוספיא םרול המישמה םש')}
                      </Text>
                      <Text style={styles.Text8}>{reverseText('םוספיא')}</Text>
                    </View>
                    <View
                      style={{
                        flex: 0.07,
                        alignItems: 'center',
                        paddingRight: s(17),
                        marginTop: vs(15),
                      }}>
                      <IconFoundation
                        name="clipboard-notes"
                        size={s(25)}
                        color={colors.textColor}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.Text9}>
                      {reverseText('לפוטמל העדוה בותכ')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
            {/* END */}

            {/* THIRD CARD */}

            <View style={{marginTop: vs(27)}}>
              <Text style={styles.Text4}>{reverseText('ישילש םוי')}</Text>
              <Card style={styles.card1}>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#D9213D',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}>
                  <Text style={styles.Text5}>
                    20 {reverseText('ינויב')}2021 | 14:10
                  </Text>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'row'}}>
                    <View style={{flex: 0.75, justifyContent: 'center'}}>
                      <Text style={styles.Text6}>
                        {reverseText('לפוטמה םש')}
                      </Text>
                      <Text style={styles.Text7}>{reverseText('ןוחבא')}</Text>
                    </View>
                    <View style={{flex: 0.25, justifyContent: 'center'}}>
                      <Avatar.Image
                        style={{alignSelf: 'flex-end', marginRight: s(12)}}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                        }}
                        size={s(55)}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View style={{flex: 0.3, flexDirection: 'column'}}>
                  <View style={{flex: 0.9, flexDirection: 'column'}}>
                    <View
                      style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                      }}>
                      <Text style={styles.Text8}>Acamol</Text>
                      <IconFont5
                        name="capsules"
                        size={s(22)}
                        color={colors.textColor}
                      />
                    </View>
                    <View
                      style={{
                        flex: 0.5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                      }}>
                      <Text style={styles.Text8}>Lantus Solostar</Text>
                      <IconFont5
                        name="capsules"
                        size={s(22)}
                        color={colors.textColor}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 0.6,
                        borderColor: '#D1D9DB',
                        width: '94%',
                        alignSelf: 'center',
                      }}></View>
                  </View>
                </View>

                <View
                  style={{
                    flex: 0.25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.Text9}>לפוטמל העדוה בותכ</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>

            {/* END */}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
