import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors, Images, Keys, Screens} from '../../constants';
import {getKeys} from '../../utils/keyStorage';
import {navigate} from '../../utils/navigationServices';

const Splash = () => {
  const [user, setUser] = useState(null);

  const setLog = async () => {
    const islogged = await getKeys(Keys.USER);
    setUser(islogged);
    console.log('the user is this ', islogged);

    if (islogged == null || islogged == undefined) {
      navigate(Screens.SIGN_IN);
    } else {
      navigate(Screens.TAB_NAVIGATION);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLog();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.RedSignUpIcon} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1,
    marginBottom: 100,
  },
});

export default Splash;
