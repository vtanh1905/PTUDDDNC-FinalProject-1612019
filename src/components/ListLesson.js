import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

import TabView from '../components/TabView'

const list = [
  {
    name: '1.Introduce',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '8 minutes 30 second'
  },
  {
    name: '2.absVariable',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '6 minutes 30 second'
  },
  {
    name: '3.Introduce',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '15 minutes 39 second'
  },
  {
    name: '4.Function',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '6 minutes 00 second'
  },
  {
    name: '5.Class',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '7 minutes 30 second'
  },
  {
    name: '6.State and Props',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
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
