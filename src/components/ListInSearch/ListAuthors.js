import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

import { AUTHORS } from '../../assets/data'

function ListAuthors(props) {
  const { lightTheme } = props;
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

export default ListAuthors
