import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import ListCourseVertical from 'components/ListView/ListCourseVertical'
import ThemeContext from '../../contexts/ThemeContext'

function ListCourses(props) {
  const { navigation, route } = props;
  const { title, data } = route.params;
  const { themeLight } = useContext(ThemeContext)

  return (
    <View style={{ paddingBottom: 90 }}>
      <ListCourseVertical title={title} data={data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
    </View>
  )
}

export default ListCourses
