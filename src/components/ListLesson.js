import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

const list = [
  {
    name: '1.Introduce',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '8 minutes 30 second'
  },
  {
    name: '2.absVariable',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '6 minutes 30 second'
  },
  {
    name: '3.Introduce',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '15 minutes 39 second'
  },
  {
    name: '4.Function',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '6 minutes 00 second'
  },
  {
    name: '5.Class',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '7 minutes 30 second'
  },
  {
    name: '6.State and Props',
    avatar_url: 'https://hocban.vn/wp-content/uploads/2017/06/Nhung-chen-javascript-vao-html-scaled.jpg',
    subtitle: '6 minutes 30 second'
  },
]

function ListLesson() {
  return (
    <View>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url }, rounded: false }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            onPress={() => console.log("123123")}
          />
        ))
      }
    </View>
  )
}

export default ListLesson
