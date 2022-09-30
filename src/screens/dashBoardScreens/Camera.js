import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {useFocusEffect} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import {CustomButton, CustomTextInput, HomeHeader} from '../../components';
import {Colors, Fonts, Keys} from '../../constants';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import {postToGC, createUserPost} from '../../services/Posts';
import {getKeys} from '../../utils/keyStorage';
import NetworkError from '../NetworkError';

const Camera = props => {
  const [image, setImage] = useState();
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState('');

  const [connectionState, setConnectionState] = useState('');

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.type);
    });
    return () => subscribe();
  }, []);

  const postImage = async () => {
    const userData = await getKeys(Keys.USER);
    let formData = new FormData();
    formData.append('file', {
      uri: image,
      name: name,
      type: type,
    });
    console.log(formData);

    postToGC(formData)
      .then(response => {
        console.log('the image resopose', response.data);

        const payload = {
          user_id: userData.Result.ID,
          description: 'After longtime #Hometown #Back Home',
          location: 'Batticaloa',
          post: response.data.Path,
        };

        createUserPost(payload)
          .then(response => {
            console.log(response.data);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const onClickOpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setName(image.modificationDate);
      setType(image.mime);
    });
  };

  useFocusEffect(
    useCallback(() => {
      setImage(null);
      if (connectionState !== 'none') {
        onClickOpenCamera();
      }
    }, []),
  );

  return (
    <>
      {connectionState !== 'none' ? (
        <ScrollView style={styles.container}>
          <View style={styles.imageContainer}>
            <Text style={styles.mainheading}>Post</Text>
            {image != null ? (
              <Image source={{uri: image}} style={styles.image} />
            ) : (
              <TouchableOpacity
                onPress={onClickOpenCamera}
                style={styles.emptyImage}></TouchableOpacity>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Enter Description Below :</Text>
            <CustomTextInput
              height={200}
              textInput={{
                value: description,
                onChangeText: setDescription,
                placeholder: 'Enter here',
                placeholderTextColor: Colors.GREY,
                style: styles.textInput,
              }}
            />
            <CustomButton
              title="Submit"
              backgroundColor={Colors.LIGHTRED1}
              textColor={Colors.WHITE}
              onPress={postImage}
            />
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
  },
  image: {
    width: '100%',
    height: responsiveScreenHeight(40),
    borderRadius: 5,
  },
  textInput: {
    color: Colors.BLACK,
    fontFamily: Fonts.regularFont,
    fontSize: 12,
    marginTop: -2,
    marginLeft: 10,
  },
  inputContainer: {
    padding: 10,
  },
  heading: {
    fontFamily: Fonts.mediumFont,
    color: Colors.BLACK,
  },
  imageContainer: {
    padding: 10,
  },
  mainheading: {
    fontFamily: Fonts.boldFont,
    color: Colors.BLACK,
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  emptyImage: {
    width: '100%',
    height: responsiveScreenHeight(40),
    backgroundColor: Colors.GREY,
    borderRadius: 5,
  },
});

export default Camera;
