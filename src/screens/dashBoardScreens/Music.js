import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useFocusEffect} from '@react-navigation/native';

import {MusicCard, HomeHeader} from '../../components';
import {musicList} from '../../services/Music';
import NetworkError from '../NetworkError';

const Music = () => {
  const [data, setData] = useState([]);
  const [connectionState, setConnectionState] = useState('');

  useEffect(() => {
    const subscribe = NetInfo.addEventListener(state => {
      setConnectionState(state.type);
    });
    return () => subscribe();
  }, []);

  // get music play  list

  const getMusicList = () => {
    musicList()
      .then(response => {
        setData(response.data.Result.Playlists);
      })
      .catch(console.error);
  };

  useFocusEffect(
    useCallback(() => {
      getMusicList();
    }, []),
  );

  return (
    <>
      <HomeHeader />
      {connectionState !== 'none' ? (
        <ScrollView style={styles.container}>
          {data.map((item, index) => (
            <MusicCard
              key={index}
              name={item.Name}
              image={item.Images[0].url}
              tracks={item.Tracks.total}
              urlLink={item.ExternalURLs.spotify}
            />
          ))}
        </ScrollView>
      ) : (
        <NetworkError />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Music;
