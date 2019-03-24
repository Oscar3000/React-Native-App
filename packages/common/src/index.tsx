/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterStoreContext } from './stores/CounterStore';

export const App = observer(() => {
  const CounterStore = useContext(CounterStoreContext);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{CounterStore.count}</Text>
        <Button title="increment" onPress={()=> CounterStore.count++}/>
      </View>
    );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});