import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import AppStack from 'navigations/AppStack'

import { ThemeContextProvider } from './contexts'
import { THEME_LIGHT, THEME_DARK } from './styles'
import { UserContextProvider } from './contexts'

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  const [themeLight, setThemeLight] = useState({
    isLightTheme: true,
    styles: THEME_LIGHT
  });
  const [user, setUser] = useState([
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
    <Provider store={store}>
      <UserContextProvider value={{ user, setUser }}>
        <ThemeContextProvider value={{ themeLight, setThemeLight }}>
          <AppStack />
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
}

registerRootComponent(App);