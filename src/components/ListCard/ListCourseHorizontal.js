import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';

import CardCourse from './CardCourse'

function ListCardCourse(props) {
  const { title, dataCourses, onPressSeeAll } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={onPressSeeAll}>See all</Badge>
      </View>
      <View style={styles.listCard}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {dataCourses.map((course, index) => (
            <View style={styles.card} key={index}>
              <CardCourse image={course.image} title={course.title} subTitle={course.subTitle} rate={course.rate} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListCardCourse

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
