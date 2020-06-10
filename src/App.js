import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import AppStack from 'navigations/AppStack'

import { ThemeContextProvider } from './contexts'
import { THEME_LIGHT, THEME_DARK } from './styles'

export default function App() {
  const [themeLight, setThemeLight] = useState({
    isLightTheme: true,
    styles: THEME_LIGHT
  });


  return (
    <ThemeContextProvider value={{ themeLight, setThemeLight }}>
      <AppStack />
    </ThemeContextProvider>
  );
}

registerRootComponent(App);