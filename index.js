/**
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import App from './App';
import { name as appName } from './app.json';

const PAPER_THEME = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#FFFFFF',
    accent: 'rgba(255, 164, 1, 1)',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: 'Georgia',
  },
};

function Main() {
  return (
    <PaperProvider theme={PAPER_THEME}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
