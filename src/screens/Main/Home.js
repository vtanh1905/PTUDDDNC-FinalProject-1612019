import React from 'react'
import { View, ScrollView } from 'react-native';

import ListCourseHorizontal from 'components/ListView/ListCourseHorizontal'

import { LISTCOURSES } from '../../assets/data'

function Home(props) {
  const { navigation } = props;
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCourseHorizontal title={LISTCOURSES[0].title} data={LISTCOURSES[0].courses} navigation={navigation} />
        {/* <ListCourseHorizontal title="List Courses" data={COURSES} navigation={navigation} />
        <ListCourseHorizontal title="List Courses" data={COURSES} navigation={navigation} />
        <ListCourseHorizontal title="List Courses" data={COURSES} navigation={navigation} /> */}
      </ScrollView>
    </View>
  )
}

export default Home
