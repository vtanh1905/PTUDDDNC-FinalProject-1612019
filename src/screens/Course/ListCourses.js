import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import { connect } from 'react-redux';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { Req_Category_GetCourse } from '../../reducers/category/API_Category_GetCourse'
import { Req_User_Status_With_Course } from '../../reducers/user/API_User_Status_With_Course'
import { Req_User_Update_Favorite_Categories } from '../../reducers/user/API_User_Update_Favorite_Categories'
import ListCourseVertical from 'components/ListView/ListCourseVertical'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

function ListCourses(props) {
  const { navigation, route, API_Category_GetCourse, Req_Category_GetCourse, API_User_Status_With_Course, Req_User_Status_With_Course, Req_User_Update_Favorite_Categories } = props;
  const { data } = route.params;
  const { themeLight } = useContext(ThemeContext)
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    Req_Category_GetCourse(data.id);
  }, [])

  return (
    <>
      {(!API_Category_GetCourse.loading && API_Category_GetCourse.data !== null) ?
        <View style={{ paddingBottom: 90 }}>
          {data.name &&
            <View>
              <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25, color: themeLight.isLightTheme ? "#000000" : "#FFFFFF" }}>{data.name}</Text>
              <IconFontAwesome
                name={user.favoriteCategories.some(item => item === data.id) === false ? "star-o" : "star"}
                color="#F4D03F"
                size={30}
                style={{ position: 'absolute', top: 13, right: 27, zIndex: 99 }}
                onPress={async () => {
                  const favoriteCategories = user.favoriteCategories;
                  if (favoriteCategories.some(item => item === data.id)) {
                    const temp = favoriteCategories.filter(item => item !== data.id);
                    setUser({
                      ...user, favoriteCategories: temp
                    })
                    await Req_User_Update_Favorite_Categories(temp)
                  } else {
                    favoriteCategories.push(data.id)
                    setUser({
                      ...user, favoriteCategories: favoriteCategories
                    })
                    await Req_User_Update_Favorite_Categories(favoriteCategories)
                  }
                }}
              />
            </View>
          }
          <ListCourseVertical data={API_Category_GetCourse.data.rows} navigation={navigation} lightTheme={themeLight.isLightTheme} />
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
  Req_Category_GetCourse,
  Req_User_Status_With_Course,
  Req_User_Update_Favorite_Categories
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(ListCourses);
