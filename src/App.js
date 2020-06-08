import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import AppStack from 'navigations/AppStack'

import { ThemeProvider } from './contexts'

export default function App() {
  const [theme, setTheme] = useState({

  })


  return (
    <ThemeProvider value={{}}>
      <AppStack />
    </ThemeProvider>
  );
}

registerRootComponent(App);