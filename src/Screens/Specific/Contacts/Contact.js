import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
  Platform,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import {connect} from 'react-redux';
import {colors} from '../../../assets/colors/colors';
import styles from './Styles';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {Badge} from 'react-native-elements';
import ContactsModal from '../../../components/ContactsModal';
import {FavContacts, AddContacts} from './ContactsData';
import Contacts from 'react-native-contacts';

import getSyncUserList from '../../../services/getSyncUserList';
import {
  addAllUser,
  getAllUsers,
  getNonChatmailUser,
  getChatmailUser,
  updateAllUser,
} from '../../../database/realmdb';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}
const ContactsView = ({navigation, ...props}) => {
  const [contacts, setContacts] = useState([]);
  // console.log('contacts', contacts)
  const [isVisible, setisVisible] = useState(false);

  let [syncedUser, setSyncedUser] = useState([]);
  let [filteredUser, setFilteredUser] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //alert("You've access for the location");
          loadContacts();
        } else {
          alert("You don't have access for the contacts");
        }
      });
    }
  }, []);

  useEffect(() => {
    //console.log('Get All Users =', getAllUsers());
    //setSearch('');
    console.log('Marpe Users = ', getChatmailUser());
    setSyncedUser(getAllUsers());
    setFilteredUser(getAllUsers());
  }, []);

  const loadContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        const contactListReturn = contacts.map(contact => {
          //console.log('contact');
          return {
            phone: contact.phoneNumbers[0]?.number.startsWith('0')
              ? props.user.countryCode +
                contact.phoneNumbers[0]?.number.replace(/\s/g, '').substr(1)
              : contact.phoneNumbers[0]?.number.startsWith('+')
              ? contact.phoneNumbers[0]?.number.replace(/\s/g, '')
              : props.user.countryCode +
                contact.phoneNumbers[0]?.number.replace(/\s/g, ''),
          };
        });

        const contactListForDb = contacts.map(contact => {
          //console.log('contact');
          return {
            phone: contact.phoneNumbers[0]?.number.startsWith('0')
              ? props.user.countryCode +
                contact.phoneNumbers[0]?.number.replace(/\s/g, '').substr(1)
              : contact.phoneNumbers[0]?.number.startsWith('+')
              ? contact.phoneNumbers[0]?.number.replace(/\s/g, '')
              : props.user.countryCode +
                contact.phoneNumbers[0]?.number.replace(/\s/g, ''),
            name: contact.givenName,
            email: '',
            displayProfile: contact.hasThumbnail ? contact.thumbnailPath : '',
            existence: false,
            userID: '',
          };
        });

        addAllUser(contactListForDb);

        getSyncUserList(props.session_id, contactListReturn)
          .then(response => response)
          .then(data => {
            //setSyncUser(data.data.contactList);

            for (let i = 0; i < data.data.contactList.length; i++) {
              updateAllUser(data.data.contactList[i]);
            }
            setContacts(contacts);
            setSyncedUser(getAllUsers());
            setFilteredUser(getAllUsers());
          });
      })
      .catch(e => {
        console.log('Error = ', e);
      });

    Contacts.getCount().then(count => {
      console.log('Count ==', `Search ${count} contacts`);
    });

    Contacts.checkPermission();
  };

  const ModalVisibility = show => {
    setisVisible(show);
  };

  const renderFavorites = ({item, index}) => {
    // console.log('FAV@@@@@@@@@@@@@@@@@@@@@@', item);
    return (
      <Card style={[styles.card1, {marginRight: index % 2 === 0 ? vs(5) : 0}]}>
        <View style={{flex: 0.76, alignItems: 'center'}}>
          <Avatar.Image
            style={styles.Avatar}
            source={{
              uri: 'https://images.unsplash.com/photo-1589992896844-9b720813d1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
            size={s(55)}
          />
          {/* <Text style={styles.Text6}>{reverseText(item.displayName)}</Text>
                    <Text style={styles.Text7}>{item.number}</Text> */}
          {/* <Text style={styles.Text6}>{item.displayName}</Text>
                    <Text style={styles.Text7}>{item.phoneNumbers[0].number}</Text> */}
          <Text style={styles.Text6}>{item.name}</Text>
          <Text style={styles.Text7}>{item.phone}</Text>
        </View>
        <View style={{flex: 0.24, flexDirection: 'row'}}>
          <View style={{flex: 0.25, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Incoming')}>
              <View
                style={[styles.circularView2, {backgroundColor: '#6B449C'}]}>
                <IconFont
                  name="video-camera"
                  size={s(17)}
                  color={colors.BackgroundColor}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.25, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('IncomingVoip')}>
              <View
                style={[styles.circularView2, {backgroundColor: '#1F61AE'}]}>
                <IconIon
                  name="call"
                  size={s(17)}
                  color={colors.BackgroundColor}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.25, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                item.userID != ''
                  ? navigation.navigate('MessagePerson', {
                      item: item,
                    })
                  : alert('User is not register on Chatmail');
              }}
              // onPress={() =>
              //   navigation.navigate('MessagePerson', {
              //     recipientId: 9,
              //   })
              // }>
            >
              <View
                style={[styles.circularView2, {backgroundColor: '#2F950B'}]}>
                <IconIon
                  name="md-chatbubble-ellipses-sharp"
                  size={s(17)}
                  color={colors.BackgroundColor}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.25, alignItems: 'center'}}>
            <View style={[styles.circularView2, {backgroundColor: '#E98830'}]}>
              <IconM
                name="mobile-friendly"
                size={s(16)}
                color={colors.BackgroundColor}
              />
            </View>
          </View>
        </View>
      </Card>
    );
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
              <Avatar.Image
                style={{alignSelf: 'flex-end', marginRight: s(12)}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                }}
                size={s(55)}
              />
            </View>
          </View>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <View style={{flex: 0.25, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Incoming')}>
                <View
                  style={[styles.circularView, {backgroundColor: '#6B449C'}]}>
                  <IconFont
                    name="video-camera"
                    size={s(19)}
                    color={colors.BackgroundColor}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.text10}>{reverseText('ואדיו תחיש')}</Text>
            </View>
            <View style={{flex: 0.25, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('IncomingVoip')}>
                <View
                  style={[styles.circularView, {backgroundColor: '#1F61AE'}]}>
                  <IconIon
                    name="call"
                    size={s(19)}
                    color={colors.BackgroundColor}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.text10}>{reverseText('תילוק החיש')}</Text>
            </View>
            <TouchableOpacity
              style={{flex: 0.25, alignItems: 'center'}}
              onPress={() => {
                console.log(item);
                if (item.userID != '') {
                  navigation.navigate('MessagePerson', {
                    recipientId: item.userID,
                  });
                } else {
                  alert('User Not Register On Marpe');
                }
              }}>
              <View style={[styles.circularView, {backgroundColor: '#2F950B'}]}>
                <IconIon
                  name="md-chatbubble-ellipses-sharp"
                  size={s(19)}
                  color={colors.BackgroundColor}
                />
              </View>
              <Text style={styles.text10}>{reverseText('העדוה תחילש')}</Text>
            </TouchableOpacity>
            <View style={{flex: 0.25, alignItems: 'center'}}>
              <View style={[styles.circularView, {backgroundColor: '#E98830'}]}>
                <IconM
                  name="mobile-friendly"
                  size={s(19)}
                  color={colors.BackgroundColor}
                />
              </View>
              <Text style={styles.text10}>{reverseText('ינופלט גויח')}</Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.BackgroundColor}
        barStyle="dark-content"
      />
      <ContactsModal Visible={isVisible} close={() => ModalVisibility(false)} />
      {/* Modal Start */}

      <View style={styles.inner}>
        <View style={styles.topView}>
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
          <View
            style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text1}>{reverseText('ילש םויה')}</Text>
          </View>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  height: s(38),
                  width: s(38),
                  backgroundColor: '#E6EEF4',
                  borderRadius: 38,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <IconIon
                  name="ios-notifications-sharp"
                  size={s(22)}
                  color={colors.textColor}
                />
                <Badge
                  badgeStyle={{width: 25, height: 25, borderRadius: 25}}
                  value="12"
                  status="error"
                  containerStyle={styles.badgeStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView2}>
          <View
            style={{
              height: 45,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: '#A7B9D01A',
            }}>
            <Text style={{fontSize: ms(19), color: colors.PrimaryColor}}>
              {reverseText('ןושאר םוי')}
              {'29/6/2021'}
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.Text2}>{reverseText('םיבוהא רשק ישנא')}</Text>
          <TouchableOpacity
            onPress={() => ModalVisibility(true)}
            style={styles.button1}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Text3}>
                {reverseText('םיפדעומל רשק שיא ףסוה')}
              </Text>
              <IconM
                style={{marginLeft: s(12)}}
                name="favorite"
                size={s(22)}
                color={colors.BackgroundColor}
              />
            </View>
          </TouchableOpacity>
          {/**********************Favortite Contacts List*********************/}
          <FlatList
            style={{margin: vs(10)}}
            // data={contacts.slice(4, 8)}
            data={filteredUser.slice(4, 8)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderFavorites}
          />
          {/***************************************************/}
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
            <Text style={styles.Text5}>{reverseText('רשק ישנא')}750</Text>
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
                color={colors.BackgroundColor}
              />
            </View>
          </TouchableOpacity>
          {/**********************Contacts List*********************/}
          <FlatList
            style={{marginVertical: vs(10)}}
            data={filteredUser}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderContacts}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.data.sessionId,
  user: state.user,
});

export default connect(mapStateToProps, null)(ContactsView);
