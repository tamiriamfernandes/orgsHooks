import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
