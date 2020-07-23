import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { TouchableRipple } from 'react-native-paper';

import TabView from '../components/TabView'

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}


function ListLesson(props) {
  const { lightTheme, data } = props;
  return (
    <View>
      {
        data.map((s, i) => (
          <>
            <Text style={{ fontWeight: "bold", borderBottomWidth: 1, borderBottomColor: "gray", paddingHorizontal: 10, paddingVertical: 10 }}>Chương {i + 1}: {s.name}</Text>
            {
              s.lesson.map((l, j) => (
                <ListItem
                  key={j}
                  leftAvatar={{ source: { uri: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png' }, rounded: false }}
                  title={l.numberOrder + ". " + l.name}
                  subtitle={formatTime(l.hours)}
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
          </>
        ))
      }
    </View>
  )
}

export default ListLesson
