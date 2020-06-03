import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';

import AppStack from 'navigations/AppStack'

export default function App() {
  return (
    <AppStack />
  );
}

registerRootComponent(App);