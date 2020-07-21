import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux';

import { Req_Category_GetCourse } from '../../reducers/category/API_Category_GetCourse'
import ListCourseVertical from 'components/ListView/ListCourseVertical'
import ThemeContext from '../../contexts/ThemeContext'

function ListCourses(props) {
  const { navigation, route, API_Category_GetCourse, Req_Category_GetCourse } = props;
  const { data } = route.params;
  const { themeLight } = useContext(ThemeContext)

  useEffect(() => {
    Req_Category_GetCourse(data.id);
  }, [])

  return (
    <>
      {(!API_Category_GetCourse.loading && API_Category_GetCourse.data !== null) ?
        <View style={{ paddingBottom: 90 }}>
          <ListCourseVertical title={data.name} data={API_Category_GetCourse.data.rows} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        </View> :
        <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
          <ActivityIndicator color="#0069D9" size={100} />
        </View>
      }
    </>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Category_GetCourse
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ListCourses);
