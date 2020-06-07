import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { PATHS } from '../../assets/data'

function ListPaths() {
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
            onPress={() => console.log("123123")}
          />
        ))
      }

    </View>
  )
}

export default ListPaths
