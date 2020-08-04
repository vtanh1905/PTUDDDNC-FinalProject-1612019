import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';

import CardCourse from './CardCourse'

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}

function ListCourseHorizontal(props) {
  const { title, data, lightTheme, navigation, showSeeAll } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
        {showSeeAll === undefined ? <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => navigation.navigate('ListCourses', { title, data })}>See all</Badge> : <></>}
      </View>
      <View style={styles.listCard}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {data.map((course, index) => (
            <View style={styles.card} key={index}>
              <CardCourse data={course} navigation={navigation} lightTheme={lightTheme} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListCourseHorizontal

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  listCard: {
    flexDirection: "row",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  card: {
    padding: 10
  }
})
