import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

function ListAuthors(props) {
  const { lightTheme, data, navigation } = props;

  return (
    <View>
      {
        data.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar } }}
            title={l.name}
            subtitle={l.numcourses + " courses"}
            bottomDivider
            titleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            linearGradientProps={!lightTheme ? {
              colors: ['rgb(60, 63, 68)', "rgb(60, 63, 68)"],
            } : null}
            subtitleStyle={{ color: lightTheme ? "#000000" : "#FFFFFF" }}
            onPress={() => navigation.navigate('AuthorDetailCallAPI', { data: l, lightTheme: lightTheme })}
          />
        ))
      }

    </View>
  )
}

export default ListAuthors
