import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import color from '../../../../theme/colors';

const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const H1 = styled.Text`
  padding-vertical: 2px;
  color: ${color.grey};
  font-size: 12px;
`;

const Icon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
  margin-right: 10px;
`;

const BodyView = props => {
  console.log('Props =', props.lastMessage);
  return (
    <View>
      {props.lastMessage?.typeID == 5 ? (
        <MessageContainer>
          <Icon source={require('../../../../../assets/ic_file.png')} />
          <H1>{props.lastMessage?.body}</H1>
        </MessageContainer>
      ) : props.lastMessage?.typeID == 4 ? (
        <MessageContainer>
          <Icon source={require('../../../../../assets/ic_image.png')} />
          <H1>{props.lastMessage?.body}</H1>
        </MessageContainer>
      ) : props.lastMessage?.typeID == 3 ? (
        <MessageContainer>
          <Icon source={require('../../../../../assets/ic_video.png')} />
          <H1>{props.lastMessage?.body}</H1>
        </MessageContainer>
      ) : props.lastMessage?.typeID == 2 ? (
        <MessageContainer>
          <Icon source={require('../../../../../assets/ic_voice.png')} />
          <H1>{props.lastMessage?.body}</H1>
        </MessageContainer>
      ) : (
        <H1>{props.lastMessage?.body}</H1>
      )}
    </View>
  );
};

export default BodyView;
