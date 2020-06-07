import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Badge } from 'react-native-paper';

import ListCourses from './ListCourses'
import ListPaths from './ListPaths'
import ListAuthors from './ListAuthors'

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
  {
    name: '6.State and Props',
    avatar_url: 'https://www.pngkey.com/png/detail/200-2009668_february-2016-survey-on-dr-lessons-icon.png',
    subtitle: '6 minutes 30 second'
  },
]

function ListAll(props) {
  const { jumpTo, navigation } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Courses</Text>
          <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("COURSES")}>See all</Badge>
        </View>
        <ListCourses navigation={navigation} />
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Paths</Text>
          <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("PATHS")}>See all</Badge>
        </View>
        <ListPaths navigation={navigation} />
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Authors</Text>
          <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("AUTHORS")}> See all</Badge>
        </View>
        <ListAuthors navigation={navigation} />
      </View>
    </ScrollView>
  )
}

export default ListAll

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
})
