import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

interface CustomImageProps {
  uri: string;
  onPress: () => void;
}

const SmallPicture: React.FC<CustomImageProps> = ({uri, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{uri}} style={styles.image} resizeMode="cover" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
});

export default SmallPicture;
