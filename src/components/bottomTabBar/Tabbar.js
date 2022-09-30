import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import {Fonts, Screens, color, Colors} from '../../constants';

const Tabbar = props => {
  const {navigation, state} = props;
  const visit = state.index;
  const data = [
    {
      iconName: 'home-outline',
      name: 'Home',
      router: Screens.HOME,
      isShow: true,
    },
    {
      iconName: 'musical-notes-outline',
      name: 'Program',
      router: Screens.MUSIC,
      isShow: true,
    },
    {
      iconName: 'add-circle-outline',
      name: 'Camera',
      router: Screens.CAMARA,
      isShow: true,
    },
    {
      iconName: 'barbell-outline',
      name: 'Program',
      router: Screens.PROGRAM,
      isShow: true,
    },
    {
      iconName: 'person-circle-outline',
      name: 'Profile',
      router: Screens.PROFILE,
      isShow: true,
    },
    
  ];

  return (
    <View style={styles.container}>
      {data.map((tab, index) =>
        tab.isShow ? (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tab.router)}
            style={styles.item}>
            <Ionicons
              name={tab.iconName}
              size={responsiveScreenWidth(7)}
              color={
                visit === index
                  ? Colors.ACTIVE_TEXT_COLOR
                  : Colors.INACTIVE_TEXT_COLOR
              }
            />
            {/* <Text
              style={{
                color: visit === index ?  Colors.ACTIVE_TEXT_COLOR : Colors.INACTIVE_TEXT_COLOR,
                fontFamily: Fonts.boldFont,
                fontSize: responsiveFontSize(1.7),
              }}>
              {tab.name}
            </Text> */}
          </TouchableOpacity>
        ) : null,
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: Colors.WHITE,
  },
  tabText: {},
  item: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Tabbar;
