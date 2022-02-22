import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFontAwe from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {ScaledSheet} from 'react-native-size-matters';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import ImageResizer from 'react-native-image-resizer';
import {ms, s, vs} from 'react-native-size-matters';
import {connect} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera} from 'react-native-image-picker';
import {useSelector} from 'react-redux';

import Preview from './Preview';
import colors from '../../../../../theme/colors';
import styles from '../Styles';
import RecordingView from './RecordingView';
import realm, {
  addMessage,
  updateLastChat,
} from '../../../../../database/local_therapist_db';
import {
  getProfileDetail,
  sendMessage,
  sendAttachment,
} from '../../../../../redux/actions';

const MessageInputBox = props => {
  const {selectedUserForChat} = useSelector(state => state);
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState('');
  const [typeId, setTypeId] = useState(1);
  const [attachmentPath, setAttachmentPath] = useState('');
  const [attachmentType, setAttachmentType] = useState('');
  const [attachmentName, setAttachmentName] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalFile, setModalFile] = useState(false);
  const [showRecording, setShowRecoding] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [isRorcdingDone, setIsRecordingDOne] = useState(false);
  const [isModalCamera, setModalCamera] = useState(false);

  getProfileDetail(props.session_id);
  console.log(props, 'user');
  function reverseText(s) {
    //console.log(s.split('').reverse().join(''));
    return s.split('').reverse().join('');
  }

  const toggleModal = show => {
    setModalVisible(show);
  };

  const FileModal = show => {
    setModalFile(show);
  };
  console.log(props.profileDetail, 'user');
  const onPressSendButton = () => {
    //save data to local db
    console.log('On Press Send Button');
    setTypeId(1);

    const messageId = addMessage(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(props.route.params.recipientId),
      props.profileDetail.ID,
      1,
      '',
      '',
      true,
      2,
    );
    updateLastChat(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(props.route.params.recipientId),
      props.profileDetail.ID,
      1,
    );

    // send data to server
    props.sendMessage({
      typeID: 1,
      sessionId: props.session_id,
      recipientUserID: parseInt(props.route.params.recipientId),
      subject: 'Hi',
      body: 'Hi How are you',
      messageId: messageId,
    });

    // clear last message from message textinput
    setMessage('');
    console.log('Message Input Box CLean');
  };

  console.log(props.route.params.recipientId, '');

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
      recipientUserID: parseInt(props.route.params.recipientId),
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
      parseInt(props.route.params.recipientId),
      props.profileDetail.ID,
      typeID,
      attachmentPath,
      '',
      true,
      2,
    );
    updateLastChat(
      message,
      'Saurabh',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      parseInt(props.route.params.recipientId),
      props.profileDetail.ID,
      typeID,
      attachmentPath,
      '',
      true,
      2,
    );
    setAttachmentPath('');
    setTypeId(1);
  };

  // Add Attachment
  const onPressAttachment = React.useCallback(async (type, options) => {
    if (type == 'video') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // const result = await launchCamera(options.options);
          launchCamera(options.options, async response => {
            console.log('response ====> ', response);
            // const obj = response.assets[0];
            // console.log(obj.uri)
            // const responseAfterResize = await ImageResizer.createResizedImage(
            //   obj?.uri,
            //   obj?.width,
            //   obj?.height,
            //   obj?.type.split('/')[1] === 'png' ? 'PNG' : 'JPEG',
            //   70,
            //   0,
            // );
            // console.log(
            //   'resopnse in resize image',
            //   `image/${responseAfterResize.name.split('.')[1].toLowerCase()}`,
            //   responseAfterResize,
            // );
            setResponse(response);
            setAttachmentPath(response.assets[0].uri);
            setAttachmentType(response.assets[0].type);
            setAttachmentSize(response.assets[0].fileSize);
            setAttachmentName(response.assets[0].fileName);
          });
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else if (type === 'capture') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          launchCamera(options, async response => {
            console.log('response ====> ', response);
            const obj = response.assets[0];
            console.log(obj.uri);
            const responseAfterResize = await ImageResizer.createResizedImage(
              obj?.uri,
              obj?.width,
              obj?.height,
              obj?.type.split('/')[1] === 'png' ? 'PNG' : 'JPEG',
              70,
              0,
            );
            console.log(
              'resopnse in resize image',
              `image/${responseAfterResize.name.split('.')[1].toLowerCase()}`,
              responseAfterResize,
            );
            setResponse({
              assets: [
                {
                  fileName: responseAfterResize.name,
                  fileSize: responseAfterResize.size,
                  height: responseAfterResize.height,
                  type: `image/${responseAfterResize.name
                    .split('.')[1]
                    .toLowerCase()}`,
                  uri: responseAfterResize.uri,
                  width: responseAfterResize.width,
                },
              ],
            });
            setAttachmentPath(responseAfterResize.uri);
            setAttachmentType(obj.type);
            // setAttachmentSize(responseAfterResize.size);
            setAttachmentName(responseAfterResize.name);
          });
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
          // setAttachmentSize(res[0].size);
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

  //*---recording--*//

  const onStartRecord = async () => {
    let folder = AudioUtils.DocumentDirectoryPath;
    const date = new Date();
    const fileName =
      Math.floor(date.getTime() + date.getSeconds() / 2) + '.wav';
    let audioPath = folder + '/' + fileName;
    let options = {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Low',
      AudioEncoding: 'wav',
      MeteringEnabled: true,
    };
    AudioRecorder.prepareRecordingAtPath(audioPath, options).then(success => {
      AudioRecorder.startRecording(success => {
        console.log('Success => ', success);
      }).catch(err => {
        console.log('Error =>', err);
      });
    });
  };

  const onStopRecord = async () => {
    const filePath = await AudioRecorder.stopRecording();
    setAttachmentPath(filePath);
    setAttachmentName(filePath);
    setAttachmentType('audio');
  };

  const onPressRecording = React.useCallback(async (type, options) => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          //onStartRecord()
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  }, []);

  // Start Recording
  const onPressMic = () => {
    setShowRecoding(true);
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    setIsRecordingDOne(false);
    onPressRecording();
    onStartRecord();
  };

  // Stop Recording
  const onReleaseMic = () => {
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    setIsRecordingDOne(true);
    onStopRecord();
    setShowRecoding(false);
  };
  console.log(attachmentPath, 'colors');
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      {attachmentPath ? (
        <Preview
          attachmentPath={attachmentPath}
          attachmentType={attachmentType}
          attachmentName={attachmentName}
          setAttachmentPath={setAttachmentPath}
        />
      ) : null}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {showRecording ? (
          <RecordingView
            isStopwatchStart={isStopwatchStart}
            resetStopwatch={resetStopwatch}
            setShowRecoding={setShowRecoding}
          />
        ) : null}
      </View>

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
            onPress={
              () => setModalCamera(!isModalCamera)
              // onPressAttachment('capture', imagePickerOption.camera)
            }>
            <IconEnt name="camera" size={s(20)} color={colors.PrimaryColor} />
          </TouchableOpacity>
          {/* --------------------------------------- */}

          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback
              onPressIn={() => {
                console.log('**************On press mic **************');
                onPressMic();
              }}
              onPressOut={() => {
                console.log('**************On release mic **************');
                onReleaseMic();
              }}>
              <IconFontAwe
                name="microphone"
                size={s(20)}
                color={colors.PrimaryColor}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalCamera}
        onRequestClose={() => {
          setModalCamera(false);
          console.log('Modal has been closed.');
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.phoneModel}>
            <TouchableOpacity
              onPress={() => {
                setModalCamera(false);
                onPressAttachment('capture', imagePickerOption.camera);
              }}
              style={{marginHorizontal: 30}}>
              <IconEnt
                name="camera"
                size={s(25)}
                color={colors.white}
                style={{marginLeft: 20}}
              />
              <Text style={styles.modeltext}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalCamera(false);
                onPressAttachment('video', imagePickerOption.video);
              }}>
              <IconEnt
                name="video-camera"
                size={s(25)}
                color={colors.white}
                style={{marginLeft: 20}}
              />
              <Text style={styles.modeltext}>Take Video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({
  session_id: state.session.userDetail.sessionId,
  profileDetail: state.user.profileDetail,
});

const mapDispatchToProps = {
  getProfileDetail,
  sendMessage,
  sendAttachment,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputBox);

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
  video: {
    title: 'Take Video',
    type: 'video',
    options: {
      saveToPhotos: true,
      mediaType: 'video',
      // includeBase64: false,
      videoQuality: 'high',
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
