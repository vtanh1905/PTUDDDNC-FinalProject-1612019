import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';

import AppStack from 'navigations/AppStack'

import { ThemeContextProvider } from './contexts'
import { THEME_LIGHT, THEME_DARK } from './styles'
import { UserContextProvider } from './contexts'

export default function App() {
  const [themeLight, setThemeLight] = useState({
    isLightTheme: true,
    styles: THEME_LIGHT
  });
  const [users, setUsers] = useState([
    {
      username: "admin",
      password: "123123",
      fullname: "Vũ Tuấn Anh",
      dob: "19/05/1998",
      email: "vtanh1905@gmail.com",
      phone: "0966996874"
    }
  ])

  return (
    <UserContextProvider value={{ users, setUsers }}>
      <ThemeContextProvider value={{ themeLight, setThemeLight }}>
        <AppStack />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

registerRootComponent(App);