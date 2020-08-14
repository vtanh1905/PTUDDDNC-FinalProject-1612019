import React, { useContext, useEffect } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

import AuthStack from './AuthStack'
import DashboardStack from './DashboardStack'
import ThemeContext from '../contexts/ThemeContext'
import SplashScreen from '../screens/SplashScreen'

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    primary: '#000000',
    background: 'rgb(2, 2, 2)',
    card: 'rgb(60, 63, 68)',
    text: '#FFFFFF',
    border: 'rgb(199, 199, 204)',
  },
};

function AppStack(props) {
  const { themeLight } = useContext(ThemeContext)

  return (
    <NavigationContainer theme={themeLight.isLightTheme ? DefaultTheme : MyDarkTheme}>
      {/* {!themeLight.isLightTheme ? <StatusBar backgroundColor={themeLight.styles.background2.backgroundColor} barStyle={'light-content'} /> : <></>} */}
      <StatusBar backgroundColor={themeLight.isLightTheme ? '#FFFFFF' : 'rgb(60, 63, 68)'} barStyle={themeLight.isLightTheme ? 'dark-content' : 'light-content'} />
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="SPLASHSCREEN" component={SplashScreen} />
        <Stack.Screen name="AUTHSTACK" component={AuthStack} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack
