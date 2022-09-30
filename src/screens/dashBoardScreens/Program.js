import {View, ScrollView, StyleSheet, Text, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import CircularProgress from 'react-native-circular-progress-indicator';
import NetInfo from '@react-native-community/netinfo';

import {HomeHeader, SelectionSection, Messure} from '../../components';
import {Colors, Fonts} from '../../constants';
import {getUserBmi} from '../../services/Bmi';
import NetworkError from '../NetworkError';

const Program = () => {
  const [step, setStep] = useState('1');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  console.log(height.toString(), weight, step);

  const [connectionState, setConnectionState] = useState('');

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.type);
    });
    return () => subscribe();
  }, []);

  const getBmi = () => {
    const payload = {
      user_id: '632ea8f6de97d8ee23dda2a4',
      height: height.toString(),
      Weight: weight.toString(),
    };

    getUserBmi(payload)
      .then(response => {
        console.log(response.data);
        Alert.alert('Your BMI', `${response.data.Result}`);
      })
      .catch(console.error);
  };

  const values = {
    activeStrokeWidth: responsiveWidth(7),
    inActiveStrokeWidth: responsiveWidth(7),
    inActiveStrokeOpacity: 0.6,
  };

  return (
    <>
      {connectionState !== 'none' ? (
        <ScrollView style={styles.container}>
          <HomeHeader />
          <View style={styles.selectionContainer}>
            {step === '1' ? (
              <Messure
                title="Select Height"
                typeOne="Feet"
                typeTwo="CM"
                cStep={step}
                sStep={setStep}
                setValue={setHeight}
              />
            ) : step === '2' ? (
              <Messure
                title="Select Weight"
                typeOne="KG"
                typeTwo="Pounds"
                cStep={step}
                sStep={setStep}
                setValue={setWeight}
              />
            ) : (
              <View style={styles.container2}>
                <Text style={styles.heading}>We are calculating your BMI</Text>
                <CircularProgress
                  {...values}
                  value={100}
                  radius={responsiveHeight(15)}
                  progressValueColor={'black'}
                  inActiveStrokeColor={'#696969'}
                  activeStrokeColor={'#F54242'}
                  maxValue={100}
                  valueSuffix={'%'}
                  duration={10000}
                  progressValueFontSize={40}
                  onAnimationComplete={() => {
                    getBmi();
                    setStep('1');
                  }}
                />
                <Text style={styles.heading}>
                  We are calculating your BMI according to Information you have
                  provided
                </Text>
              </View>
            )}
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
    backgroundColor: Colors.WHITE,
  },
  container2: {
    flex: 1,
    // justifyContent:'center',
    alignItems: 'center',
  },

  selectionContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Fonts.regularFont,
    margin: 15,
    alignSelf: 'center',
    fontSize: 15,
  },
  heading: {
    color: Colors.BLACK,
    fontFamily: Fonts.mediumFont,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
});

export default Program;
