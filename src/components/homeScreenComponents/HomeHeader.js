import {View, Text, StyleSheet, TouchableOpacity,Image,StatusBar} from 'react-native';
import React from 'react';
import {responsiveFontSize, responsiveScreenHeight} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {openDrawer} from '../../utils/navigationServices';
import { Colors, Fonts,Images } from '../../constants';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.LIGHTRED1} />
      <TouchableOpacity >
        <Ionicons name="menu-outline" size={40} color={Colors.TRANSPARENT} />
      </TouchableOpacity>
      <Image source={Images.SignUpIcon} style={styles.image}/>
      <TouchableOpacity >
        <Ionicons name="person-circle-outline" size={40} color={Colors.TRANSPARENT} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EF233C',
    height: responsiveScreenHeight(8),
    alignItems: 'center',
    padding: 10,
    justifyContent:'space-between',
    
  },
  heading:{
    fontFamily:Fonts.boldFont,
    fontSize:responsiveFontSize(3),
    color:Colors.PRIMARY
  },
  image:{
    width:70,
    height:70
  }
});

export default HomeHeader;
