import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigation from './DrawerNavigation';
import {navigationRef} from '../utils/navigationServices';

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Routes;
