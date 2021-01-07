import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Greeting } from './components/atoms'

const App = () => (
  <View style={styles.container}>
    <Text>Hello World !</Text>
    <Greeting name='Salman Ahmed' />
    <StatusBar style="auto" />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
