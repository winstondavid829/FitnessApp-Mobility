import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../constants';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: '100%',
        backgroundColor: props.backgroundColor,
        borderRadius: 5,
      }}>
      <Text
        style={{
          fontFamily: Fonts.regularFont,
          color: props.textColor,
          alignSelf: 'center',
          marginVertical: 5,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
