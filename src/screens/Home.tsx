import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const navigateToImg = () => {
    navigation.navigate('Picture');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Pressable style={styles.buttonContainer} onPress={navigateToImg}>
        <Text style={styles.buttonText}>Home</Text>
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
