import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import { connect } from 'react-redux';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import ListCourseVertical from 'components/ListView/ListCourseVertical'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

function ListCoursesHasData(props) {
  const { navigation, route } = props;
  const { title, data } = route.params;
  const { themeLight } = useContext(ThemeContext)


  return (
    <View style={{ paddingBottom: 90 }}>
      <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25, color: themeLight.isLightTheme ? "#000000" : "#FFFFFF" }}>{title}</Text>
      <ListCourseVertical title={title} data={data} navigation={navigation} lightTheme={themeLight.isLightTheme} />
    </View>
  )
}

export default ListCoursesHasData
