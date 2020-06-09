import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import AppStack from 'navigations/AppStack'

import { ThemeLightProvider } from './contexts'

export default function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);


  return (
    <ThemeLightProvider value={{ isThemeLight, setIsThemeLight }}>
      <AppStack />
    </ThemeLightProvider>
  );
}

registerRootComponent(App);