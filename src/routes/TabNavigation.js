import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screens} from '../constants';
import * as ScreenSet from '../screens';
import {Tabbar} from '../components';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <Tabbar {...props} />}>
      <Tab.Screen
        name={Screens.HOME}
        component={ScreenSet.Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={Screens.MUSIC}
        component={ScreenSet.Music}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={Screens.CAMARA}
        component={ScreenSet.Camera}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={Screens.PROGRAM}
        component={ScreenSet.Program}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={ScreenSet.Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
