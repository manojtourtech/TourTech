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
import CustomSlider from './Slider';
import {useDispatch} from 'react-redux';
import {setAudioItem} from '../../../../redux/actions';

import color from '../../../../theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import {downloadImage} from '../../../../utils/downloadImage';

const AudioContainer = styled.View`
  resize-mode: contain;
  flex-direction: row;
  align-items: center;
`;

const AudioIconContainer = styled.TouchableOpacity``;

const ProfilePic = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: center;
`;

const CirecleView = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;

const VoiceViewWhite = styled.View`
  height: 1px;
  width: 120px;
  margin-horizontal: 10px
  background-color: ${color.white};
`;

const VoiceViewBlue = styled.View`
  height: 1px;
  width: 120px;
  margin-horizontal: 10px
  background-color: ${color.blue};
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
`;

const H1 = styled.Text`
  font-size: 10px;
  margin-vertical: 2px;
  color: ${color.white};
`;

const H2 = styled.Text`
  font-size: 10px;
  margin-vertical: 2px;
  color: ${color.blue};
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
          <ProfilePic
            source={
              props.item.picturePath
                ? {uri: props.item.picturePath}
                : require('../../../../../assets/ic_user.png')
            }
          />
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
                      source={require('../../../../../assets/ic_pause_white.png')}
                    />
                  ) : (
                    <Icon
                      source={require('../../../../../assets/ic_play_white.png')}
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
              {isAudioPlaying ? <H1>{playTime}</H1> : <H1>{duration}</H1>}
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
                    <ActivityIndicator size="small" color={color.grey} />
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
                      source={require('../../../../../assets/ic_pause_blue.png')}
                    />
                  ) : (
                    <Icon
                      source={require('../../../../../assets/ic_play.png')}
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
              {isAudioPlaying ? <H2>{playTime}</H2> : <H2>{duration}</H2>}
            </AudioContainer>
          </View>
        )}
      </View>
    </>
  );
};

export default AudioView;
