import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading, Title, Avatar, Divider, Headline } from 'react-native-paper';
import { Switch } from 'react-native-paper';

import ThemeContext from '../../contexts/ThemeContext'
import { THEME_LIGHT, THEME_DARK } from '../../styles'

function Setting() {
  const { themeLight, setThemeLight } = useContext(ThemeContext)

  return (
    <View>
      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Dark Theme</Subheading >
        <Switch
          value={!themeLight.isLightTheme}
          onValueChange={(value) => setThemeLight({ isLightTheme: !value, styles: value ? THEME_DARK : THEME_LIGHT })}
        />
      </View>

      {/* <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Require Wifi for streamming</Subheading >
        <Switch
          value={true}
        />
      </View>

      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Require Wifi for dowwnloading</Subheading >
        <Switch
          value={true}
        />
      </View>

      <View style={styles.fieldView}>
        <Subheading style={themeLight.styles.text}>Show quiz at the end of video</Subheading >
        <Switch
          value={true}
        />
      </View> */}

    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldView: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})