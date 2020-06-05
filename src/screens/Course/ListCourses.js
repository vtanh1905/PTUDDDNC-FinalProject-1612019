import React from 'react'
import { StyleSheet, View } from 'react-native'
import ListCourseVertical from 'components/ListView/ListCourseVertical'

function ListCourses(props) {
  const { navigation, route } = props;
  const { title, data } = route.params;

  return (
    <View style={{ paddingBottom: 90 }}>
      <ListCourseVertical title={title} data={data} navigation={navigation} />
    </View>
  )
}

export default ListCourses
