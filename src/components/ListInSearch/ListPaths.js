import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { PATHS } from '../../assets/data'

function ListPaths(props) {
  const { lightTheme } = props;
  return (
    <View>
      {
        PATHS.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.image }, rounded: false }}
            title={l.title}
            subtitle={l.subTitle}
            bottomDivider
            titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            linearGradientProps={!lightTheme ? {
              colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
            } : null}
            subtitleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            onPress={() => console.log("123123")}
          />
        ))
      }

    </View>
  )
}

export default ListPaths
