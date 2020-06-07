import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

import { AUTHORS } from '../../assets/data'

function ListAuthors() {
  return (
    <View>
      {
        AUTHORS.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.imageURL } }}
            title={l.name}
            subtitle={l.countCourses + " courses"}
            bottomDivider
            onPress={() => console.log("123123")}
          />
        ))
      }

    </View>
  )
}

export default ListAuthors
