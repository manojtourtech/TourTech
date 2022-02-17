import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const playAudio = async e => {
  console.log('onStartPlay =', e);
  audioRecorderPlayer.stopPlayer();
  const path = e;
  const msg = await audioRecorderPlayer.startPlayer(path);
  audioRecorderPlayer.setVolume(1.0);
  console.log(msg);
  audioRecorderPlayer.addPlayBackListener(e => {
    if (e.current_position === e.duration) {
      console.log('finished');
      audioRecorderPlayer.stopPlayer();
    }
  });
};
