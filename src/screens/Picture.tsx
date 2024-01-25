import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
export type pictureType = {
  uri: string;
  name: string;
  longitude: string;
  latitude: string;
};
const Picture: React.FC = () => {
  const route = useRoute();
  const {picture} = route.params as {picture: pictureType};
  const [gps, setGps] = useState<string>('');
  const token = 'AIzaSyBpxU2kM_RZ5Foo7U-1EsvfCrAvqWtX2-Q';

  const getAdress = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${picture.latitude},${picture.longitude}&key=${token}`,
      );
      console.log(response.data.results[0].formatted_address);
      setGps(response.data.results[0].formatted_address);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdress();
  });
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: picture.uri,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      {gps ? (
        <Text>{gps}</Text>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: '0.75',
  },
});

export default Picture;
