import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageLoad from 'react-native-image-placeholder';
import {useSelector} from 'react-redux';

import {BubbleRight, BubbleLeft} from './compoments/BubbleView';
import AudioView from './compoments/AudioView';
import colors from '../../../../theme/colors';
import {playAudio} from '../../../../utils/audioPlayer';
import {downloadImage} from '../../../../utils/downloadImage';

const H1 = styled.Text`
  margin-vertical: 2px;
  colors: ${colors.white};
`;

const H2 = styled.Text`
  margin-vertical: 2px;
  colors: ${colors.black};
`;

const H3 = styled.Text`
  colors: ${colors.grey};
  font-size: 12px;
  margin-horizontal: 5px;
`;

const H4 = styled.Text`
  margin-vertical: 2px;
  colors: ${colors.blue};
`;

const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const ImageView = styled.Image``;

const BlurView = styled.Image`
  background-colors: white;
  position: absolute;
  opacity: 0.8;
`;

const DocumentView = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 5;
`;

const VideoView = styled.TouchableOpacity`
  resize-mode: contain;
  align-items: center;
  justify-content: center;
`;

const SentStatus = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 10;
`;

const Icon2 = styled.Image`
  width: 48px;
  height: 48px;
  resize-mode: contain;
  position: absolute;
`;

const MessageItem = props => {
  const baseUrl = 'http://147.234.84.37:3000/attachments/';
  const [isImageDownloaded, setIsImageDownloaded] = useState(false);
  const [isAudioPlaying, setPlayingStatus] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const {selectedMessageItem} = useSelector(state => state);

  const onPressImage = (res, id) => {
    console.log('downloadImage');
    downloadImage(res, id);
    setIsImageDownloaded(true);
  };

  const onPressDocument = path => {};

  // /storage/emulated/0/Pictures/image_1637413599341jpg
  return (
    <>
      {props?.item?.sendingUserID === props.senderId ? (
        <View style={styles.leftView}>
          <View>
            <BubbleRight>
              {props.item.typeID == 1 ? (
                <TouchableOpacity onPress={() => playAudio(props.item.body)}>
                  <H1>{props.item.body}</H1>
                </TouchableOpacity>
              ) : props.item.typeID == 2 ? (
                <AudioView
                  item={props.item}
                  pos="right"
                  isAudioPlaying={isAudioPlaying}
                  setPlayingStatus={setPlayingStatus}
                  selectedMessageItem={selectedMessageItem}
                />
              ) : props.item.typeID == 3 ? (
                <VideoView
                  onPress={() =>
                    props.nav.navigate('VideoPlayer', {
                      res: props.item.filePath,
                    })
                  }>
                  <ImageView
                    style={styles.image}
                    source={{uri: props.item.filePath}}
                  />
                  <Icon2
                    source={require('../../../../assets/images/ic_play_white.png')}
                  />
                </VideoView>
              ) : props.item.typeID == 4 ? (
                <TouchableOpacity>
                  <ImageView
                    style={styles.image}
                    source={{uri: props.item.filePath}}></ImageView>
                </TouchableOpacity>
              ) : (
                <DocumentView
                  onPress={() => onPressDocument(props.item.filePath)}>
                  <MaterialIcons
                    name="attach-file"
                    size={20}
                    colors={colors.white}
                  />
                  <H1 style={{margin: 10}}>
                    {props.item.filePath.replace(/^.*[\\\/]/, '')}
                  </H1>
                </DocumentView>
              )}
            </BubbleRight>
            <SentStatus>
              <H3>
                {new Date(props.item.sentTime)
                  .toLocaleTimeString('en-US')
                  .substring(0, 5)}
              </H3>
              <Ionicons
                name="checkmark-done-circle-outline"
                size={20}
                colors="green"
              />
            </SentStatus>
          </View>
        </View>
      ) : (
        <View style={styles.rightView}>
          <View>
            <BubbleLeft>
              {props?.item.typeID == 1 ? (
                <H2>{props.item.body}</H2>
              ) : props.item.typeID == 2 ? (
                <AudioView
                  item={props?.item}
                  pos="left"
                  isAudioPlaying={isAudioPlaying}
                  setPlayingStatus={setPlayingStatus}
                  selectedMessageItem={selectedMessageItem}
                />
              ) : props.item.typeID == 3 ? (
                <VideoView>
                  <ImageView
                    style={styles.image}
                    source={{
                      uri: baseUrl + props.item.filePath,
                    }}
                  />
                  <Icon2
                    source={require('../../../../assets/images/ic_play.png')}
                  />
                </VideoView>
              ) : props.item.typeID == 4 ? (
                !props.item.saveToLocal ? (
                  <TouchableOpacity
                    onPress={() => {
                      setShowLoader(true);
                      onPressImage(props.item.filePath, props.item.id);
                    }}>
                    <ImageContainer>
                      <ImageView
                        style={styles.image}
                        source={{
                          uri: baseUrl + props.item.filePath,
                        }}
                      />
                      <BlurView style={styles.image} />
                      {showLoader ? (
                        <ActivityIndicator
                          style={{position: 'absolute'}}
                          size="large"
                          colors={colors.white}
                        />
                      ) : (
                        <Icon2
                          source={require('../../../../assets/images/ic_download.png')}
                        />
                      )}
                    </ImageContainer>
                  </TouchableOpacity>
                ) : (
                  <ImageLoad
                    source={{
                      uri: 'file://' + props.item.filePath,
                    }}
                    style={styles.imageLoader}
                    resizeMode="contain"
                  />
                )
              ) : (
                <DocumentView>
                  <MaterialIcons
                    name="attach-file"
                    size={20}
                    colors={colors.blue}
                  />
                  <H4>{props.item.body}</H4>
                </DocumentView>
              )}
            </BubbleLeft>
            <View style={{flexDirection: 'row'}}>
              <H3>
                {new Date(props.item.sentTime)
                  .toLocaleTimeString('en-US')
                  .substring(0, 5)}
              </H3>
              <Ionicons
                name="checkmark-done-circle-outline"
                size={20}
                colors="green"
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  leftView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  rightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  imageLoader: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.5,
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.5,
    resizeMode: 'cover',
  },
});
