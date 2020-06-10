import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';

import Path from './Path'

function ListPath(props) {
  const { title, data, lightTheme, navigation } = props;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
        <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15 }} onPress={() => navigation.navigate('ListCourses')}>See all</Badge>
      </View>
      <View style={styles.listCard}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {data.map((course, index) => (
            <View style={styles.card} key={index}>
              <Path image={course.image} title={course.title} subTitle={course.subTitle} navigation={navigation} lightTheme={lightTheme} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View >
  )
}

export default ListPath

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
