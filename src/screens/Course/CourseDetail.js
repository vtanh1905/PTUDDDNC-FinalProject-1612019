import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, ActivityIndicator, Share, TouchableOpacity, AsyncStorage } from 'react-native'

import { Badge, Divider, Chip, TextInput } from 'react-native-paper';
import { Rating, Avatar, AirbnbRating } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';

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
import Comments from '../../components/Comments'
import ModalDownload from '../../components/ModalDownload'

import { connect } from 'react-redux';
import { Req_Course_GetDetail } from '../../reducers/course/API_Course_GetDetail'
import { Req_User_Status_With_Course } from '../../reducers/user/API_User_Status_With_Course'
import { Req_User_Like_Course } from '../../reducers/user/API_User_Like_Course'
import { Req_User_Get_Favorite_Courses } from '../../reducers/user/API_User_Get_Favorite_Courses'
import { Req_Register_Course } from '../../reducers/payment/API_Register_Course'
import { Req_Get_Status_Register_Course } from '../../reducers/payment/API_Get_Status_Register_Course'
import { Req_Comment_Course } from '../../reducers/course/API_Course_Coment'

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}

function CourseDetail(props) {
  const {
    navigation,
    route,
    API_Course_GetDetail,
    Req_Course_GetDetail,
    Req_User_Status_With_Course,
    API_User_Status_With_Course,
    Req_User_Like_Course,
    Req_User_Get_Favorite_Courses,
    Req_Register_Course,
    API_Register_Course,
    Req_Get_Status_Register_Course,
    Req_Comment_Course,
    API_Course_Coment
  } = props;
  const { data } = route.params;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  const [statusLikeCourse, setStatusLikeCourse] = useState(false)
  const [urlVideo, setUrlVideo] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const [rateComment, setRateComment] = useState(3)
  const [textComment, setTextComment] = useState("")
  const [listComments, setListComments] = useState([])
  const [showModalDownload, setShowModalDownload] = useState(false)
  const [progressDownload, setProgressDownload] = useState(0)

  useEffect(() => {
    Req_Course_GetDetail(data.id, user.id).then(res => {
      if (res.status === 200) {
        setUrlVideo(res.data.payload.promoVidUrl)
        setListComments(res.data.payload.ratings.ratingList)
      }
    })
    Req_User_Status_With_Course(data.id).then((res) => {
      if (res.status === 200) {
        setStatusLikeCourse(res.data.likeStatus)
      }
    })
    Req_Get_Status_Register_Course(data.id).then(res => {
      if (res.status === 200) {
        setIsRegistered(res.data.didUserBuyCourse)
      }
    })
  }, [setRateComment, setTextComment])

  if (API_Course_GetDetail.loading || API_Course_GetDetail.data === null || API_User_Status_With_Course.loading || API_User_Status_With_Course.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }
  // console.log("Course ID : " + API_Course_GetDetail.data);
  // console.log("User ID : " + user.id);
  // console.log(API_Course_GetDetail.data);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ position: 'absolute', top: 16, left: 23, zIndex: 99 }}
        onPress={() => navigation.goBack()}
      >
        <IconFontAwesome
          name="chevron-down"
          size={20}
          style={{ color: 'white' }}
        />
      </TouchableOpacity>

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
              onPress={async () => {
                // Kiểm tra phải link mp4
                if (urlVideo === null || urlVideo === undefined || /www\.youtube\.com/.test(urlVideo) === true) {
                  Toast("Video can't download!")
                  return false;
                }
                let videoDownload = await AsyncStorage.getItem("videoDownload")
                if (!videoDownload) {
                  videoDownload = []
                } else {
                  videoDownload = JSON.parse(videoDownload)
                  const checkExistDownload = videoDownload.some(item => item.id === API_Course_GetDetail.data.id)
                  if (checkExistDownload === true) {
                    Toast("Video downloaded!")
                    return
                  }
                }


                const fileUri = FileSystem.documentDirectory + data.title + ".mp4";
                let downloadObject = FileSystem.createDownloadResumable(
                  urlVideo,
                  fileUri,
                  {},
                  (downloadProgress) => {
                    setShowModalDownload(true)
                    const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
                    setProgressDownload(progress)
                  }
                );
                // courseImage courseTitle courseAveragePoint id
                let response = await downloadObject.downloadAsync();


                videoDownload.push({ id: API_Course_GetDetail.data.id, courseTitle: API_Course_GetDetail.data.title, courseImage: API_Course_GetDetail.data.imageUrl, courseAveragePoint: API_Course_GetDetail.data.averagePoint })
                await AsyncStorage.setItem('videoDownload', JSON.stringify(videoDownload))
                setShowModalDownload(false)
                Toast("Download Successfully!")
              }}
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
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <ButtonDefault loading={API_Register_Course.loading} title={`${isRegistered ? "Registered" : "Register"}`} disabled={isRegistered} onPress={() => {
              Req_Register_Course(data.id).then((res) => {
                if (res.status === 200) {
                  Toast("Register Successfully")
                }
              })
            }} />
          </View>
          {/* <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
            <ButtonDefault title='View related paths & courses' />
          </View> */}
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TabView
            lightTheme={themeLight.isLightTheme}
            routes={[
              { key: 'CONTENTS', title: 'Lessons' },
              { key: 'TRANSCRIPT', title: 'Exercise' },
            ]}
            scenes={[
              () => <ListLesson data={API_Course_GetDetail.data.section} lightTheme={themeLight.isLightTheme} urlVideo={urlVideo} setUrlVideo={setUrlVideo} />,
              () => <Transcript lightTheme={themeLight.isLightTheme} />
            ]}
          />
        </View>

        <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: themeLight.isLightTheme ? "#000000" : "#FFFFFF" }}>Comment</Text>
          <Comments data={listComments} lightTheme={themeLight.isLightTheme} />
          <View style={{ marginTop: 5 }}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              underlineColor="#000000"
              value={textComment}
              onChange={(value) => setTextComment(value.nativeEvent.text)}
            />
            <View style={{ flex: 1 }}>
              <View style={{ alignItems: "flex-start" }}>
                <AirbnbRating defaultRating={rateComment} showRating={false} size={20} onFinishRating={(value) => setRateComment(value)} />
              </View>
              <View style={{ alignItems: "flex-end", marginTop: -25 }}>
                <ButtonDefault loading={API_Course_Coment.loading} title="Submit" onPress={() => {
                  if (textComment === "") {
                    Toast("Please write your comment!")
                    return;
                  }
                  Req_Comment_Course(data.id, rateComment, textComment).then(res => {
                    if (res.status === 200) {
                      setListComments([...listComments, {
                        user,
                        content: textComment,
                        averagePoint: rateComment,
                      }])
                      setRateComment(3)
                      setTextComment("")
                      Toast("Comment Successfully")
                    }
                  })
                }} />
              </View>
            </View>
          </View>

        </View>

        <ListCourseHorizontal title={"Other Courses"} data={API_Course_GetDetail.data.coursesLikeCategory} navigation={navigation} lightTheme={themeLight.isLightTheme} showSeeAll={false} />
      </ScrollView>

      <ModalDownload visible={showModalDownload} setVisible={setShowModalDownload} value={+parseFloat(`${progressDownload}`).toFixed(2)} />
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
  Req_User_Get_Favorite_Courses,
  Req_Register_Course,
  Req_Get_Status_Register_Course,
  Req_Comment_Course
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