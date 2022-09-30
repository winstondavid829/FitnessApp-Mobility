import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {Colors, Fonts} from '../../constants';

const Messure = props => {
  const [mType, setMType] = useState(props.typeOne);
  const [value, setValue] = useState('');

  const onClickContinue = () => {
    if(value != ''){
      const current = (parseInt(props.cStep) + 1).toString();
      props.sStep(current);
      props.setValue(value);
      setValue('');

    }else{
      alert('Enter a value!!')
    }
  
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.steps}>Step {props.stepNumber} of 6</Text>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: mType === props.typeOne ? Colors.WHITE : '#F1F4F8',
            flex: 1,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setMType(props.typeOne)}>
          <Text style={styles.text}>{props.typeOne}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: mType === props.typeTwo ? Colors.WHITE : '#F1F4F8',
            flex: 1,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setMType(props.typeTwo)}>
          <Text style={styles.text}>{props.typeTwo}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput
            value={value}
            style={{color: Colors.BLACK}}
            onChangeText={text => setValue(text)}
          />
        </View>
        {mType === props.typeOne ? (
          <Text style={styles.messureText}>{props.typeOne}</Text>
        ) : (
          <Text style={styles.messureText}>{props.typeTwo}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={onClickContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#F1F4F8',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  mainContainer: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
    fontSize: 20,
    marginBottom: 20,
  },
  steps: {
    alignSelf: 'center',
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
    fontSize: 17,
    marginBottom: 50,
  },
  feet: mType => ({
    backgroundColor: mType === props.typeOne ? Colors.WHITE : '#F1F4F8',
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  meters: mType => ({
    backgroundColor: mType === 'Meters' ? Colors.WHITE : '#F1F4F8',
    flex: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: {
    fontFamily: Fonts.boldFont,
    color: Colors.TEXTCOlOR,
  },
  inputContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  input: {
    width: 100,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: Colors.GREY,
  },
  messureText: {
    fontFamily: Fonts.mediumFont,
    color: Colors.BLACK,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'red',
    marginTop: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.WHITE,
    alignSelf: 'center',
    marginVertical: 20,
    fontFamily: Fonts.regularFont,
  },
});

export default Messure;
