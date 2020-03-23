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
import DatabaseContextProvider from './src/contexts/dataseContext';


const App = () => {
  return (
    <ThemeContextProvider>
      <DatabaseContextProvider>
        <MainScreen />
      </DatabaseContextProvider>
    </ThemeContextProvider>
  );;
};

export default App;
