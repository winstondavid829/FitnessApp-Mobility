import { View, Text } from "react-native";
import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import FlashMessage from "react-native-flash-message";

import Routes from './src/routes'

const App = () => {

  return (
    <>
      <Routes />
      {/* <FlashMessage position="top" /> */}
    </>
  );
};

export default App;
