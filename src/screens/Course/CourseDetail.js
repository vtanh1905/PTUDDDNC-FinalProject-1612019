import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { Badge, Divider } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import ButtonDefault from '../../components/Button/ButtonDefault'
import BadgeIcon from '../../components/BadgeIcon'
import TabView from '../../components/TabView'
import ListLesson from '../../components/ListLesson'
import Transcript from './Transcript'

function CourseDetail(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <IconFontAwesome name="chevron-down" size={20} style={{ color: 'white', position: 'absolute', top: 46, left: 23, zIndex: 99 }} onPress={() => navigation.goBack()} />
      <View>
        <VideoPlayer
          height={225}
          showFullscreenButton={false}

          videoProps={{
            shouldPlay: false,
            resizeMode: Video.RESIZE_MODE_STRETCH,
            source:
              require('../../assets/introduce.mp4')
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
          <Text style={{ fontSize: 27, fontWeight: "bold" }}>Javascript For Beginner</Text>
          <View style={{ paddingHorizontal: 3, flexDirection: "row", marginVertical: 5 }}>
            <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15, fontSize: 12, marginRight: 5 }} >Author 1</Badge>
            <Badge style={{ backgroundColor: "#6C757D", paddingHorizontal: 15, fontSize: 12, marginRight: 5 }} >Author 2</Badge>
          </View>
          <View style={{ paddingHorizontal: 3, flexDirection: "row", marginVertical: 5, justifyContent: 'space-between' }}>
            <Text>Basic - 4/9/2020</Text>
            <Rating tintColor='#f2f2f2' imageSize={18} readonly startingValue={3} />
          </View>
          <Divider />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 }}>
            <BadgeIcon
              icon={<IconAntDesign name="star" size={30} style={{ color: 'white' }} />}
              title='Favorite'
            />
            <BadgeIcon
              icon={<IconEntypo name="signal" size={30} style={{ color: 'white' }} />}
              title='Add to channel'
            />
            <BadgeIcon
              icon={<IconEntypo name="arrow-with-circle-down" size={30} style={{ color: 'white' }} />}
              title='Download'
            />
          </View>
          <Divider />
          <Text style={{ textAlign: 'justify', fontWeight: '600' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <ButtonDefault title='Take a learning check' />
          </View>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
            <ButtonDefault title='View related paths & courses' />
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <TabView
            routes={[
              { key: 'CONTENTS', title: 'CONTENTS' },
              { key: 'TRANSCRIPT', title: 'TRANSCRIPT' },
            ]}
            scenes={[ListLesson, Transcript]}
          />
        </View>
      </ScrollView>

    </View>
  )
}



export default CourseDetail

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 7
  },
});