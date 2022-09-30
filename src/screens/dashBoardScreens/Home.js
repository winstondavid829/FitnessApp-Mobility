import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect,useState} from 'react';

import {HomeHeader, ContentCard} from '../../components';
import {getUserFriendPost} from '../../services/Posts';
import {getKeys} from '../../utils/keyStorage';
import {Keys} from '../../constants';

const Home = () => {
 


  return (
    <View>
      <HomeHeader />
      <ScrollView style={styles.container}>
        <ContentCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
