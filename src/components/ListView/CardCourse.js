import React from 'react'

import { View, Text } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Rating } from 'react-native-elements';

function CardCourse(props) {
  const { image, title, subTitle, rate, navigation } = props;

  return (
    <View style={{ width: 210 }}>
      <Card onPress={() => { navigation.navigate('CourseDetail') }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: image }} />
        <Card.Content style={{ height: 100 }}>
          <Text style={{ fontSize: 14, marginTop: 10, fontWeight: "bold" }}>
            {((title).length > 50) ?
              (((title).substring(0, 50 - 3)) + '...') :
              title}
          </Text>
          <Text>{subTitle}</Text>
          <View style={{ alignItems: "flex-start" }}>
            <Rating imageSize={20} readonly startingValue={rate} />
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

export default CardCourse
