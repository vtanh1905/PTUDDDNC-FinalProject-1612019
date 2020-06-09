import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

import AuthStack from './AuthStack'
import DashboardStack from './DashboardStack'

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: '#000000',
    background: 'rgb(2, 2, 2)',
    card: 'rgb(24, 27, 32)',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
  },
};

function AppStack() {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <StatusBar backgroundColor="rgb(24, 27, 32)" barStyle={'light-content'} />
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
        <Stack.Screen name="AUTHSTACK" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
