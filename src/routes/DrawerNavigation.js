import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Screens, Keys} from '../constants';
import TabNavigation from './TabNavigation';
import * as ScreenSet from '../screens';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName={Screens.SPLASH}>
      <Drawer.Screen
        name={Screens.SPLASH}
        component={ScreenSet.Splash}
        options={{headerShown: false, swipeEnabled: false}}
      />

      <Drawer.Screen
        name={Screens.SIGN_IN}
        component={ScreenSet.SignIn}
        options={{headerShown: false, swipeEnabled: false}}
      />
      <Drawer.Screen
        name={Screens.SIGN_UP}
        component={ScreenSet.SignUp}
        options={{headerShown: false, swipeEnabled: false}}
      />

      <Drawer.Screen
        name={Screens.TAB_NAVIGATION}
        component={TabNavigation}
        options={{headerShown: false, swipeEnabled: false}}
      />
      <Drawer.Screen
        name={Screens.NETWORK_ERROR}
        component={ScreenSet.NetworkError}
        options={{headerShown: false, swipeEnabled: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
