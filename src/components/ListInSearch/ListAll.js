import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Badge } from 'react-native-paper';

import ListCourses from './ListCourses'
import ListPaths from './ListPaths'
import ListAuthors from './ListAuthors'

function ListAll(props) {
  const { jumpTo, navigation, lightTheme, dataCourses, dataInstructors } = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: lightTheme ? "#000000" : "#FFFFFF" }}>Courses</Text>
          {dataCourses.length !== 0 && <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("COURSES")}>See all</Badge>}
        </View>
        <ListCourses navigation={navigation} lightTheme={lightTheme} data={dataCourses} />

        {/* <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: lightTheme ? "#000000" : "#FFFFFF" }}>Paths</Text>
          <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("PATHS")}>See all</Badge>
        </View>
        <ListPaths navigation={navigation} lightTheme={lightTheme} /> */}
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: lightTheme ? "#000000" : "#FFFFFF" }}>Authors</Text>
          {dataInstructors.length !== 0 && <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => jumpTo("AUTHORS")}> See all</Badge>}
        </View>
        <ListAuthors navigation={navigation} lightTheme={lightTheme} data={dataInstructors} />
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
