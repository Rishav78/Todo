/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainScreen from './screens/MainScreen/MainScreen';
import ThemeContextProvider from './src/contexts/ThemeContext';


const App = () => {
  return (
    <ThemeContextProvider>
      <MainScreen />
    </ThemeContextProvider>
  );;
};

export default App;
