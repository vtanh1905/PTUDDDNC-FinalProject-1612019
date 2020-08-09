import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import ListCourseVertical from 'components/ListView/ListCourseVertical2'

import ThemeContext from '../../contexts/ThemeContext'
import { Req_User_Get_Favorite_Courses } from '../../reducers/user/API_User_Get_Favorite_Courses'

function Fauvorite(props) {
  const { themeLight } = useContext(ThemeContext)
  const { navigation, API_User_Get_Favorite_Courses, Req_User_Get_Favorite_Courses } = props;

  useEffect(() => {
    Req_User_Get_Favorite_Courses();
  }, [])

  if (API_User_Get_Favorite_Courses.loading || API_User_Get_Favorite_Courses.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }
  console.log(API_User_Get_Favorite_Courses.data);
  return (
    <>
      {API_User_Get_Favorite_Courses.data.payload.length !== 0 ? (
        <View>
          <ListCourseVertical data={API_User_Get_Favorite_Courses.data.payload} navigation={navigation} lightTheme={themeLight.isLightTheme} />
        </View>
      ) : (
          <View style={styles.centered}>
            <Icon name="arrow-with-circle-down" size={100} color="gray" />
            <Text style={{ fontSize: 17, fontWeight: "bold", ...themeLight.styles.text }}>No Fauvorite</Text>
            <Text style={{ fontSize: 17, ...themeLight.styles.text }}>Your fauvorite courses will appear here</Text>
          </View>
        )}
    </>
  )
}


const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_User_Get_Favorite_Courses
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(Fauvorite);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})