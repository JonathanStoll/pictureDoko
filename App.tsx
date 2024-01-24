/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import Picture from './src/screens/Picture';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  Home: undefined;
  Picture: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  useEffect(() => SplashScreen.hide(), []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Picture" component={Picture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
