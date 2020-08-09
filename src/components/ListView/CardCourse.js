import React from 'react'

import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Rating } from 'react-native-elements';

function formatTime(totalHour) {
  return Math.floor(totalHour * 60) + " phút " + Math.ceil(((totalHour * 60) % 1) * 60) + " giây"
}

function CardCourse(props) {
  const { data, lightTheme, navigation } = props;

  return (
    <View style={{ width: 210 }}>
      <Card onPress={() => {
        if (navigation.canGoBack()) {
          navigation.replace('CourseDetail', { data: { id: data.id, title: data.title } })
        } else {
          navigation.navigate('CourseDetail', { data: { id: data.id, title: data.title } })
        }
      }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: data.imageUrl }} />
        <Card.Content style={{ height: 100, backgroundColor: `${lightTheme ? "white" : "rgb(60, 63, 68)"}` }}>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold", color: lightTheme ? "#000000" : "#FFFFFF" }}>
            {((data.title).length > 26) ?
              (((data.title).substring(0, 26 - 3)) + '...') :
              data.title}
          </Text>
          <Text style={{ color: lightTheme ? "#000000" : "#FFFFFF" }}>{data.videoNumber} Lessons </Text>
          <View style={{ alignItems: "flex-start" }}>
            <Rating type='custom' tintColor={lightTheme ? "white" : "rgb(60, 63, 68)"} imageSize={20} readonly startingValue={data.averagePoint} />
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

export default CardCourse
