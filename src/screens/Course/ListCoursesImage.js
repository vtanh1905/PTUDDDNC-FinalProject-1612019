import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ListCourseVertical from 'components/ListView/ListCourseVertical'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import TextOverImage from 'components/TextOverImage'

import { connect } from 'react-redux';
import { Req_Course_In_Browse } from '../../reducers/course/API_Course_In_Browse'

function ListCoursesImage(props) {
  const { navigation, route, Req_Course_In_Browse, API_Course_In_Browse } = props;
  const { title, imageURL } = route.params;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  console.log(user.id);
  useEffect(() => {
    Req_Course_In_Browse(user.id, title)
  }, [])

  return (
    <View style={{ paddingBottom: 90 }}>
      <IconFontAwesome name="chevron-left" size={20} style={{ color: 'white', position: 'absolute', top: 42, left: 23, zIndex: 99 }} onPress={() => navigation.goBack()} />
      <View style={{ height: 112 }}>
        <TextOverImage imageURL={imageURL}>
          {title}
        </TextOverImage>
      </View>
      {API_Course_In_Browse.data && !API_Course_In_Browse.loading ?
        <ListCourseVertical data={API_Course_In_Browse.data} navigation={navigation} lightTheme={themeLight.isLightTheme} /> :
        <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
          <ActivityIndicator color="#0069D9" size={100} />
        </View>
      }


    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Course_In_Browse
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ListCoursesImage);

