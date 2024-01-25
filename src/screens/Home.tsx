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
export type ImageType = {
  uri: string;
  type: string;
  name: string;
};
export type picture = {
  uri: string;
  name: string;
};

const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const [pictures, setPictures] = useState<picture[]>();
  const options = {
    mediaType: 'photo',
    title: 'Select Image',
    maxWidth: 2000,
    masHeight: 2000,
    includeExtra: true,
  };

  const navigateToImg = (uri: string) => {
    navigation.navigate('Picture', {uri});
  };

  const takePicture = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = (await launchCamera(options as any)) as {
        assets: ImageType[];
      };
      const newPicture = {
        uri: result.assets[0].uri,
        name: result.assets[0].name,
      };
      setPictures([...(pictures || []), newPicture]);
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
              onPress={() => navigateToImg(item.item.uri)}
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
