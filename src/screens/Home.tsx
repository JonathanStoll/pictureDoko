import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera} from 'react-native-image-picker';
import SmallPicture from '../components/SmallPicture';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Geolocation from '@react-native-community/geolocation';

export type ImageType = {
  uri: string;
  type: string;
  name: string;
};

export type pictureType = {
  uri: string;
  name: string;
  longitude: string;
  latitude: string;
};

const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const [pictures, setPictures] = useState<pictureType[]>();
  const options = {
    mediaType: 'photo',
    title: 'Select Image',
    maxWidth: 2000,
    masHeight: 2000,
    includeExtra: true,
  };

  const navigateToImg = (picture: pictureType) => {
    navigation.navigate('Picture', {picture});
  };

  const takePicture = async () => {
    try {
      let newCoords: {longitude: string; latitude: string} = {
        longitude: '',
        latitude: '',
      };
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      const allPermissionsGranted = Object.values(granted).every(
        status => status === PermissionsAndroid.RESULTS.GRANTED,
      );

      if (allPermissionsGranted) {
        await Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            newCoords = {
              longitude: longitude.toString(),
              latitude: latitude.toString(),
            };
          },
          error => console.log('Error', error.message),
        );
        const result = (await launchCamera(options as any)) as {
          assets: ImageType[];
        };
        console.log(newCoords);
        const newPicture = {
          uri: result.assets[0].uri,
          name: result.assets[0].name,
          longitude: newCoords.longitude,
          latitude: newCoords.latitude,
        };
        setPictures([...(pictures || []), newPicture]);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pictures}
        renderItem={item => {
          return (
            <SmallPicture
              uri={item.item.uri}
              onPress={() => navigateToImg(item.item)}
            />
          );
        }}
        numColumns={3}
      />
      <Pressable style={styles.buttonContainer} onPress={takePicture}>
        <Text style={styles.buttonText}>Take Picture</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
