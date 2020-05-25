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
        <Card.Content >
          <Title>{title}</Title>
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
