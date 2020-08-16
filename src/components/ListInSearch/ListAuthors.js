import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ListItem } from 'react-native-elements'

function ListAuthors(props) {
  const { lightTheme, data, navigation } = props;

  if (data.length === 0) {
    return (
      <View style={styles.centered}>
        <Icon name="file-search-outline" size={100} color="gray" />
        <Text style={{ fontSize: 17, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>Not Found</Text>
      </View>
    )
  }

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
            onPress={() => navigation.navigate('Author Detail', { data: l, lightTheme: lightTheme })}
          />
        ))
      }

    </View>
  )
}

export default ListAuthors

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
})
