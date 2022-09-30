import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../constants'

const CustomTextInput = (props) => {
  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      marginVertical:5,
      borderRadius:5,
      height:props.height ? props.height :40
    }}>
      <TextInput
      { ...props?.textInput }
      />
    </View>
  )
}


export default CustomTextInput