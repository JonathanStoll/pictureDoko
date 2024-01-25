import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Picture: React.FC = () => {
  const route = useRoute();
  const {uri} = route.params as {uri: string};
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.image}
        resizeMode="cover"
      />
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
