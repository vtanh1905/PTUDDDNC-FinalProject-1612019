import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, Share } from 'react-native'

import { Badge, Divider, Chip } from 'react-native-paper';
import { Rating, Avatar } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Toast from 'components/Toast'

import PlayVideo from '../../components/PlayVideo'
import ButtonDefault from 'components/Button/ButtonDefault'
import BadgeIcon from 'components/BadgeIcon'
import TabView from 'components/TabView'
import ListLesson from 'components/ListLesson'
import Transcript from './Transcript'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import ListCourseHorizontal from 'components/ListView/ListCourseHorizontal'

import { connect } from 'react-redux';
import { Req_Course_GetDetail } from '../../reducers/course/API_Course_GetDetail'
import { Req_User_Status_With_Course } from '../../reducers/user/API_User_Status_With_Course'
import { Req_User_Like_Course } from '../../reducers/user/API_User_Like_Course'
import { Req_User_Get_Favorite_Courses } from '../../reducers/user/API_User_Get_Favorite_Courses'
import { LISTCOURSES } from '../../assets/data'

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}

function CourseDetail(props) {
  const { navigation, route, API_Course_GetDetail, Req_Course_GetDetail, Req_User_Status_With_Course, API_User_Status_With_Course, Req_User_Like_Course, Req_User_Get_Favorite_Courses } = props;
  const { data } = route.params;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [statusLikeCourse, setStatusLikeCourse] = useState(false)
  const [urlVideo, setUrlVideo] = useState(null)
  useEffect(() => {
    Req_Course_GetDetail(data.id, user.id).then(res => {
      if (res.status === 200) {
        setUrlVideo(res.data.payload.promoVidUrl)
      }
    })
    Req_User_Status_With_Course(data.id).then((res) => {
      if (res.status === 200) {
        setStatusLikeCourse(res.data.likeStatus)
      }
    })
  }, [])

  if (API_Course_GetDetail.loading || API_Course_GetDetail.data === null || API_User_Status_With_Course.loading || API_User_Status_With_Course.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }
  console.log("Course ID : " + API_Course_GetDetail.data.id);
  console.log("User ID : " + user.id);

  return (
    <View style={styles.container}>
      <IconFontAwesome name="chevron-down" size={20} style={{ color: 'white', position: 'absolute', top: 16, left: 23, zIndex: 99 }} onPress={() => navigation.goBack()} />
      <PlayVideo
        urlVideo={urlVideo}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={{ fontSize: 27, fontWeight: "bold", ...themeLight.styles.text }}>{data.title}</Text>
          <View style={{ paddingHorizontal: 3, flexDirection: "row", marginVertical: 5 }}>
            <Chip avatar={<Avatar
              rounded
              size={100}
              source={{
                uri: API_Course_GetDetail.data.instructor.avatar,
              }}
            />}>{API_Course_GetDetail.data.instructor.name}</Chip>
          </View>
          <View style={{ paddingHorizontal: 3, flexDirection: "row", marginVertical: 5, justifyContent: 'space-between', ...themeLight.styles.text }}>
            <Text style={{ ...themeLight.styles.text, fontWeight: "bold" }}>{formatTime(API_Course_GetDetail.data.totalHours)}</Text>
            <Rating type='custom' tintColor={themeLight.isLightTheme ? "rgb(242, 242, 242)" : "#000000"} imageSize={18} readonly startingValue={API_Course_GetDetail.data.averagePoint} />
          </View>
          <Divider />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
            <BadgeIcon
              icon={<IconAntDesign name="star" size={30} style={{ color: `${statusLikeCourse ? '#F0CA02' : 'white'}` }} />}
              title='Favorite'
              lightTheme={themeLight.isLightTheme}
              onPress={() => {
                Req_User_Like_Course(data.id).then((res) => {
                  if (res.status === 200) {
                    setStatusLikeCourse(res.data.likeStatus)
                    Req_User_Get_Favorite_Courses();
                  }
                })
              }}
            />
            <BadgeIcon
              icon={<IconEntypo name="arrow-with-circle-down" size={30} style={{ color: 'white' }} />}
              title='Download'
              lightTheme={themeLight.isLightTheme}
            />
            <BadgeIcon
              icon={<IconEntypo name="link" size={30} style={{ color: 'white' }} />}
              title='Share'
              lightTheme={themeLight.isLightTheme}
              onPress={async () => {
                try {
                  await Share.share({ message: `https://itedu.me/course-detail/${data.id}` });
                } catch (error) {
                  alert(error.message);
                }
              }}
            />
          </View>
          <Divider />
          <Text style={{ textAlign: 'justify', fontWeight: '600', paddingVertical: 15, ...themeLight.styles.text }}>
            {API_Course_GetDetail.data.description}
          </Text>
          {/* <View style={{ width: '90%', alignSelf: 'center' }}>
            <ButtonDefault title='Take a learning check' />
          </View>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
            <ButtonDefault title='View related paths & courses' />
          </View> */}
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TabView
            lightTheme={themeLight.isLightTheme}
            routes={[
              { key: 'CONTENTS', title: 'Bài học' },
              { key: 'TRANSCRIPT', title: 'Tài liệu' },
            ]}
            scenes={[() => <ListLesson data={API_Course_GetDetail.data.section} lightTheme={themeLight.isLightTheme} urlVideo={urlVideo} setUrlVideo={setUrlVideo} />, () => <Transcript lightTheme={themeLight.isLightTheme} />]}
          />
        </View>

        <ListCourseHorizontal title={"Other Courses"} data={API_Course_GetDetail.data.coursesLikeCategory} navigation={navigation} lightTheme={themeLight.isLightTheme} showSeeAll={false} />
      </ScrollView>

    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Course_GetDetail,
  Req_User_Status_With_Course,
  Req_User_Like_Course,
  Req_User_Get_Favorite_Courses
};

export default connect(
  mapStatetoProps,
  mapDispathtoProps,
)(CourseDetail);


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 7
  },
});