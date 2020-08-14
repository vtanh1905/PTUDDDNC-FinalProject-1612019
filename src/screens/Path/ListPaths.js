import React, { useContext } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import ListPath from 'components/ListView/ListPath'

import { PATHS } from '../../assets/data'
import ThemeContext from '../../contexts/ThemeContext'

function ListPaths(props) {
  const { navigation } = props;
  const { themeLight } = useContext(ThemeContext)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginVertical: 15 }}>
        <ListPath title="Conferences" data={PATHS} navigation={navigation} lightTheme={themeLight.isLightTheme} />
      </View>

      <View style={{ marginVertical: 15 }}>
        <ListPath title="Certification" data={PATHS} navigation={navigation} lightTheme={themeLight.isLightTheme} />
      </View>

      <View style={{ marginVertical: 15 }}>
        <ListPath title="Software Development" data={PATHS} navigation={navigation} lightTheme={themeLight.isLightTheme} />
      </View>

      <View style={{ marginVertical: 15 }}>
        <ListPath title="IT Ops" data={PATHS} navigation={navigation} lightTheme={themeLight.isLightTheme} />
      </View>
    </ScrollView>
  )
}

export default ListPaths
