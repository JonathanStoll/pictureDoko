import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Picture: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.myamericanmarket.com/media/catalog/product/cache/e14a284ad83acfa28068f240695baba3/m/o/mo-nit_1.jpg',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Picture;
