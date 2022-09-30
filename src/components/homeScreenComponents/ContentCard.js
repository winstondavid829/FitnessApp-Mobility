import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Colors, Fonts, Keys} from '../../constants';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useFocusEffect} from '@react-navigation/native';

import {getUserFriendPost, getUserPost} from '../../services/Posts';
import {getKeys} from '../../utils/keyStorage';

const ContentCard = props => {
  const [fData, setFData] = useState([]);
  const [uData, setUData] = useState([]);
  const [name, setName] = useState('');

  const friendPosts = async () => {
    const userData = await getKeys(Keys.USER);
    console.log('the userr', userData.Result);
    const username =
      userData.Result.first_name + ' ' + userData.Result.last_name;

    setName(username);
    const payload = {
      user_id: userData.Result.ID,
    };

    getUserFriendPost(payload)
      .then(response => {
        setFData(response.data.Result);
        console.log(response.data.Result);
      })
      .catch(console.error);
  };

  const userPosts = async () => {
    const userData = await getKeys(Keys.USER);
    const payload = {
      user_id: userData.Result.ID,
      email: userData.Result.email,
    };

    getUserPost(payload)
      .then(response => {
        console.log('the users posts ===', response.data.Result[0].posts);
        setUData(response.data.Result[0].posts);
      })
      .catch(console.error);
  };

  useFocusEffect(
    useCallback(() => {
      friendPosts();
      userPosts();
    }, []),
  );

  const RenderItem = ({item}) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.headerImageContainer}>
          {item.profilePicture ? (
            <Image
              source={{uri: `${item.profilePicture}`}}
              style={styles.proPic}
            />
          ) : (
            <View style={styles.proPic} />
          )}

          <Text style={styles.userName}>
            {item.friends.friendsdata.first_name +
              ' ' +
              item.friends.friendsdata.last_name}
          </Text>
        </View>
        <Ionicons
          name="ellipsis-vertical-outline"
          size={25}
          color={Colors.BACKGROUND}
        />
      </View>
      <Image source={{uri: `${item.image}`}} style={styles.uploadImage} />
      <View style={styles.cardFooter}>
        <View style={styles.footerStartContainer}>
          <Ionicons name="heart-outline" size={25} color={Colors.BACKGROUND} />
          <Ionicons
            name="chatbox-outline"
            size={25}
            color={Colors.BACKGROUND}
            style={{marginLeft: 5}}
          />
          <Ionicons
            name="paper-plane-outline"
            size={25}
            color={Colors.BACKGROUND}
            style={{marginLeft: 5}}
          />
        </View>
        <Ionicons
          name="bookmark-outline"
          size={25}
          color={Colors.BACKGROUND}
          style={{marginLeft: 5}}
        />
      </View>
    </View>
  );

  const RenderItemUser = ({item, user}) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.headerImageContainer}>
          {item.profilePicture ? (
            <Image
              source={{uri: `${item.profilePicture}`}}
              style={styles.proPic}
            />
          ) : (
            <View style={styles.proPic} />
          )}

          <Text style={styles.userName}>{user}</Text>
        </View>
        <Ionicons
          name="ellipsis-vertical-outline"
          size={25}
          color={Colors.BACKGROUND}
        />
      </View>
      <Image source={{uri: `https:${item.post}`}} style={styles.uploadImage} />
      <View style={styles.cardFooter}>
        <View style={styles.footerStartContainer}>
          <Ionicons name="heart-outline" size={25} color={Colors.BACKGROUND} />
          <Ionicons
            name="chatbox-outline"
            size={25}
            color={Colors.BACKGROUND}
            style={{marginLeft: 5}}
          />
          <Ionicons
            name="paper-plane-outline"
            size={25}
            color={Colors.BACKGROUND}
            style={{marginLeft: 5}}
          />
        </View>
        <Ionicons
          name="bookmark-outline"
          size={25}
          color={Colors.BACKGROUND}
          style={{marginLeft: 5}}
        />
      </View>
    </View>
  );

  return (
    <View>
      {fData?.map(item => (
        <RenderItem item={item} />
      ))}
      {uData?.map(item => (
        <RenderItemUser item={item} user={name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 3,
    // height: responsiveHeight(60),
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    height: responsiveHeight(7),
    alignItems: 'center',
    padding: 10,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    justifyContent: 'space-between',
  },
  proPic: {
    width: responsiveHeight(5),
    height: responsiveHeight(5),
    borderRadius: 1000,
    backgroundColor: Colors.GREY,
  },
  userName: {
    fontFamily: Fonts.boldFont,
    color: Colors.BLACK,
    marginLeft: 15,
  },
  uploadImage: {
    // width:'100%',
    // height:responsiveHeight(43),
    aspectRatio: 1,
  },
  cardFooter: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  captionContainer: {
    padding: 5,
    flexDirection: 'row',
  },
  captionText: {
    color: Colors.BLACK,
    fontFamily: Fonts.boldFont,
  },
  likesContainer: {
    padding: 5,
  },
  likesText: {
    fontFamily: Fonts.boldFont,
    color: Colors.BLACK,
  },
  headerImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerStartContainer: {
    flexDirection: 'row',
  },
});

export default ContentCard;

//dummy data
