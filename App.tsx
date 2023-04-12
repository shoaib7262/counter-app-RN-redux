import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyCounter from './src/myComponents/MyCounter';
import {Provider} from 'react-redux';
import {store} from './src/myComponents/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MyCounter />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
