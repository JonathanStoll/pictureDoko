import React from 'react';
import {Image, Pressable, StyleSheet, Dimensions} from 'react-native';

interface CustomImageProps {
  uri: string;
  onPress: () => void;
}

const deviceWidth = Dimensions.get('window').width;

const SmallPicture: React.FC<CustomImageProps> = ({uri, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri}} style={styles.image} resizeMode="cover" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: (deviceWidth - 64) / 3,
    aspectRatio: 1,
    borderRadius: 5,
    margin: 8,
  },
  container: {
    elevation: 5,
  },
});

export default SmallPicture;
