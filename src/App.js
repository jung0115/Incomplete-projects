import { StatusBar } from 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
    </ThemeProvider>
  );
}

export default App;
