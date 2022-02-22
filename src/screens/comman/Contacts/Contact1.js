import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Linking,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import Contacts from 'react-native-contacts';
import {connect} from 'react-redux';
import UserAvatar from 'react-native-user-avatar';

import colors from '../../../theme/colors';
import styles from './Styles';
import {NewContacts, FavoriteContacts} from './ContactsData';
import ContactsModal from '../../../components/ContactsModal';
import getSyncUserList from '../../../services/getSyncUserList';
import {
  addAllUser,
  getAllUsers,
  getNonChatmailUser,
  getChatmailUser,
  updateAllUser,
} from '../../../database/local_patient_db';

function reverseText(s) {
  console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const ContactsView = ({navigation, ...props}) => {
  const [radioBtn, setRadioBtn] = useState(false);
  const [list, setList] = useState();
  const [addContact, setAddContact] = useState('');
  const [syncedUser, setSyncedUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [isVisible, setisVisible] = React.useState(false);
  const [contactsCount, setcontactsCount] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          loadContacts();
        } else {
          alert("You don't have access for the contacts");
        }
      });
    }
  }, []);

  useEffect(() => {
    setSyncedUser(getAllUsers());
    setFilteredUser(getAllUsers());
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        const contactListReturn = contacts.map(contact => {
          console.log('contact');
          if (contact?.phoneNumbers[0]) {
            var length = 0;
            var phonePrefix = '';
            var phoneNumber = contact.phoneNumbers[0]?.number;
            phoneNumber = phoneNumber.replace(/[\(\)\-\s]+/g, '');

            if (contact.phoneNumbers[0]?.number.startsWith('+')) {
              length = phoneNumber.length;
              phoneNumber = phoneNumber.substr(-10);
              phonePrefix = phoneNumber.substr(1, length - 10);
            } else if (contact.phoneNumbers[0]?.number.startsWith('0')) {
              phonePrefix = '972';
            } else {
              phonePrefix = '91';
            }

            // Jacob asked for this logic
            //1. if number start wtih + send last 10 digits = phone number, rest = prefix.
            //2.  else if start without 0 then prefix +91 and rest = number
            //3. else if start with 0 ,  +972 prefix , and number will remain same

            return {
              phonePrefix: phonePrefix,
              phoneNumber: phoneNumber,
            };
          }
        });

        const contactListForDb = contacts.map(contact => {
          //console.log('contact');
          if (contact?.phoneNumbers[0] && contact.givenName) {
            var length = 0;
            var phonePrefix = '';
            var phoneNumber = contact.phoneNumbers[0]?.number;
            phoneNumber = phoneNumber.replace(/[\(\)\-\s]+/g, '');

            // RAKESH : If Name is Null
            var name = contact.givenName ? contact.givenName : phoneNumber;

            return {
              phone: phoneNumber,
              phonePrefix: phonePrefix,
              name: name,
              email: '',
              displayProfile: contact.hasThumbnail ? contact.thumbnailPath : '',
              existence: false,
              userID: '',
            };
          }
        });
        console.log(contactListForDb);
        addAllUser(contactListForDb);

        getSyncUserList(props.session_id, contactListReturn)
          .then(response => response)
          .then(data => {
            //setSyncUser(data.data.contactList);
            console.log('API Reply : ');
            console.log(data.data);
            console.log(' : API Reply END ');
            for (let i = 0; i < data.data.contactList.length; i++) {
              updateAllUser(data.data.contactList[i]);
            }
            setSyncedUser(getAllUsers());
            setFilteredUser(getAllUsers());
          });
      })
      .catch(e => {
        console.log('Error = ', e);
      });

    Contacts.getCount().then(count => {
      setcontactsCount(count);
      console.log('Count ==', `Search ${count} contacts`);
    });

    Contacts.checkPermission();
  };
  const ModalVisibility = show => {
    setisVisible(show);
  };

  const renderContacts = ({item}) => {
    return (
      <View style={{marginTop: vs(8)}}>
        <Card style={styles.card2}>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <View style={{flex: 0.75, justifyContent: 'center'}}>
              <Text style={styles.Text8}>{item.name}</Text>
              <Text style={styles.Text9}>{item.phone}</Text>
            </View>
            <View style={{flex: 0.25, justifyContent: 'center'}}>
              <UserAvatar
                size={50}
                bgColors={['#6B449C', '#1F61AE', '#2F950B']}
                style={{alignSelf: 'flex-end', marginRight: s(12)}}
                name={item.name}
              />
            </View>
          </View>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <View style={{flex: 0.25, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  if (item.userID != '') {
                    navigation.navigate('Incoming');
                  }
                }}>
                <View
                  style={
                    item.userID ? styles.videoButton : styles.disabledButton
                  }>
                  <IconFont
                    name="video-camera"
                    size={s(19)}
                    color={colors.white}
                  />
                </View>
              </TouchableOpacity>
              <Text style={item.userID ? styles.text10 : styles.disabledText}>
                {reverseText('ואדיו תחיש')}
              </Text>
            </View>
            <View style={{flex: 0.25, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  if (item.userID != '') {
                    navigation.navigate('IncomingVoip');
                  }
                }}>
                <View
                  style={
                    item.userID ? styles.voipButton : styles.disabledButton
                  }>
                  <IconIon name="call" size={s(19)} color={colors.white} />
                </View>
              </TouchableOpacity>
              <Text style={item.userID ? styles.text10 : styles.disabledText}>
                {reverseText('תילוק החיש')}
              </Text>
            </View>
            <TouchableOpacity
              style={{flex: 0.25, alignItems: 'center'}}
              onPress={() => {
                console.log(item);
                if (item.userID != '') {
                  navigation.navigate('MessagePerson', {
                    recipientId: item.userID,
                  });
                }
              }}>
              <View
                style={item.userID ? styles.chatButton : styles.disabledButton}>
                <IconIon
                  name="md-chatbubble-ellipses-sharp"
                  size={s(19)}
                  color={colors.white}
                />
              </View>
              <Text style={item.userID ? styles.text10 : styles.disabledText}>
                {reverseText('העדוה תחילש')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (item.phone) {
                  let phoneNumber = '';
                  if (Platform.OS === 'android') {
                    phoneNumber = 'tel:${' + item.phone + '}';
                  } else {
                    phoneNumber = 'telprompt:${' + item.phone + '}';
                  }

                  Linking.openURL(phoneNumber);
                }
              }}
              style={{flex: 0.25, alignItems: 'center'}}>
              <View
                style={{
                  height: s(41),
                  width: s(41),
                  borderRadius: 41,
                  backgroundColor: '#E98830',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconM
                  name="mobile-friendly"
                  size={s(19)}
                  color={colors.white}
                />
              </View>
              <Text style={styles.text10}>{reverseText('ינופלט גויח')}</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      {/* Modal Start */}

      <ContactsModal Visible={isVisible} close={() => ModalVisibility(false)} />

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
            <Text style={styles.Text1}>{reverseText('רשק ישנא')}</Text>
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{margin: 10}}>
            <Text style={styles.Text2}>{reverseText('םיבוהא רשק ישנא')}</Text>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => ModalVisibility(true)}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Text3}>
                  {reverseText('םיפדעומל רשק שיא ףסוה')}
                </Text>
                <IconM
                  style={{marginLeft: s(12)}}
                  name="favorite"
                  size={s(22)}
                  color={colors.white}
                />
              </View>
            </TouchableOpacity>

            <FlatList
              style={{marginTop: 20}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={FavoriteContacts}
              numColumns={2}
              keyExtractor={(x, index) => index.toString()}
              renderItem={({item}) => (
                <Card style={styles.card1}>
                  <View style={{flex: 0.76, alignItems: 'center'}}>
                    <Avatar.Image
                      style={styles.Avatar}
                      source={{
                        uri: item.image,
                      }}
                      size={s(55)}
                    />
                    <Text style={styles.Text6}>{reverseText(item.name)}</Text>
                    <Text style={styles.Text7}>{item.number}</Text>
                  </View>
                  <View style={{flex: 0.24, flexDirection: 'row'}}>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Incoming')}>
                        <View
                          style={{
                            height: s(32),
                            width: s(32),
                            borderRadius: 32,
                            backgroundColor: '#6B449C',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconFont
                            name="video-camera"
                            size={s(17)}
                            color={colors.white}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('IncomingVoip')}>
                        <View
                          style={{
                            height: s(32),
                            width: s(32),
                            borderRadius: 32,
                            backgroundColor: '#1F61AE',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <IconIon
                            name="call"
                            size={s(17)}
                            color={colors.white}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(32),
                          width: s(32),
                          borderRadius: 32,
                          backgroundColor: '#2F950B',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconIon
                          name="md-chatbubble-ellipses-sharp"
                          size={s(17)}
                          color={colors.white}
                        />
                      </View>
                    </View>
                    <View style={{flex: 0.25, alignItems: 'center'}}>
                      <View
                        style={{
                          height: s(32),
                          width: s(32),
                          borderRadius: 32,
                          backgroundColor: '#E98830',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <IconM
                          name="mobile-friendly"
                          size={s(16)}
                          color={colors.white}
                        />
                      </View>
                    </View>
                  </View>
                </Card>
              )}
            />

            {/* END */}
            <View
              style={{
                borderWidth: 0.6,
                borderColor: '#D1D9DB',
                marginTop: vs(25),
                width: '94%',
                alignSelf: 'center',
              }}></View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.Text4}>{reverseText('רשקה ישנא לכ')}</Text>
              <Text style={styles.Text5}>
                {reverseText('רשק ישנא')} {contactsCount}{' '}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddNew');
              }}
              style={styles.button2}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Text3}>
                  {reverseText('שדח רשק שיא תפסוה')}
                </Text>
                <IconAnt
                  style={{marginLeft: s(12)}}
                  name="adduser"
                  size={s(23)}
                  color={colors.white}
                />
              </View>
            </TouchableOpacity>

            {/* SECOND CARD */}

            <FlatList
              style={{marginVertical: vs(10)}}
              data={filteredUser}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderContacts}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail.sessionId,
  user: state.user,
});

export default connect(mapStateToProps, null)(ContactsView);
