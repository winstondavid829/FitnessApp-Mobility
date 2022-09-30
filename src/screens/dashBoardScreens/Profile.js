import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import NetInfo from '@react-native-community/netinfo';

import {Fonts, Colors, Keys, Screens, Images} from '../../constants';
import {removeKeys, getKeys} from '../../utils/keyStorage';
import {navigate, reset} from '../../utils/navigationServices';
import {HomeHeader} from '../../components';
import NetworkError from '../NetworkError';

const Profile = () => {
  const [connectionState, setConnectionState] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    getuseInfo();
    const subscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.type);
    });
    return () => subscribe();
  }, []);

  const onClickSignOut = () => {
    removeKeys(Keys.USER);
    navigate(Screens.SIGN_IN);
  };

  const getuseInfo = async () => {
    const userData = await getKeys(Keys.USER);
    setUsername(userData.Result.first_name + ' ' + userData.Result.last_name);
    setEmail(userData.Result.email);
    setMobile(userData.Result.phone);
  };

  return (
    <>
      {connectionState !== 'none' ? (
        <ScrollView style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}>
              <Image
                source={Images.SignUpIcon}
                style={{width: 150, height: 150}}
              />
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.lable}>Username</Text>
            <Text style={styles.nameText}>{username}</Text>
            <View style={styles.line} />
            <Text style={styles.lable}>Email</Text>
            <Text style={styles.nameText}>{email}</Text>
            <View style={styles.line} />
            <Text style={styles.lable}>Mobile</Text>
            <Text style={styles.nameText}>{mobile}</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.signOutContainer}>
            <TouchableOpacity style={styles.signOut} onPress={onClickSignOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <>
          <HomeHeader />
          <NetworkError />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // padding: 20,
  },
  profileImage: {
    width: responsiveScreenWidth(50),
    height: responsiveScreenWidth(50),
    backgroundColor: Colors.BLACK,
    borderRadius: 100,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    marginTop: 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    height: responsiveScreenHeight(40),
    justifyContent: 'center',
    width: '95%',
    padding: 10,
    alignSelf: 'center',
  },
  nameText: {
    fontFamily: Fonts.regularFont,
    color: Colors.BLACK,
    // textAlign: 'center',
    // fontSize: 18,
    marginVertical: 3,
  },
  signOutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  signOutText: {
    color: Colors.LIGHTRED1,
    fontFamily: Fonts.boldFont,
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.LIGHTRED1,
  },
  lable: {
    fontFamily: Fonts.mediumFont,
    color: Colors.GREY,
  },
  line: {
    height: 1,
    backgroundColor: Colors.GREY,
    marginBottom: 5,
  },
});

export default Profile;
