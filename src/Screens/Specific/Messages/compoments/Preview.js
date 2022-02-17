import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import color from '../../../../theme/colors';

const Icon = styled.Image`
  width: 28px;
  height: 28px;
  resize-mode: contain;
`;

const ImageView = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
  margin: 5px;
`;

const DocumentView = styled.View`
  flex-direction: row;
  margin-vertical: 10px;
  background-color: ${color.offwhite};
  padding: 10px;
  border-radius: 20px;
  width: 90%;
`;

const AudioView = styled.View`
  flex-direction: row;
  margin-vertical: 10px;
  background-color: ${color.offwhite};
  padding: 10px;
  border-radius: 20px;
`;

const VideoView = styled.View`
  width: 150px;
  height: 150px;
  resize-mode: contain;
`;

const H4 = styled.Text`
  margin-vertical: 2px;
  color: ${color.primary};
  width: 80%;
`;

const Preview = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      {props.attachmentType.startsWith('image') ? (
        <ImageView
          source={{
            uri: props.attachmentPath,
          }}
        />
      ) : props.attachmentType.startsWith('video') ? (
        <VideoView>
          <ImageView
            source={{
              uri: props.attachmentPath,
            }}
          />
        </VideoView>
      ) : props.attachmentType.startsWith('audio') ? (
        <AudioView>
          <MaterialIcons name="mic" size={20} color={color.blue} />
          <H4>{props.attachmentName}</H4>
        </AudioView>
      ) : (
        <DocumentView>
          <MaterialIcons name="attach-file" size={20} color={color.blue} />
          <H4>{props.attachmentName}</H4>
        </DocumentView>
      )}

      <TouchableOpacity onPress={() => props.setAttachmentPath('')}>
        <Icon source={require('../../../../../assets/ic_cancel.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Preview;
