import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {Colors, Fonts, Images} from '../constants';

const NetworkError = () => {
  const [imageWidth, setImageWidth] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Whoops!</Text>
      </View>
      <View >
        <View style={styles.imgContainer}>
          <Image source={Images.RedSignUpIcon} />
        </View>
        <Text style={styles.errText}>Couldn't connect to the internet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

},
errText:{
    color:Colors.BLACK,
    alignSelf:'center',
    fontFamily:Fonts.boldFont
},
title:{
    color:Colors.BLACK,
    fontFamily:Fonts.boldFont
}
});

export default NetworkError;
