import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';
import styled from 'styled-components';

import colors from '../../../../../theme/colors';

const QuickReply = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-width: 1px
  border-color: ${colors.grey};
  border-radius: 20px;
  margin-horizontal: 5px;
  padding: 10px;
`;

const Icon = styled.Image`
  width: 28px;
  height: 28px;
  resize-mode: contain;
`;

const RecordingView = props => {
  return (
    <QuickReply style={{flex: 1, height: 50, justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={() => props.setShowRecoding(false)}>
        <Icon source={require('../../../../../assets/images/ic_delete.png')} />
      </TouchableOpacity>

      <Image
        source={require('../../../../../assets/images/voice.png')}
        style={{width: '60%', marginHorizontal: 35}}
      />
      <TouchableOpacity onPress={() => props.setShowRecoding(false)}>
        <Icon source={require('../../../../../assets/images/ic_play.png')} />
      </TouchableOpacity>
      <Stopwatch
        start={props.isStopwatchStart}
        reset={props.resetStopwatch}
        options={options}
        getTime={time => {
          console.log(time);
        }}
      />
    </QuickReply>
  );
};

export default RecordingView;

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    size: 4,
  },
};
