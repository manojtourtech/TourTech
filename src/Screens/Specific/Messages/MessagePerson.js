import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {ms, s, vs} from 'react-native-size-matters';
import {connect} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera} from 'react-native-image-picker';

import Preview from './compoments/Preview';
import {colors} from '../../../assets/colors/colors';
import styles from './Styles';
import {getProfileDetail, sendMessage} from '../../../redux/actions';
import realm, {
  getMessageById,
  addMessage,
  updateLastChat,
  getAllMessage,
} from '../../../database/realmdb';
import MessageItem from './MessageItem';
import Modal from 'react-native-modal';

function reverseText(s) {
  //console.log(s.split('').reverse().join(''));
  return s.split('').reverse().join('');
}

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MessagePerson = ({navigation, route, ...props}) => {
  // console.log('route', route.params.recipientId)

  const flatlistRef = useRef();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalFile, setModalFile] = useState(false);

  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');
  const [typeId, setTypeId] = useState(1);
  const [attachmentPath, setAttachmentPath] = useState('');
  const [attachmentType, setAttachmentType] = useState('');
  const [attachmentName, setAttachmentName] = useState('');

  // Get All Message From Db
  useEffect(() => {
    console.log('route.params =>', route.params);
    console.log('Profile Detail =>', props.profileDetail);
    realm.addListener('change', (obj, changes) => {
      const data = getMessageById(route.params.recipientId);
      const chat = [...data].reverse();

      setMessages(chat);
    });
    // Get Chat list from DB
    const data = getMessageById(route.params.recipientId);
    const chat = [...data].reverse();
    setMessages(chat);
  }, []);

  const toggleModal = show => {
    setModalVisible(show);
  };

  const FileModal = show => {
    setModalFile(show);
  };

  const onPressSendButton = () => {
    //save data to local db
    console.log('On Press Send Button');
    setTypeId(1);

    const messageId = addMessage(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(route.params.recipientId),
      props.profileDetail.ID,
      'subject',
      1,
      '',
      '',
      true,
    );

    updateLastChat(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(route.params.recipientId),
      props.profileDetail.ID,
      'subject',
      1,
    );

    // send data to server
    props.sendMessage({
      typeID: 1,
      sessionId: props.session_id,
      recipientUserID: parseInt(route.params.recipientId),
      subject: 'Hi',
      body: 'Hi How are you',
      messageId: messageId,
    });

    // clear last message from message textinput
    setMessage('');
    console.log('Message Input Box CLean');
  };

  const sendAttachedFile = () => {
    let typeID;
    let fileType;
    console.log(
      'Attachment Type ===========&&&&&&&&&&&&&&&&&&&&&',
      attachmentType,
    );
    if (
      attachmentType.startsWith('application') ||
      attachmentType.startsWith('text')
    ) {
      typeID = 5;
      fileType = 'pdf';
      setTypeId(5);
    } else if (attachmentType.startsWith('image')) {
      typeID = 4;
      fileType = 'jpg';
      setTypeId(4);
    } else if (attachmentType.startsWith('video')) {
      typeID = 3;
      fileType = 'mp4';
      setTypeId(3);
    } else if (attachmentType.startsWith('audio')) {
      typeID = 2;
      fileType = 'wav';
      setTypeId(2);
      setAttachmentPath('file://' + attachmentPath);
    } else {
      typeID = 1;
      setTypeId(1);
      fileType = 'text';
    }

    props.sendAttachment({
      photoData: attachmentPath,
      session_id: props.session_id,
      recipientUserID: parseInt(route.params.recipientId),
      user_id: 1,
      previewFile: '0aSSkSCdyhdwkkgYKMcJJIAF3mCJJJACSSSQAkL0kkAAkkgD//Z',
      subject: 'Subject',
      body: 'Message',
      typeId: typeID,
      fileType: fileType,
    });

    addMessage(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(route.params.recipientId),
      props.profileDetail.ID,
      '',
      typeID,
      attachmentPath,
      '',
      true,
    );
    setAttachmentPath('');
    setTypeId(1);
  };

  // Add Attachment
  const onPressAttachment = React.useCallback(async (type, options) => {
    if (type === 'camera') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          launchCamera(options, setResponse);
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      //launchImageLibrary(options, setResponse);
      // Pick a single file
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
          copyTo: 'documentDirectory',
        });
        console.log('Res =>>>>>>>>>>>>>>>>>>>>>>>>>>', res);

        if (res[0].size / 1000 > 20000) {
          alert('You cannot attach file more 20 MB in Size');
        } else {
          setResponse('file://' + res[0].fileCopyUri);
          setAttachmentPath('file://' + res[0].fileCopyUri);
          setAttachmentType(res[0].type);
          setAttachmentName(res[0].name);
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }
    }
  }, []);

  // Render flatlist item
  const renderMessageItem = ({item, index}) => (
    <MessageItem
      item={item}
      index={index}
      nav={navigation}
      // senderId={route.params.item}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.inner}>
        <View
          style={[
            styles.topView,
            {
              elevation: 0,
              borderBottomWidth: 0.6,
              borderBottomColor: colors.borderColor,
            },
          ]}>
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
            <Text style={styles.Text1}>{reverseText('ןהכ םייח לפוטמ')}</Text>
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
                <IconAnt name="right" size={s(22)} color={colors.textColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topView2}>
          <View style={{flex: 1, flexDirection: 'row', margin: s(5)}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <View
                  style={[styles.circularView, {backgroundColor: '#6B449C'}]}>
                  <IconFontAwe
                    name="video-camera"
                    size={s(17)}
                    color={colors.BackgroundColor}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.Text9}>{reverseText('ואדיו תחיש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity>
                <View
                  style={[styles.circularView, {backgroundColor: '#1F61AE'}]}>
                  <IconIon
                    name="call"
                    size={s(17)}
                    color={colors.BackgroundColor}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.Text9}>{reverseText('תילוק החיש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.circularView, {backgroundColor: '#2F950B'}]}>
                <IconIon
                  name="md-chatbubble-ellipses-sharp"
                  size={s(17)}
                  color={colors.BackgroundColor}
                />
              </View>
              <Text style={styles.Text9}>{reverseText('העדוה תחילש')}</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={[styles.circularView, {backgroundColor: '#E98830'}]}>
                <IconM
                  name="mobile-friendly"
                  size={s(16)}
                  color={colors.BackgroundColor}
                />
              </View>
              <Text style={styles.Text9}>{reverseText('ינופלט גויח')}</Text>
            </View>
          </View>
        </View>

        {/* TOP END */}

        {/* CHAT */}

        <View style={{flex: 1, padding: 2}}>
          {/* MSG1 */}
          <FlatList
            ref={flatlistRef}
            data={messages}
            renderItem={renderMessageItem}
            inverted
          />
        </View>

        {/* BottomView */}
        <View style={{backgroundColor: '#FFFFFF'}}>
          {attachmentPath ? (
            <Preview
              attachmentPath={attachmentPath}
              attachmentType={attachmentType}
              attachmentName={attachmentName}
              setAttachmentPath={setAttachmentPath}
            />
          ) : null}
          <View style={styles.bottomView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: vs(5),
              }}>
              <View style={styles.InputBox1}>
                <TextInput
                  placeholder={reverseText('העדוה')}
                  style={styles.Input}
                  placeholderTextColor="#46B4D7"
                  value={message}
                  onChangeText={text => setMessage(text)}
                />
              </View>

              {attachmentPath != '' ? (
                <TouchableOpacity
                  onPress={() => {
                    sendAttachedFile();
                  }}
                  style={styles.sendButton}>
                  <IconAnt
                    name="arrowup"
                    size={s(20)}
                    color={colors.BackgroundColor}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    onPressSendButton();
                  }}
                  style={styles.sendButton}>
                  <IconAnt
                    name="arrowup"
                    size={s(20)}
                    color={colors.BackgroundColor}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* ICONS */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: vs(5),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={() => toggleModal(true)}>
                <View style={styles.iconContainer}>
                  <IconIon
                    name="document-text"
                    size={s(19)}
                    color={colors.PrimaryColor}
                  />
                </View>
              </TouchableOpacity>
              {/* --------------------------------------- */}
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() =>
                  onPressAttachment('gallery', imagePickerOption.gallery)
                }>
                <IconFontAwe
                  name="photo"
                  size={s(19)}
                  color={colors.PrimaryColor}
                />
              </TouchableOpacity>

              {/* --------------------------------------- */}

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() =>
                  onPressAttachment('camera', imagePickerOption.camera)
                }>
                <IconEnt
                  name="camera"
                  size={s(20)}
                  color={colors.PrimaryColor}
                />
              </TouchableOpacity>
              {/* --------------------------------------- */}

              <View style={styles.iconContainer}>
                <IconFontAwe
                  name="microphone"
                  size={s(20)}
                  color={colors.PrimaryColor}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.data.sessionId,
  profileDetail: state.user.profileDetail,
});

const mapDispatchToProps = {
  getProfileDetail,
  sendMessage,
};

const imagePickerOption = {
  camera: {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  galley: {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagePerson);
