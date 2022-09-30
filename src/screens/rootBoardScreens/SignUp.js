import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {Colors, Fonts, Images, Screens} from '../../constants';
import {CustomButton, CustomTextInput} from '../../components';
import {navigate} from '../../utils/navigationServices';
import {userRegister} from '../../services/Signup';

const SignUp = () => {
  const [textFName, setTextFName] = useState('');
  const [textLName, setTextLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [textPassword, setTextPassword] = useState('');

  //user sign up

  const signUpUser = () => {
    const payload = {
      first_name: textFName,
      last_name: textLName,
      Password: textPassword,
      email: email,
      phone: phone,
    };
    userRegister(payload)
      .then(response => {
        navigate(Screens.SIGN_IN);
        console.log(response);
        alert('User Registerd!');
      })
      .catch(erorr => {
        alert('Something went wrong!');
        console.log(erorr);
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Images.RedSignUpIcon} style={styles.image} />
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            textInput={{
              value: textFName,
              onChangeText: setTextFName,
              placeholder: 'First Name',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
            }}
          />
          <CustomTextInput
            textInput={{
              value: textLName,
              onChangeText: setTextLName,
              placeholder: 'Last Name',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
            }}
          />
          <CustomTextInput
            textInput={{
              value: email,
              onChangeText: setEmail,
              placeholder: 'Email',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
            }}
          />
          <CustomTextInput
            textInput={{
              value: phone,
              onChangeText: setPhone,
              placeholder: 'Phone',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
            }}
          />
          <CustomTextInput
            textInput={{
              value: textPassword,
              onChangeText: setTextPassword,
              placeholder: 'Password',
              placeholderTextColor: Colors.GREY,
              style: styles.textInput,
              secureTextEntry: true,
            }}
          />
        </View>

        <View style={styles.button}>
          <CustomButton
            title="Sign Up"
            backgroundColor={Colors.LIGHTRED1}
            textColor={Colors.WHITE}
            onPress={signUpUser}
          />
        </View>

        <View style={styles.signUpButton}>
          <Text style={styles.forgotpasswordText}>
            Already have an account?
          </Text>
          <TouchableOpacity
            style={styles.forgotpassword}
            onPress={() => navigate(Screens.SIGN_IN)}>
            <Text style={styles.signupText}>Sign in</Text>
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

export default SignUp;
