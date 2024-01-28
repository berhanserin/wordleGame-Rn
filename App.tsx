import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '@/pages/home';
import Game from '@/pages/game';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none',
            animationTypeForReplace: 'pop',
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
