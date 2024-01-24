import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const FullScreenImage: React.FC<{imageUrl: string}> = ({imageUrl}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default FullScreenImage;
