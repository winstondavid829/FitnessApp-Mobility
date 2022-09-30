import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {Colors, Fonts, Images, Screens, Keys} from '../../constants';
import {CustomButton, CustomTextInput} from '../../components';
import {navigate} from '../../utils/navigationServices';
import {userSignin} from '../../services/Signin';
import {setKeys} from '../../utils/keyStorage';

const SignIn = () => {
  const [textName, setTextName] = useState('');
  const [textPassWord, setTextPassword] = useState('');

  //user login

  const userLogin = () => {
    const payload = {
      Password: textPassWord,
      email: textName,
    };

    userSignin(payload)
      .then(response => {
        console.log('the user Data', response.data);
        setKeys(Keys.USER, JSON.stringify(response.data));
        navigate(Screens.TAB_NAVIGATION);
      })
      .catch(erorr => {
        alert('Email or Password incorrect!');
        console.log(erorr);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.RedSignUpIcon} style={styles.image} />
        <Text style={styles.heading}>Sign In</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            textInput={{
              value: textName,
              onChangeText: setTextName,
              placeholder: 'UserName',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
            }}
          />
          <CustomTextInput
            textInput={{
              value: textPassWord,
              onChangeText: setTextPassword,
              placeholder: 'Password',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
              secureTextEntry: true,
              secureTextEntry: true,
            }}
          />
        </View>

        <View style={styles.button}>
          <CustomButton
            title="SignIn"
            backgroundColor={Colors.LIGHTRED1}
            textColor={Colors.WHITE}
            onPress={userLogin}
          />
        </View>
        <TouchableOpacity style={styles.forgotpassword}>
          <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.signUpButton}>
          <Text style={styles.forgotpasswordText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.forgotpassword}
            onPress={() => navigate(Screens.SIGN_UP)}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  image: {},
  button: {
    width: '70%',
    marginTop: 30,
  },
  inputContainer: {
    width: '70%',
  },
  textInput: {
    color: Colors.BLACK,
    fontFamily: Fonts.regularFont,
    fontSize: 12,
    marginTop: -2,
    marginLeft: 10,
  },
  forgotpassword: {
    marginVertical: 10,
  },
  forgotpasswordText: {
    color: Colors.BLACK,
  },
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontFamily: Fonts.regularFont,
    color: Colors.BLACK,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  questionText: {
    fontFamily: Fonts.regularFont,
    color: Colors.BLACK,
  },
  heading: {
    fontFamily: Fonts.boldFont,
    color: Colors.BLACK,
    fontSize: 25,
    marginVertical: 20,
  },
});

export default SignIn;
