import React from 'react'

import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Rating } from 'react-native-elements';

function CardCourse(props) {
  const { data, navigation } = props;

  return (
    <View style={{ width: 210 }}>
      <Card onPress={() => { navigation.navigate('CourseDetail', { data }) }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: data.image }} />
        <Card.Content style={{ height: 100 }}>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold" }}>
            {((data.title).length > 50) ?
              (((data.title).substring(0, 50 - 3)) + '...') :
              data.title}
          </Text>
          <Text>{data.subTitle}</Text>
          <View style={{ alignItems: "flex-start" }}>
            <Rating imageSize={20} readonly startingValue={data.rate} />
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

export default CardCourse
