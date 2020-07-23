import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Badge, Divider, Chip } from 'react-native-paper';
import { Rating, Avatar } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import ButtonDefault from 'components/Button/ButtonDefault'
import BadgeIcon from 'components/BadgeIcon'
import TabView from 'components/TabView'
import ListLesson from 'components/ListLesson'
import Transcript from './Transcript'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

import { connect } from 'react-redux';
import { Req_Course_GetDetail } from '../../reducers/course/API_Course_GetDetail'

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}

function CourseDetail(props) {
  const { navigation, route, API_Course_GetDetail, Req_Course_GetDetail } = props;
  const { data } = route.params;
  const { themeLight } = useContext(ThemeContext)
  const { user } = useContext(UserContext)
  useEffect(() => {
    Req_Course_GetDetail(data.id, user.id)
  }, [])

  if (API_Course_GetDetail.loading || API_Course_GetDetail.data === null) {
    return (
      <View style={{ height: '85%', justifyContent: "center", alignContent: "center" }}>
        <ActivityIndicator color="#0069D9" size={100} />
      </View>
    )
  }
  console.log(API_Course_GetDetail.data.section);
  return (
    <View style={styles.container}>
      <IconFontAwesome name="chevron-down" size={20} style={{ color: 'white', position: 'absolute', top: 16, left: 23, zIndex: 99 }} onPress={() => navigation.goBack()} />
      <View>
        <VideoPlayer
          height={225}
          showFullscreenButton={false}

          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_STRETCH,
            source: {
              // uri: "https://youtube.com/embed/E-LUKWIBNmY"
              uri: API_Course_GetDetail.data.promoVidUrl
            }

          }}
        // switchToLandscape={() => {
        //   changeScreenOrientation('LANDSCAPE');
        //   setCurrentOrientation('LANDSCAPE');
        // }}
        // switchToPortrait={() => changeScreenOrientation('PORTRAIT')}
        />
      </View>
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
              icon={<IconAntDesign name="star" size={30} style={{ color: 'white' }} />}
              title='Favorite'
              lightTheme={themeLight.isLightTheme}
            />
            <BadgeIcon
              icon={<IconEntypo name="signal" size={30} style={{ color: 'white' }} />}
              title='Add to channel'
              lightTheme={themeLight.isLightTheme}
            />
            <BadgeIcon
              icon={<IconEntypo name="arrow-with-circle-down" size={30} style={{ color: 'white' }} />}
              title='Download'
              lightTheme={themeLight.isLightTheme}
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
              { key: 'CONTENTS', title: 'CONTENTS' },
              { key: 'TRANSCRIPT', title: 'TRANSCRIPT' },
            ]}
            scenes={[() => <ListLesson data={API_Course_GetDetail.data.section[0].lesson} lightTheme={themeLight.isLightTheme} />, () => <Transcript lightTheme={themeLight.isLightTheme} />]}
          />
        </View>
      </ScrollView>

    </View>
  )
}

const mapStatetoProps = state => {
  return state;
};

const mapDispathtoProps = {
  Req_Course_GetDetail
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