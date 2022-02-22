import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import CustomSlider from './Slider';
import {setAudioItem} from '../../../../redux/actions';
import colors from '../../../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import {downloadImage} from '../../../../utils/downloadImage';

const AudioContainer = styled.View`
  resize-mode: contain;
  flex-direction: row;
  align-items: center;
`;

const AudioIconContainer = styled.TouchableOpacity``;

const ProfilePic = styled.Image`
  width: 48px;
  height: 48px;
  resize-mode: center;
  border-radius: 24px;
`;

const CirecleView = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-color: #a8abaf;
  overflow: hidden;
  align-items: center;
`;

const VoiceViewWhite = styled.View`
  height: 1px;
  width: 120px;
  margin-horizontal: 10px
  background-color: ${colors.white};
`;

const VoiceViewBlue = styled.View`
  height: 1px;
  width: 120px;
  margin-horizontal: 10px
  background-color: ${colors.blue};
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

const H1 = styled.Text`
  font-size: 10px;
  margin-vertical: 2px;
  color: ${colors.white};
`;

const H2 = styled.Text`
  font-size: 10px;
  margin-vertical: 2px;
  color: ${colors.blue};
`;

const audioRecorderPlayer = new AudioRecorderPlayer();

const AudioView = ({
  isAudioPlaying,
  setPlayingStatus,
  selectedMessageItem,
  ...props
}) => {
  const navigation = useNavigation();
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      goBack,
    );
    return () => backHandler.remove();
  }, []);

  const playAudio = async (e, pos) => {
    try {
      // setPosition(pos);
      dispatch(setAudioItem(props.item));
      setPlayingStatus(true);
      audioRecorderPlayer.stopPlayer();
      const path = e;
      const msg = await audioRecorderPlayer.startPlayer(path);
      audioRecorderPlayer.setVolume(1.0);
      audioRecorderPlayer.addPlayBackListener(e => {
        if (e.currentPosition === e.duration) {
          console.log('finished');
          setCurrentPositionSec(0);
          audioRecorderPlayer.stopPlayer();
        }
        setCurrentPositionSec(e.currentPosition);
        setCurrentDurationSec(e.duration);
        setPlayTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition / 100)),
        );

        setDuration(audioRecorderPlayer.mmss(Math.floor(e.duration)));
      });
    } catch (error) {
      console.log('Error while playing = ', error);
    }
  };

  const pause = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  const play = async () => {
    audioRecorderPlayer.playAudio();
  };

  const onStopPlay = async () => {
    setPlayingStatus(false);
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };

  const goBack = async () => {
    setPlayingStatus(false);
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    navigation.goBack();
  };

  const onValueChange = value => {
    setCurrentPositionSec(value);
    setPlayTime(audioRecorderPlayer.mmssss(Math.floor(value / 100)));
    play();
  };

  const downloadAudio = () => {
    console.log('downloadAudio');
    downloadImage(props.item.filePath, props.item.id);
  };

  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <CirecleView>
          {props.pos == 'right' ? (
            <ProfilePic
              source={
                props?.profileDetail?.picturePath
                  ? {uri: props?.profileDetail?.picturePath}
                  : require('../../../../assets/images/ic_profile.png')
              }
            />
          ) : (
            <ProfilePic
              source={
                props?.item?.picturePath
                  ? {uri: props?.item?.picturePath}
                  : require('../../../../assets/images/ic_profile.png')
              }
            />
          )}
        </CirecleView>
        {props.pos == 'right' ? (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <AudioContainer>
              {!props.item.saveToLocal ? (
                <TouchableOpacity activeOpacity={0.5} onPress={downloadAudio}>
                  <Feather name={'arrow-down-circle'} size={24} color={'red'} />
                </TouchableOpacity>
              ) : (
                <AudioIconContainer
                  onPress={() => {
                    if (
                      isAudioPlaying &&
                      selectedMessageItem?.id === props.item.id
                    ) {
                      onStopPlay();
                    } else {
                      playAudio(props.item.filePath, props.item.id);
                    }
                  }}>
                  {isAudioPlaying &&
                  selectedMessageItem?.id === props.item.id ? (
                    <Icon
                      source={require('../../../../assets/images/ic_pause_white.png')}
                    />
                  ) : (
                    <Icon
                      source={require('../../../../assets/images/ic_play_white.png')}
                    />
                  )}
                </AudioIconContainer>
              )}
              <CustomSlider
                maximumValue={currentDurationSec}
                minimumValue={0}
                value={currentPositionSec}
                onValueChange={onValueChange}
              />
            </AudioContainer>
            <AudioContainer style={{marginLeft: 30}}>
              {isAudioPlaying ? <H1>{playTime}</H1> : null}
            </AudioContainer>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <AudioContainer>
              {!props.item.saveToLocal ? (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setShowLoader(true);
                    downloadAudio();
                  }}>
                  {showLoader ? (
                    <ActivityIndicator size="small" color={colors.grey} />
                  ) : (
                    <Feather
                      name={'arrow-down-circle'}
                      size={26}
                      color={'blue'}
                    />
                  )}
                </TouchableOpacity>
              ) : (
                <AudioIconContainer
                  onPress={() => {
                    if (
                      isAudioPlaying &&
                      selectedMessageItem.id === props.item.id
                    ) {
                      onStopPlay();
                    } else {
                      playAudio(props.item.filePath, props.item.id);
                    }
                  }}>
                  {isAudioPlaying &&
                  selectedMessageItem.id === props.item.id ? (
                    <Icon
                      source={require('../../../../assets/images/ic_pause_blue.png')}
                    />
                  ) : (
                    <Icon
                      source={require('../../../../assets/images/ic_play.png')}
                    />
                  )}
                </AudioIconContainer>
              )}
              <CustomSlider
                maximumValue={currentDurationSec}
                minimumValue={0}
                value={currentPositionSec}
                onValueChange={onValueChange}
                minimumTrackTintColor={'#3c64e6'}
                maximumTrackTintColor={'grey'}
                thumbTintColor={'#3c64e6'}
              />
            </AudioContainer>
            <AudioContainer style={{marginLeft: 30}}>
              {isAudioPlaying ? <H2>{playTime}</H2> : null}
            </AudioContainer>
          </View>
        )}
      </View>
    </>
  );
};

export default AudioView;
